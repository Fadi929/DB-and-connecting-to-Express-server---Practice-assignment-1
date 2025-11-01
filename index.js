// index.js
require('dotenv').config();  // Loads .env variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection using Mongoose
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Simple route to check server
app.get('/', (req, res) => {
  res.send('Student Project Tracker Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
