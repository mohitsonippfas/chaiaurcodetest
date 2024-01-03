const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/soni", (req, res) => {
  res.send("Hello soni mohit!");
});
app.get("/login", (req, res) => {
  res.send("<h1> please log in to the page first</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
