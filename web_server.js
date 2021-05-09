const fs = require("fs");
const key = fs.readFileSync("./key.pem");
const cert = fs.readFileSync("./cert.pem");

const express = require("express");
const https = require("https");
const dotenv = require("dotenv");

const app = express();
const server = https.createServer({ key: key, cert: cert }, app);

dotenv.config({ path: "./.env.web" });

app.use(express.static("public"));

app.get("/api", (req, res) => {
  console.log("/api");
  res.json({ res: "ok" });
});

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
