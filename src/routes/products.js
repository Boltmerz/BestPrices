var Product = require("../models/product");

module.exports = (route)=>{
    route.get('/products',async (req,res)=>{
         const products  = await Product.find({});
         if (products) res.send(products);
         else res.status(HttpStatus.NO_CONTENT).send();
    })
}