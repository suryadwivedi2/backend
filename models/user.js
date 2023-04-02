const Sequelize=require('sequelize');


const sequelize=require('../util/database');

const user=sequelize.define('users',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
    name:{
        type:Sequelize.STRING
      },
      email:{
       type:Sequelize.STRING,
       unique:true
      },
      phonenumber:{
        type:Sequelize.STRING,
        unique:true
      }
      
})

module.exports=user;