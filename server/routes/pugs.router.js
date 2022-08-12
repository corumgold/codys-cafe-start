const router = require("express").Router();
const { Pug, Coffee } = require("../models");

router.get("/", async (req, res) => {
  const pugs = await Pug.findAll();
  res.send(pugs);
});

router.get("/favoriteCoffee/:favoriteCoffeeName", async (req, res) => {
  faveCoffee = req.params.favoriteCoffeeName;
  let pug = await Pug.findByCoffee(faveCoffee);
  res.send(pug);
});

router.get("/:pugId", async (req, res) => {
  const id = req.params.pugId;
  const pug = await Pug.findByPk(id);
  if (pug) {
    res.send(pug);
  } else {
    res.status(404).send("Error!");
  }
});

router.post("/", async (req, res) => {
  let newPug = await Pug.create(req.body);
  res.status(201).send(newPug);
});

router.put("/:pugId", async (req, res) => {
  const id = req.params.pugId;
  const pug = await Pug.findByPk(id);
  if (pug) {
    await pug.set(req.body);
    await pug.save();
    res.send(pug);
  } else {
    res.status(404).send("error!");
  }
});

module.exports = router;
