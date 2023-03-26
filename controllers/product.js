const path = require("path");
const rootdir = require('../util/path.js');

exports.addproduct=(req, res, next) => {
    //  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
}

exports.getshop=(req, res, next) => {
    // console.log(req.body.product);
     // console.log(req.body.size);
     res.redirect("/shop/");
 }

exports.shop=(req, res, next) => {
    //    res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
}
exports.getcontactus=(req, res, next) => {
    //  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
}
exports.postsucess=(req, res, next) => {
    //  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
}

exports.error=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
    }


