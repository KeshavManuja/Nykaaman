const express = require("express");

const Product = require("../models/product.model")

const router = express.Router();

router.post("/products",async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(201).send(product)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

router.get("/products",async(req,res)=>{
    try{
        const product = await Product.find().lean().exec()
        res.status(201).send(product)
        console.log(product)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})






module.exports = router