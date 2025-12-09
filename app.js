const express = require("express");
const { nanoid } = require("nanoid");

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database (object) to store URLs
// Example: { "abc123": "https://google.com" }
const urlDatabase = {};

// Helper: ensure the URL has http/https
function normalizeUrl(longUrl) {
  if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
    return "https://" + longUrl;
  }
  return longUrl;
}

// Home route - simple info
app.get("/", (req, res) => {
  res.send(
    "URL Shortener API is running. Use POST /shorten with { longUrl } to create a short link."
  );
});

// Create short URL
app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({
      success: false,
      message: "longUrl is required in the request body"
    });
  }

  const normalizedUrl = normalizeUrl(longUrl);
  const id = nanoid(7); // 7-character short ID
  urlDatabase[id] = normalizedUrl;

  const shortUrl = `http://localhost:${PORT}/${id}`;

  return res.json({
    success: true,
    id,
    longUrl: normalizedUrl,
    shortUrl
  });
});

// Redirect from short URL to original
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const longUrl = urlDatabase[id];

  if (!longUrl) {
    return res.status(404).send("Short URL not found");
  }

  // Redirect user to the original URL
  return res.redirect(longUrl);
});

// (Optional) List all stored URLs - for testing
app.get("/urls/all", (req, res) => {
  res.json({
    success: true,
    data: urlDatabase
  });
});

app.listen(PORT, () => {
  console.log(`URL Shortener API listening on port ${PORT}`);
  console.log(`Try: POST http://localhost:${PORT}/shorten with JSON { "longUrl": "google.com" }`);
});
