const  express = require('express');
const app=express();
const bodyParser=require('body-parser');
const http = require('http').Server(app);
const io=require('socket.io')(http);
const ss= require('socket.io-stream');

const serverConfig = require("./configs/server.config");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





require("./routes/app.routes")(app);
require("./utils/updationClient")(io,ss);



http.listen(serverConfig.PORT,()=>{
    console.log('listening on port '+serverConfig.PORT);
})