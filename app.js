const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
// const User=require('./models/user');
const Product=require('./models/product');
const User=require('./models/user');
const errorController = require('./controllers/error');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes=require('./routes/adduser');
const expenseRoutes=require('./routes/expense')
const sequelize=require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

// db.execute('SELECT * from products').then((result)=>{
// console.log(result[1]);
// }).catch((err)=>{
//     console.log(err);
// });
app.use((req,res,next)=>{
   User.findByPk(1).then((user)=>{
    req.user=user;
    next();
   }).catch(err=>console.log(err))
})
app.use('/expense',expenseRoutes);
app.use('/user',userRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);


Product.belongsTo(User,{constraints:true,onDelete:"CASCADE"})
User.hasMany(Product);


sequelize.
//sync({force:true})
sync()
.then((result)=>{
   return User.findByPk(1);
   // console.log(result);
}).then((user)=>{
   if(!user){
      return User.create({name:'max',email:'test@email.com'})
   }
return user;
 }).then((user)=>{
    //console.log(user);
    app.listen(3000);
 }).catch(err=>console.log(err));

