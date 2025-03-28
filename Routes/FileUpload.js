const express = require("express");
const router = express.Router();
// import controllers here
const {localFileUpload} = require("../Controllers/fileUpload");

router.post("/localFileUpload",localFileUpload);

// write routes here

module.exports = router;
