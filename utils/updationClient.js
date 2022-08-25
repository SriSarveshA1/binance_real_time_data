module.exports=(io)=>{
    
    const API_LINK=require("../configs/server.config").API_LINK;//This has the api link of the binance
    const cron = require("node-cron");
    const Client=require("node-rest-client").Client;//so we are requiring the Client object from the node-rest-client
    const client=new Client();//new object of this Client

    
    //so for every 5 seconds we are making a get call to the binance api and get the real time data updates.
    cron.schedule("*/5 * * * * *",()=>{
        console.log("Started");
         try{
     
           client.get(API_LINK,(data,response)=>{
               //data is parsed js object and response is raw object
              
               io.emit("showUpdatedData",data);//so when ever the data we retrived from that binance api for every 5 seconds we try to emit an event.
           })
         }
         catch(err){
            console.log(err.message);
         }
    })
 

    io.on('connection',(socket)=>{
         console.log("User is connected");
         
        
         socket.on('disconnect',()=>{
             console.log("User is disconnected");
         });
    });

}


