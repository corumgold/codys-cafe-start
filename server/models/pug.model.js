const Sequelize = require("sequelize");
const db = require("./database");
const Coffee = require("./coffee.model");

const Pug = db.define("pug", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  biography: {
    type: Sequelize.TEXT,
  },
});

Pug.prototype.isPuppy = function () {
  return this.age < 1;
};

Pug.prototype.shortBio = function () {
  const special = ".!?";
  for (let i = 0; i < this.biography.length; i++) {
    if (special.includes(this.biography[i])) {
      let index = i;
      return this.biography.slice(0, index);
    }
  }
};

Pug.findByCoffee = async function (coffeeName) {
  const pugs = await this.findAll({
    include: {
      model: Coffee,
      as: "favoriteCoffee",
      where: {
        name: coffeeName,
      },
    },
  });
  return pugs;
};

Pug.beforeValidate((pug) => {
  pug.name = pug.name[0].toUpperCase() + pug.name.slice(1);
});

module.exports = Pug;
