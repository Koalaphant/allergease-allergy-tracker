const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/users.json");

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
