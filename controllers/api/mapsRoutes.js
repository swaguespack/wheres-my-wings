// THIS ROUTE IS CURRENTLY NOT CONNECTED
// GOAL - reconnect this route so that the user has the option
// to view food truck locations my neighborhood map

// Imports express' router object
const router = require('express').Router();
// Imports maps model to use with our routes
const { Maps } = require('../../models');

// Find all maps
router.get('/', (req, res) => {
 Maps.findAll({})
  .res.status(200).json(allMapData)
  .catch (err => {
    res.status(500).json(err);
  });
});

//Find Default Map 
router.get('/default', (req, res) => {
Maps.findOne({
      where: 
      { neighborhood: 'DEFAULT' },
    })
    res.status(200).json(defaultMapData)
   .catch(err => {
    console.error(err);
    res.status(500).json(err);
  })
});

//Find Neighborhood Maps
router.get('/:neighborhood', (req, res) => {
Maps.findOne({
      where: req.params,
    })
    res.status(200).json(mapData)
   .catch (err=> {
    res.status(500).json(err);
  })
});

//Add Map

router.post('/', async (req, res) => {
  try {
    const newMap = await Maps.create({
      neighborhood: req.body.neighborhood,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });
    res.status(200).json(newMap);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
