const Sequelize=require('sequelize');


const sequelize=require('../util/database');

const exp=sequelize.define('selleradmin',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
    Sellingprice:{
        type:Sequelize.INTEGER,
      },
      Productname:{
        type:Sequelize.STRING,
      },
      Category:{
       type:Sequelize.STRING,
      }    
})

module.exports=exp;