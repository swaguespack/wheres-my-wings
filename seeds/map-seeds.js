const { Maps } = require('../models');

const mapsData = [
    {
        neighborhood: 'DEFAULT',
        latitude: '33.748783',
        longitude: '-84.388168'
    },
    {
        neighborhood: 'EAV',
        latitude: '33.7366044 ',
        longitude: '-84.3357992'
    },
    {
        neighborhood: 'Midtown',
        latitude: '33.783315',
        longitude: '-84.383117'
    },
    {
        neighborhood: 'Mozley Park',
        latitude: '33.75344',
        longitude: '-84.4382621'
    },
];

const seedMaps = () => Maps.bulkCreate(mapsData);

module.exports = seedMaps;