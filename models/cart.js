const Sequelize=require('sequelize');


const sequelize=require('../util/database');


const cart=sequelize.define('cart',{
id:{
  type:Sequelize.INTEGER,
  autoIncrement:true,
  allowNUll:false,
  primaryKey:true
}

})


module.exports=cart;