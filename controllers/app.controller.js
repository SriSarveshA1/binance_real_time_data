const constants = require('../constants');


exports.getCoinUpdate=(req,res)=>{
    res.sendFile(constants.ABSOLUTE_PATH+"/views/index.html");
}

exports.badRequest=(req, res)=>{
    res.status(400).sendFile(constants.ABSOLUTE_PATH+"/views/bad.html");
}