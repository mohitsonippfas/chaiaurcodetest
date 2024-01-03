const express = require("express");
const app = express();
const port = 4000;

const data = [
  {
    color: "red",
    value: "#f00",
  },
  {
    color: "green",
    value: "#0f0",
  },
  {
    color: "blue",
    value: "#00f",
  },
  {
    color: "cyan",
    value: "#0ff",
  },
  {
    color: "magenta",
    value: "#f0f",
  },
  {
    color: "yellow",
    value: "#ff0",
  },
  {
    color: "black",
    value: "#000",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/soni", (req, res) => {
  res.send("Hello soni mohit!");
});
app.get("/login", (req, res) => {
  res.send("<h1> please log in to the page first</h1>");
});
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
