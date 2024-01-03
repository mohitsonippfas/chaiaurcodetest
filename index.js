const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/soni", (req, res) => {
  res.send("Hello soni mohit!");
});
app.get("/login", (req, res) => {
  res.send("<h1> please log in to the page first</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
