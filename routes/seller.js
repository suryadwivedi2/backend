const express=require('express');

const sellercontroller=require('../controllers/selleradmin');

const router=express.Router();



router.post('/add-product',sellercontroller.getaddProduct);

router.get('/get-product',sellercontroller.getProduct);

router.delete('/delete-product/:id',sellercontroller.DeleteProduct);

module.exports=router;