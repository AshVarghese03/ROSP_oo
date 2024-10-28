// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // To handle cross-origin requests

// Initialize the app
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB (make sure MongoDB is running on your local machine)
mongoose.connect('mongodb://localhost:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the College Schema
const collegeSchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  cityRank: Number,
  stateRank: Number,
  learnMoreUrl: String,
  logo: String
});

// Create the College model
const College = mongoose.model('College', collegeSchema);

// API endpoint to get all colleges
app.get('/colleges', async (req, res) => {
  try {
    const colleges = await College.find();  // Fetch all college records from the collection
    res.json(colleges);  // Send the college data as JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const datesSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
});

const Calendar = mongoose.model('dates', datesSchema);

// API endpoint to get all calendar events
app.get('/calendar', async (req, res) => {
  try {
    const events = await Calendar.find();  // Fetch all calendar records from the collection
    res.json(events);  // Send the calendar data as JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
