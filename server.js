import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3001;

app.use(express.json({ limit: "50mb" }));

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Proxy endpoint
app.post("/proxy", async (req, res) => {
  try {
    console.log(req.body);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxC1D52EkA3OQ0HVBcotVyQ7YUAii-mpFDs5doOPAq4XrN1Ti8SnXVgj4_U7bgZbOkb3g/exec",
      {
        // Replace with your Google Apps Script Web App URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`CORS proxy server running on http://localhost:${port}`);
});
