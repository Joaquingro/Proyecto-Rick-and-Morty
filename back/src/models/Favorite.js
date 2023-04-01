const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }, 
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        
    }, 
    species: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false
    },
    origin: {
        type: DataTypes.STRING,
        
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
   }, { timestamps: false });
};