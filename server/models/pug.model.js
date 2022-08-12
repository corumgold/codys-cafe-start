const Sequelize = require('sequelize')
const db = require('./database')
const Coffee = require('./coffee.model')

const Pug = db.define('pug', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  age : {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  biography : {
    type: Sequelize.TEXT
  }
})

Pug.findByCoffee = async function(coffeeName) {
  const pugs = await this.findAll({
    include: {
      model: Coffee,
      as: 'favoriteCoffee',
      where: {
        name: coffeeName
      }
    }
  })
  console.log(pugs)
  return pugs;
}

module.exports = Pug
  