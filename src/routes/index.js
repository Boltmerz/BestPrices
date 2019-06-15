
const bodyparser =  require('body-parser');
const {AsyncRouter} =  require( 'express-async-router');
const products =  require( './products');
const router = new AsyncRouter();
 products(router);

 module.exports=router;

