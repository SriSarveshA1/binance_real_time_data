if(process.env.NODE_ENV!=="production") //so if the environment in which the project is running is not a production environment
{
   require('dotenv').config();//We try to read the .env files
}
module.exports={
    PORT: process.env.PORT,//process.env is a global object so we are getting from it and storing here and exporting it for other uses.
    API_LINK:process.env.API_LINK
}
