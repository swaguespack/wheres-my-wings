const { User } = require('../models');

const userData = [
    {  
        name: 'Shellby',
        email: 'shellby@wings.com',
        password: 'Itsasecret'

    },
    {
        name: 'Mika',
        email: 'mika@wings.com',
        password: 'Itsasecret'
    },
    {
        name: 'Theo',
        email: 'theo@wings.com',
        password: 'Itsasecret'
    },    
    {
        name: 'Elijah',
        email: 'elijah@wings.com',
        password: 'Itsasecret'
    },
    {
        name: 'Tyler',
        email: 'tyler@wings.com',
        password: 'Itsasecret'
    },
    
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks:true
});

module.exports = seedUsers;