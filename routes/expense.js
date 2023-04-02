const express=require('express');

const expensecontroller=require('../controllers/expense');
const router=express.Router();

router.post('/add-expense',expensecontroller.postaddexp);

router.get('/get-expense',expensecontroller.getexpenses);

router.delete('/delete-expense/:id',expensecontroller.deleteexpense);

//router.put('/edit-expense/:id',expensecontroller.editexpense)

module.exports=router;