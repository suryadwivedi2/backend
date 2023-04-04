const Seller=require('../models/selleradmin');




exports.getaddProduct=async(req,res,next)=>{
const sp=req.body.Sellingprice;
const productname=req.body.Productname;
const category=req.body.Category;
const data=await Seller.create({
    Sellingprice:sp,
    Productname:productname,
    Category:category
})
res.status(200).json({sellerdetails:data});
}

exports.getProduct=(req,res,next)=>{
    Seller.findAll().then((products)=>{
        res.json(products);
    }).catch((err)=>console.log(err))
}

exports.DeleteProduct=async(req,res,next)=>{
 const Id=req.params.id;
 const data=await Seller.destroy({where:{id:Id}})

 res.status(200).json(data);
}