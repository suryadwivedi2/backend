const Sequelize=require('sequelize');


const sequelize=require('../util/database');

const user1=sequelize.define('users1',{
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

module.exports=user1;