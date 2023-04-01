const Sequelize=require('sequelize');


const sequelize=require('../util/database');

const product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title: Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNUll:false,
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNUll:false
  }
})



module.exports=product;













// // const fs = require('fs');
// // const path = require('path');

// const Cart = require('./cart');
// const db = require('../util/database');

// // const p = path.join(
// //   path.dirname(process.mainModule.filename),
// //   'data',
// //   'products.json'
// // );

// // const getProductsFromFile = cb => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products(titile,price,description,imageurl) VALUES(?, ?, ?, ?)',
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static deleteById(id) {
//   return db.execute('delete from products where products.id=?',[id]);
//   }

//   static fetchAll() {
//     return db.execute('SELECT * from products');
//   }

//   static findById(id) {
//     return db.execute('select * from products where products.id=?',[id]);
//   }
// };
