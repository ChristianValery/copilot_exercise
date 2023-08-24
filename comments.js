// Create web server

// Import modules
const express = require('express');
const app = express();
const port = 3000;
// Import routes
const commentsRoutes = require('./routes/comments');
// Import database connection
const db = require('./database');
// Import cors
const cors = require('cors');

// Use cors
app.use(cors());

// Use routes
app.use('/api/comments', commentsRoutes);

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});