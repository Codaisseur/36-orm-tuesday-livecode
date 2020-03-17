const express = require("express");
const models = require("./models");

const app = express();

const Developer = models.developer;

app.get("/", (req, res) => {
  res.send("hello, you're all awesome");
});

app.get("/developers", async (req, res) => {
  const developers = await Developer.findAndCountAll({
    limit: 2
  });
  res.json(developers);
});

app.get("/developers/:id", async (req, res) => {
  const developer = await Developer.findByPk(req.params.id);
  if (!developer) {
    res.status(401).json({ error: "nope, doesn't exist" });
  } else {
    res.json(developer);
  }
});

app.listen(4000, () => {
  console.log(`It started running on port 4000, amazing!`);
});
