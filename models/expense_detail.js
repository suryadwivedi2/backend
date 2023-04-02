const Sequelize=require('sequelize');


const sequelize=require('../util/database');

const exp=sequelize.define('expdetail',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
    amount:{
        type:Sequelize.STRING,
      },
      description:{
        type:Sequelize.STRING,
      },
      category:{
       type:Sequelize.STRING,
      }    
})

module.exports=exp;