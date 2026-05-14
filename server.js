// Task 4: Build the Server (server.js)
// In server.js, require and configure dotenv at the very top.
// Set up your Express application instance.
// The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
// Import the routes from ./routes/movieRoutes.js.
// Mount your movie routes. All routes related to movies should be prefixed with /api. For example, a /search route in your router file will be accessible at /api/search.

// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const movieRoutes = require('./routes/movieRoutes');

// MIDDLEWARE
app.use(express.json());
app.use('/api', movieRoutes);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Movie API!');
});
app.get('/api', (req, res) => {
  res.send('Welcome to the Movie API routes!');
});
app.get('/api/search', (req, res) => {
  res.send('This is the search route!');
});

// PORT: START THE SERVER

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
