const axios = require("axios");
const btoa = require("btoa");

async function getAccessToken() {
  const auth = btoa(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`);
  try {
    const response = await axios.get(process.env.OAUTH_URL, {
      headers: { Authorization: `Basic ${auth}` }
    });
    return response.data.access_token;
  } catch (err) {
    console.error("Daraja access token error:", err.response?.data || err.message);
    throw err;
  }
}

function generateTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[^0-9]/g, "").slice(0, 14);
}

function generatePassword() {
  const shortCode = process.env.SHORTCODE;
  const passkey = process.env.PASSKEY; // Daraja sandbox passkey
  const timestamp = generateTimestamp();
  const str = shortCode + passkey + timestamp;
  return Buffer.from(str).toString("base64");
}

module.exports = { getAccessToken, generatePassword, generateTimestamp };
