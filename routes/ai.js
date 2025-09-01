const express = require("express");
const router = express.Router();
const checkSubscription = require("../middleware/checkSubscription");

// Diagnosis route (protected)
router.get("/diagnosis", checkSubscription, (req, res) => {
  res.render("diagnosis"); 
});

module.exports = router;
