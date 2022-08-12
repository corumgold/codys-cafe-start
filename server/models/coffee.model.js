const { Sequelize, Op } = require("sequelize");
const db = require("./database");

const Coffee = db.define("coffee", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.STRING),
  },
});

Coffee.prototype.getIngredients = function () {
  return this.ingredients.join(", ");
};

Coffee.findByIngredient = async function (ingredient) {
  let foundCoffee = await Coffee.findAll({
    where: {
      ingredients: {
        [Op.contains]: [ingredient],
      },
    },
  });
  return foundCoffee;
};

Coffee.beforeValidate((coffee) => {
  if (!coffee.ingredients.includes("love")) {
    coffee.ingredients.push("love");
  }
});

module.exports = Coffee;
