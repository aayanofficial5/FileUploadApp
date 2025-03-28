const express = require("express");
const router = express.Router();
// import controllers here
const {localFileUpload} = require("../Controllers/localFileUpload");
const {imageUpload} = require("../Controllers/imageUpload");
const {videoUpload} = require("../Controllers/videoUpload");
const {imageSizeReducer} = require("../Controllers/imageSizeReducer");

// write routes here
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imageSizeReducer",imageSizeReducer);

module.exports = router;
