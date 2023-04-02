const express=require('express');

const usercontroller=require('../controllers/adduser');
const router=express.Router();



router.post('/add-user',usercontroller.Postadduser);

router.get('/get-user',usercontroller.getuser);

router.delete('/delete-user/:id',usercontroller.deleteuser);


module.exports=router;