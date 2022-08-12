const router = require("express").Router();
const { Coffee } = require("../models");

router.get("/", async (req, res) => {
  const coffees = await Coffee.findAll();
  res.send(coffees);
});

router.get("/ingredients/:ingredientName", async (req, res) => {
  const ingredient = req.params.ingredientName;
  const coffees = await Coffee.findByIngredient(ingredient);
  res.send(coffees);
});

router.get("/:coffeeId", async (req, res) => {
  const coffeeNum = req.params.coffeeId;
  const coffee = await Coffee.findByPk(coffeeNum);
  if (!coffee) {
    res.status(404).send("error!");
  } else {
    res.send(coffee);
  }
});

router.post("/", async (req, res) => {
  const coffeeName = req.body.name;
  const newCoffee = await Coffee.create({
    name: coffeeName,
    ingredients: [],
  });
  res.status(201).send(newCoffee);
});

module.exports = router;
