const fs = require('fs');
const path = require('path');

const cart=require('./cart');
const { stringify } = require('querystring');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingproductsindex = products.findIndex(prod => prod.id === this.id)
        const updatedproducts = [...products];
        updatedproducts[existingproductsindex] = this;
        fs.writeFile(p, JSON.stringify(updatedproducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
    }

    static deleteById(id){
      getProductsFromFile(products=>{
        const product=products.find(prod=>prod.id==id);
        const updatedProduct=products.filter(prod=>prod.Id!==id);
        fs.writeFile(p,JSON.stringify(updatedProduct),err=>{
        if(!err){
          cart.deleteProduct(id,product.price);
        }
        })
      })
    }

  static fetchAll(cb) {
  getProductsFromFile(cb);
}

  static findbyId(id, cb){
  getProductsFromFile(products => {
    const product = products.find(p => p.id === id)
    cb(product);
  })
}
}
