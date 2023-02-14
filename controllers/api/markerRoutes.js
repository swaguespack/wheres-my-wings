// Imports express' router object
const router = require("express").Router();
// Imports Restaurant model to use with our routes
const { Restaurant } = require("../../../models");
// Imports withAuth helper function
const withAuth = require("../../../utils/auth");

// Find all restaurants data
router.get("/", withAuth, async (req, res) => {
  try {
    const allMarkers = await Restaurant.findAll({});
    res.send(allMarkers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find restaurat by name
router.get('/:name', async (req, res) => {
    try {
      const markersData = await Restaurant.findOne({
        where: req.params,
      });
      res.status(200).json(markersData);
    } catch (err) {
      res.status(500).json(err);
    }
  });