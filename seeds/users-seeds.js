const { User } = require('../models');

const userData = [
    {  
        username: 'Shellby',
        password: 'Itsasecret'

    },
    {
        username: 'Mika',
        password: 'Itsasecret'
    },
    {
        username: 'Theo',
        password: 'Itsasecret'
    },    
    {
        username: 'Elijah',
        password: 'Itsasecret'
    },
    {
        username: 'Tyler',
        password: 'Itsasecret'
    },
    
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks:true
});

module.exports = seedUsers;