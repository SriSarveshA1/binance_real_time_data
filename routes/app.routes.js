const appController=require("../controllers/app.controller");

module.exports=(app)=>{

    app.get("/api/v1/coinUpdate",appController.getCoinUpdate);
}