const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','Surya@2001',{
    dialect:'mysql',
    host:'localhost'
})

    module.exports=sequelize;





// const mysql=require('mysql2');


// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Surya@2001'
// })

// module.exports=pool.promise();