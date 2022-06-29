require('dotenv').config();

const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./routes/index');
var loginRouter = require('./routes/auth');
var articleRouter = require('./routes/article');
var menuRouter = require('./routes/menu');
var orderRouter = require('./routes/order');
var usersRouter = require('./routes/users');
var serviceRouter = require('./routes/service');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${process.env.API_URL}`, router);
app.use(`${process.env.API_LOGIN}`, loginRouter);
app.use(`${process.env.API_ARTICLE}`, articleRouter);
app.use(`${process.env.API_MENU}`, menuRouter);
app.use(`${process.env.API_ORDER}`, orderRouter);
app.use(`${process.env.API_USERS}`, usersRouter);
app.use(`${process.env.API_SERVICE}`, serviceRouter);

//app.listen(process.env.PORT, () => console.log('Server app listening on port ' + process.env.PORT));

const server = http.createServer(app)
const io = socketIo(server,{ 
    cors: {
      origin: '*',
      methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }
}) //in case server and client run on different urls
io.on('connection',(socket)=>{
  console.log('client connected: ',socket.id)
  
  socket.join('clock-room')
  
  socket.on('disconnect',(reason)=>{
    console.log(reason)
  })
})
setInterval(()=>{
     io.to('clock-room').emit('time', new Date())
},1000)
server.listen(process.env.PORT, err=> {
  if(err) console.log(err)
  console.log('Server running on Port', process.env.PORT)
})

setInterval(()=>{ io.to('clock-room').emit('time', new Date())
},1000)

module.exports = app;
