export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwEjcNa5ZeDwDUhg2cOYgyhQiK2eDyvqTylYNNIUNW3mnOG6LvkHgTqjfNcUTjEcQpc/exec",
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
  return res;
}
