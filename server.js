import express from "express";
import fetch from "node-fetch";
const app = express();
const API_KEY = "db46f3816d4d4b9bb94171026252412";

app.get("/weather", async (req, res) => {
  const { city } = req.query;

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on port", PORT));