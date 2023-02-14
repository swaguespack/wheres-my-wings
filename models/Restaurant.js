// Import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// Import database connection from config.js
const sequelize = require("../config/connection");

// Initialize Maps model by extending off Sequelize's Model class
class Restaurants extends Model {}

Restaurants.init(
  {
    // Use Sequelize DataTypes object to provide data types/rules
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
        allowNull: false
    }
  },
  {
    // Import sequelize connection instance (direct connection to database)
    sequelize,
    // Do not auto add timstamp attributes (created_at)
    timestamps: false,
    // Disable modification of table names
    freezeTableName: true,
    // Use underscores for casing
    underscored: true,
    // Model name stays lowercase
    modelName: "restaurants",
  }
);
// Tells Node.js which code to export
module.exports = Restaurants;
