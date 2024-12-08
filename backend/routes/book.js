const express = require("express");
const { handleGetBook,handleAdventureGetBook,handleFantasyGetBook,handleFictionGetBook,handleHorrorGetBook,handleInspirationalGetBook,handleMysteryGetBook,handleNonFictionGetBook,handleScienceFictionGetBook,handleTechnologyGetBook,handleThrillerGetBook,handleSearchBookByName} = require("../controllers/book");  // Assuming this function is in controllers/book
const router = express.Router();

//bookes api
router.get("/", handleGetBook);  
router.get("/adventure",handleAdventureGetBook)
router.get("/fantasy",handleFantasyGetBook)
router.get("/fiction",handleFictionGetBook)
router.get("/horror",handleHorrorGetBook)
router.get("/inspirational",handleInspirationalGetBook)
router.get("/mystery",handleMysteryGetBook)
router.get("/nonfiction",handleNonFictionGetBook)
router.get("/sciencefiction",handleScienceFictionGetBook)
router.get("/technology",handleTechnologyGetBook)
router.get("/thriller",handleThrillerGetBook)
//search api
router.post("/",handleSearchBookByName)
module.exports = router;  // Export the router to use in app.js
