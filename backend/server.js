const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Andrew",
      isStudent: false,
    },
    {
      id: 2,
      name: "Grace",
      isStudent: false,
    },
    {
      id: 3,
      name: "Chris",
      isStudent: true,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
