const seedMaps = require('./map-seeds');
const seedUsers = require('./users-seeds');
const seedRestaurants = require('./restaurant-seeds');

const sequelize = require('../config/connection');

const plantSeeds = async () => {
    try{ 

    
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');

        await seedMaps();
        console.log('\n----- MAPS SEEDED -----\n');

        await seedRestaurants();
        console.log('\n----- FOOD TRUCKS SEEDED -----\n');

        process.exit(0);
    } catch(err){
        console.log(err)
    }

};

plantSeeds();