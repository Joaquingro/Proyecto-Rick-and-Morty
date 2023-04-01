
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const {postFav, getFav, deleFav} = require("../controllers/favs")
const getAllChars  = require("../controllers/getAllChars"); 
const router = require("express").Router();

router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:detailId", getCharDetail);
router.get("/rickandmorty/all", getAllChars)
router.post("/rickandmorty/fav", postFav);
router.get("/rickandmorty/fav", getFav);
router.delete("/rickandmorty/fav/:id", deleFav);



module.exports = router;