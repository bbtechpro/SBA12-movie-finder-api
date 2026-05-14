// Task 5: Create the Routes (routes/movieRoutes.js)
// Create an express.Router.
// Import the controller functions from ../controllers/movieController.js.
// Define two routes and associate them with the controller functions:
// GET /search: This will handle movie searches.
// GET /movies/:id: This will fetch details for a specific movie.
// Export the router.
const express = require('express');
const router = express.Router();
const { searchMovies, getMovieDetails } = require('../controllers/movieController');

router.get('/search', searchMovies);
router.get('/movies/:id', getMovieDetails);

module.exports = router;