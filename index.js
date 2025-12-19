const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PS AI Backend is running ✅");
});

app.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message missing ❌" });
  }

  // Abhi test reply (AI baad mein joren ge)
  res.json({
    reply: "Hello! Backend bilkul theek chal raha hai 👍"
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});