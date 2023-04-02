const User=require('../models/user1');


exports.Postadduser=async(req,res,next)=>{
  const name=req.body.username;
  const email=req.body.email;
  const phonenumber=req.body.phonenumber;
  
  const data=await User.create({
     name:name,
     email:email,
     phonenumber:phonenumber
  })
  res.status(201).json({userdetails:data});
  };


  exports.getuser=(req,res,next)=>{
   User.findAll().then((users)=>{
    res.json(users);
   }).catch(err=>console.log(err))
  }

  exports.deleteuser=async(req,res,next)=>{
    const uId=req.params.id;
  await User.destroy({where:{id:uId}});
  res.status(200);   
  }