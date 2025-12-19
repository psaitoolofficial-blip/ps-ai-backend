const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("PS AI Backend is running ✅");
});

app.post("/ask", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message missing" });
  }

  res.json({ reply: "Hello from PS AI Tool 🤖" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
