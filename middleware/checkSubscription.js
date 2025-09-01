const db = require("../modules/db");

async function checkSubscription(req, res, next) {
  try {
    if (!req.user) {
      return res.redirect("/login");
    }

    const [rows] = await db.query(
      "SELECT plan_type, trial_end, expiry_date FROM users WHERE id=?",
      [req.user.id]
    );

    if (!rows || rows.length === 0) {
      return res.redirect("/subscription/upgrade"); // ✅ absolute path
    }

    const user = rows[0];
    const now = new Date();

    if (user.plan_type === "trial" && new Date(user.trial_end) > now) {
      return next(); // trial still valid
    }

    if (user.plan_type === "premium" && new Date(user.expiry_date) > now) {
      return next(); // premium still valid
    }

    return res.redirect("/subscription/upgrade");

  } catch (err) {
    console.error("Subscription check error:", err);
    return res.redirect("/subscription/upgrade");
  }
}

module.exports = checkSubscription;
