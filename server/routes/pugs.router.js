const router = require('express').Router()
const {Pug, Coffee} = require('../models')

router.get('/', async (req,res)=>{
    const pugs = await Pug.findAll();
    res.send(pugs);
})

router.get('/favoriteCoffee/:favoriteCoffeeName', async (req, res) =>{
    
})



module.exports = router