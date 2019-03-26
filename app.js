//import { Sequelize, INTEGER } from 'sequelize/types';

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require ('path');
const Sequelize = require('sequelize');
const db = require('./config/database');
db.authenticate()
.then(() => console.log('Connected'))
.catch(err => console.log('ERROR'+err))  

const User = db.define(
    'users',{
       id:{
           type: Sequelize.STRING,
           allowNull:false
       },
       password:{
           type: Sequelize.STRING,
           allowNull:false
       },
       userid:{
           type: Sequelize.INTEGER,
           allowNull:false,
           primaryKey: true
       }
    }
);

User.sync({force:true}).then(()=>{
    return User.create({
        id: 'top',
        password: 'psw',
        userid: 100
    });
});


const app = express();
app.get('/',(req,res)=>res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));



