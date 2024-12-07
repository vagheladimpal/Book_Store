const shortid = require("shortid");
const url = require("../models/url");
async function handleGenrateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.staus(400).json({ Error: "url is require" });
  const shortId = shortid();
  await url.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.render("home",{
    id:shortId
  })
}
async function handleGetUrlByShortId(req, res) {
  const shortId = req.params.shortId;

  const entry = await url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}
async function handleGetAnalytices(req, res) {
  const shortId = req.params.shortId;
  const result = await url.findOne({ shortId });
  return res.json({
    totleclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
async function handleServersideRandering(req, res) {
  const allUrl = await url.find({});
  res.render('home',
    {urls:allUrl}
  )
}
module.exports = {
  handleGenrateNewShortUrl,
  handleGetUrlByShortId,
  handleGetAnalytices,
  handleServersideRandering,
};
