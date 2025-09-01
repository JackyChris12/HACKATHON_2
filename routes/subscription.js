const express = require("express");
const router = express.Router();

// ✅ Middleware to check subscription (you can import if in separate file)
function checkSubscription(req, res, next) {
  if (!req.session.user || req.session.user.subscription !== "premium") {
    console.log("⛔ Access denied: user not premium, redirecting to /subscription/upgrade");
    return res.redirect("/subscription/upgrade"); // ✅ FIXED with leading slash
  }
  console.log("✅ User is premium, granting access.");
  next();
}

// ✅ Upgrade route
router.get("/upgrade", (req, res) => {
  console.log("⚡ Serving Upgrade Page (/subscription/upgrade)");
  res.render("subscription/upgrade"); // ✅ matches views/subscription/upgrade.ejs
});

// ✅ Example of a premium-only route
router.get("/premium-content", checkSubscription, (req, res) => {
  res.send("🎉 Welcome! This is premium content only visible to premium users.");
});

module.exports = router;
