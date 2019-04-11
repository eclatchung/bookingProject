

/*************************** 
           EXPRESS
**************************/
var express = require('express');
var app = express();
app.use(express.json()); //instead of body-parser
var mysql = require('mysql');

/*************************
        SOCKET.IO
**************************/
var http = require('http').Server(app);
var io =require('socket.io')(http);


//test
app.get('/',(req,res)=> {
    res.send('HI')
    console.log('in main page')
});

app.use('/app',require('./routes/api/index'))

//variables
const port = process.env.PORT || 3000;
const host = 'localhost';
//config file database
//var config = require('./config/config');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'user_booking',
    password : 'booking01',
    database : 'bookingproject'
});

//into pages
//app.use('/api',require('./routes/api'))

//socket
io.on('connection', function(socket){
    console.log('a user conneted');
});
//database
connection.connect((err)=>{
    if(err) console.log(err);
    else console.log("DB connected");
});
//express.js
http.listen(port,(res,req)=>console.log('node js on port 3000!'))
