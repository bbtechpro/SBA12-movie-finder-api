// Task 6: Implement Controller Logic (controllers/movieController.js)
// This is where the main logic of your application will live.

// searchMovies function:

// This function will handle the GET /api/search route.
// It should get the search term from a query parameter named title (i.e., req.query.title).
// Validation: If the title query parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Title query parameter is required" }.
// It should make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/. You will need to include two query parameters in your request to OMDb:
// s (for search term)
// apikey (your key from process.env.OMDB_API_KEY)
// If the request is successful, send the list of movies back to the client as JSON.
// If there is an error (e.g., network issues, invalid API key), catch the error and respond with a 500 Internal Server Error status and a JSON error message like { "error": "An error occurred while fetching data from OMDb" }.

// getMovieDetails function:
// This function will handle the GET /api/movies/:id route.
// It should get the movie ID from the route parameter (i.e., req.params.id).
// Validation: If the id parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Movie ID is required" }.
// It should make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/. You will need to include two query parameters in your request to OMDb:
// i (for movie ID)
// apikey (your key from process.env.OMDB_API_KEY)
// If the request is successful, send the movie details back to the client as JSON.
// If there is an error (e.g., network issues, invalid API key), catch the error and respond with a 500 Internal Server Error status and a JSON error message like { "error": "An error occurred while fetching data from OMDb" }.
const axios = require('axios');

const searchMovies = async (req, res) => {
  const { title } = req.query;
    if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }