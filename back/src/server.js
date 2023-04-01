const express = require("express");
const server = express();
const router = require("../src/routes/index");
const cors = require("cors"); 
const { database } = require('../src/db')
const { Sequelize } = require('sequelize');
const { savApiData } = require("../src/controllers/saveApiData");



const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};
server.use(cors(corsOptions));
server.use(express.json());


server.use("/", router);

database.sync({force: true}).then(async () => {
    console.log('Database connected');
    
    await savApiData();
    server.listen(3001, () => {
        console.log("Raised on port 3001");
    });
})











module.exports = server;