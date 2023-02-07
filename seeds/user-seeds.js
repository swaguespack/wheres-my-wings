const { User } = require('../models');

const userData = [
    {  
        username: 'Shellby',
        password: 'Planet00'

    },
    {
        username: 'Mika',
        password: 'Pikachu88'
    },
    {
        username: 'Theo',
        password: 'Treats67'
    },    
    {
        username: 'Elijah',
        password: 'Christmas98'
    },
    {
        username: 'Tyler',
        password: 'Sourpatch4'
    },
    
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks:true
});

module.exports = seedUsers;