const Exp=require('../models/expense_detail');



exports.postaddexp=async(req,res,next)=>{
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
  const data=await Exp.create({
    amount:amount,
   description:description,
    category:category
  })
  res.json({expensedetails:data});
}

exports.getexpenses=async(req,res,next)=>{
  await  Exp.findAll().then((expenses)=>{
     res.json(expenses);
    }).catch(err=>console.log(err))
   }


   exports.deleteexpense=async(req,res,next)=>{
    const expId=req.params.id;
   const data =await Exp.destroy({where:{id:expId}});
  res.status(200).json(data);   
  }
  
  exports.editexpense=async(req,res,next)=>{
    const expId=req.params.id;
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
    const data={
      "amount":amount,
      "description":description,
      "category":category
    }
    await Exp.update({amount:amount,
      description:description,
      category:category
    },{where:{id:expId}})

    res.json(data)
  }

  