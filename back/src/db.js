const { Sequelize } = require('sequelize');
require('dotenv').config();
const CharacterModel = require('./models/Character');
const FavoriteModel = require("./models/Favorite")
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env;


const database = new Sequelize(`postgres://postgres:123456@localhost:5432/rickandmorty`, { logging: false });

CharacterModel(database);
FavoriteModel(database);


module.exports = { database, ...database.models };