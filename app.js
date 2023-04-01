const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize=require('./util/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// db.execute('SELECT * from products').then((result)=>{
// console.log(result[1]);
// }).catch((err)=>{
//     console.log(err);
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
sequelize.sync().then((result)=>{
   // console.log(result);
    app.listen(3000);
}).catch(err=>console.log(err));

