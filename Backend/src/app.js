const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();


app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
 }
 console.log*("CORS options:", corsOptions.origin);

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello, World!");
})

app.use("/ai", aiRoutes);

module.exports = app;