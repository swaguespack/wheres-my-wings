const { Restaurant } = require('../models');

const restaurantData = [
    {
        neighborhood:'Midtown', 
        name: 'Goodfellas Pizza & Wings',
        latitude: '33.786495914101124' ,
        longitude: '-84.39904773922937' ,

    },

    {
        neighborhood: 'Midtown',
        name: 'Auto Spa Bistro',
        latitude: '33.78586149938391', 
        longitude: '-84.39839619220709'
    },

    {
        neighborhood: 'Midtown',
        name: 'Tandoori Pizza & Wing Co.',
        latitude: '33.78783836450936', 
        longitude: '-84.38214193169856'
    },

    {
        neighborhood: 'Midtown',
        name: 'Wingnuts',
        latitude: '33.77350850360314', 
        longitude: '-84.40359424123054'

    },

    {
        neighborhood: 'Mozley Park',
        name: 'Jamals Buffalo Wings',
        latitude: '33.75069625528228', 
        longitude: '-84.45046046926115'
    },

    {
        neighborhood: 'Mozley Park',
        name: 'Touchdown Wings',
        latitude: '33.75179267936498', 
        longitude: '-84.46868803269626'
    },

    {
        neighborhood: 'Mozley Park',
        name: 'The Beautiful',
        latitude: '33.72231909283965', 
        longitude: '-84.46230334418644'
    },

    {
        neighborhood: 'EAV',
        name:'Gaja Korean Bar',
        latitude: '33.740548505540254', 
        longitude: '-84.34583226315087'
    },

    {
        neighborhood: 'EAV',
        name: 'The Wing Bar ATL',
        latitude: '33.74080794240316', 
        longitude: '-84.34569056348266'
    },

    {
        neighborhood: 'EAV',
        name: 'The Glenwood',
        latitude: '33.740077687139284',
        longitude: '-84.34624026536429'
    },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;