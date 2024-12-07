const express=require("express")
const router=express.Router()
const { handleGenrateNewShortUrl,handleGetUrlByShortId,handleGetAnalytices,handleServersideRandering }=require("../controllers/url")
router.route("/").post(handleGenrateNewShortUrl)
router.route("/:shortId").get(handleGetUrlByShortId)
router.route("/analytics/:shortId").get(handleGetAnalytices)
router.route("/test").get(handleServersideRandering)
module.exports=router