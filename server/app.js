

/*************************** 
           EXPRESS
**************************/
const express = require('express');
const app = express();
app.use(express.json()); //instead of body-parser
const Sequelize = require('sequelize');
//var mysql = require('mysql');

/*************************
        SOCKET.IO
**************************/
const http = require('http').Server(app);
const io =require('socket.io')(http);


//test
app.get('/',(req,res)=> {
    res.send('HI')
    console.log('in main page')
});

//app.use('/app',require('./routes/api/index'))

//variables
const port = process.env.PORT || 3000;
const host = 'localhost';
const sequelize = new Sequelize('bookingproject','user_booking','booking01',{
    host : 'localhost',
    dialect : 'mysql'
})
/*
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'user_booking',
    password : 'booking01',
    database : 'bookingproject'
});
*/
//into pages
//app.use('/api',require('./routes/api'))

//socket
io.on('connection', function(socket){
    console.log('a user conneted');
});
//database
/*
connection.connect((err)=>{
    if(err) console.log(err);
    else console.log("DB connected");
});
*/
//sequelize connection check
sequelize
 .authenticate()
 .then(()=>{
     console.log('Connection ok');
 }).catch(err=>{
     console.log("connect err : ",err)
 });
//express.js
http.listen(port,(res,req)=>console.log('node js on port 3000!'))
