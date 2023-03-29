const path = require('path');
const fs = require('fs');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);


module.exports = class Cart {
  static addproduct(id, productprice) {
    //fetch the previous cart
    //analyze existing cart
    //increase the quantity add product
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalprice: 0 }
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingproductindex = cart.products.findIndex(prod => prod.id === id)
      const existingproduct = cart.products[existingproductindex]
      let updatesproduct
      if (existingproduct) {
        updatesproduct = { ...existingproduct }
        updatesproduct.qty = updatesproduct.qty + 1;
        cart.products = [...cart.products]
        cart.products[existingproductindex] = updatesproduct
      } else {
        updatesproduct = { id: id, qty: 1 }
        cart.products = [...cart.products, updatesproduct]
      }
      cart.totalprice = cart.totalprice + +productprice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      })
    }

    )

  }

  static deleteProduct(id,productPrice){
  fs.readFile(p,(err,fileContent)=>{
    if(err){
      return;
    }
    const updatedCart={...JSON.parse(fileContent)};
     const product=updatedCart.products.find(prod=>prod.id===id);
     const productQty=product.qty;
     updatedCart.products=updatedCart.products.filter(prod=>prod.id!=id);
     updatedCart.totalprice=updatedCart.totalprice-productPrice*productQty;
     fs.writeFile(p,JSON.stringify(updatedCart),err=>{
      console.log(err);
     })
  })
  }
}