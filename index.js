import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PS AI Backend is running ✅");
});

app.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }]
        })
      }
    );

    const d = await r.json();

    const reply =
      d?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";

    res.json({ reply });
  } catch (e) {
    res.json({ reply: "AI Error ❌" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Running on", PORT));