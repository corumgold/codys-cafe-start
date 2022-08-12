const db = require('./database')
const Pug = require('./pug.model')
const Coffee = require('./coffee.model')

// VVV assign relations below VVV //
Pug.belongsTo(Coffee, {as : 'favoriteCoffee'});
Coffee.hasMany(Pug);
Pug.belongsToMany(Pug, {as: 'friends'})

// ^^^ assign relations above ^^^ //

module.exports = {
  db,
  Pug,
  Coffee
}

// Page.belongsTo(User, { as: "author" });
// User.hasMany(Page, {foreignKey: 'authorId'});
// Page.belongsToMany(Tag, {through: 'page_tags'});
// Tag.belongsToMany(Page, {through: 'page_tags'});

//one to one : a person has a best friend => use belongsTo

// one to many: a teacher has many students
//teacher hasMany Students
//student belongsTo Teacher; student has foreign key


// many to many : a student can have many mentors, mentors can have many students
// only use belongsToMany
// needs a through table, defined on both 
