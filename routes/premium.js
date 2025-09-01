const express = require("express");
const router = express.Router();
const checkSubscription = require("../middleware/checkSubscription");

// All routes here require subscription
router.get("/diagnosis", checkSubscription, (req, res) => {
  res.render("diagnosis"); 
});

router.get("/market", checkSubscription, (req, res) => {
  res.render("market");
});

router.get("/fertilizer", checkSubscription, (req, res) => {
  res.render("fertilizer");
});

module.exports = router;
