//import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

//import database connection from config.js
const sequelize = require('../config/connection');

//import bcrypt
const bcrypt = require("bcrypt")

//initialize User model by extending off Sequelize's Model class
class User extends Model {
    //run on instance data to check password
    checkPassword(loginPW){
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
    // use Sequelize DataTypes object to provide data types/rules
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    // validates length attribute rule, returns promise if successul validation
        validate:{ 
            len:[8] //password must be >=8
        }
    }
},
{
// hook functions (aka callbacks or lifecycle events) 
//called before calls in sequelize executed
    hooks:{
            async beforeCreate(newUserData){
            newUserData.password = await bcrypt.hash(newUserData.password,10)
            return newUserData
        },
            async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
            }
    },
//imported sequelize connection instance (direct connection to database)
    sequelize,
// do not auto add timstamp attributes (created_at)
    timestamps: false,   
//disable modification of table names
    freezeTableName: true,
//use underscores for casing
    underscored: true,
//model name stays lowercase
    modelName: 'user',
});

//tells Node.js which code to export
module.exports=User