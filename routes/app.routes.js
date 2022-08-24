const appController=require("../controllers/app.controller");

module.exports=(app)=>{

    app.get("/api/coinUpdate",appController.getCoinUpdate);
}