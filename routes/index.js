const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Yup, It works!");
});

module.exports = router;
