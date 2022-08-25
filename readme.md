# RealTime Coin updation Service API

---

- This  API revolves round the user who hit the GET API call on the url:http://localhost:8888/api/v1/coinUpdate so the node server serves an html file in which the we are establishing a socket.io connection to the server and the user.

### Features

---

- So After the user connected to the endpoint http://localhost:8888/api/v1/coinUpdate there will be a index.html file will be served to the user.
- In the app.js we are calling an utils file updationClient.js which takes the socket io object in the params and when ever the cron job is executed after every 5 seconds there will be an event emitted and it sends the coin data along with that.
- And that event will be listened by the script inside the html file and it displays the real time data updation of the coin prices to the  user who is connected.
### Code organisation in the repository-

---

The whole code base is arranged in multiple directories and files.
Project follows Models, Controllers, Routes (MCR Architecture Pattern), to arrange the code.


1. Controllers directory contain files dealing with handling the core business logic.
2. Routes directory contain the files managing with the routes.
3. Utils directory contains the files that have reusable code(functions).
4. Configs directory for all configs file to configure all the configurations realted to server.
5. The main startup file is "app.js".
6. And there is constants.js file that contains the absolute path to the current directory value.

### Tech

---

 RealTime Coin updation Service API, uses a number of open source projects (all are npm packages) to work properly:

- [Express](https://www.npmjs.com/package/express)- Express is a web framework for node. Using it to create a server and managing dofferent routes.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv to load environment variables from a .env file into process.env
- [node-rest-client](https://www.npmjs.com/package/node-rest-client) - Allows connecting to any API REST and get results as js Object.
- [node-cron](https://www.npmjs.com/package/node-cron) Allows user to schedule jobs
- [socket.io](https://www.npmjs.com/package/socket.io) Socket.IO enables real-time bidirectional event-based communication.

#### Install the dependencies and devDependencies by following instructions.

```sh
git clone https://github.com/SriSarveshA1/binance_real_time_data
cd BINANCE_API
npm install
```

##### Before running the app locally, ensure to copy env.sample file and change it to .env and rewrite all your configuration variables value over there.Incase running in production,ensure to configure those variables first in production and change the scripts property value under package.json file accordingly.


### Installation

---

- To make  RealTime Coin updation ServiceAPI is up and running in your machine, follow the below steps after all configuration and related dependecies installation done.

```sh
cd  BINANCE_API
npm start
```

Express application, RealTime Coin updation Service API will up and running on configured port.

### Different REST endpoints available ---

---

### 1.coinUpdate Request

---

```sh
GET http://localhost:8888/api/v1/coinUpdate


response :
it will be a html file that displays the realtime price updation of coin every 5 seconds 

```



#### 2. Any request of anytype on invalid endpoint , that doesnt exists, will send response status 400 BAD REQUEST and an html file saying bad request

---

```sh
GET|POST|PUT|DELETE  http://localhost:8888/api/v1/InvalidEndPoint

DELETE http://localhost:8888/api/v1/coin (Example)
responce:
it will be a html file that displays that the request made is bad.

```

