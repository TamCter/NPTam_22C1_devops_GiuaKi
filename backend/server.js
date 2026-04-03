require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Item = require('./models/Item');

const app = express();
const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || 'Backend APP';

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const DB_URL = process.env.DB_URL;

if (DB_URL) {
    mongoose.connect(DB_URL, dbOptions)
      .then(() => console.log(`Connected to MongoDB from ${APP_NAME}`))
      .catch(err => console.error('MongoDB connection error:', err));
} else {
    console.warn('DB_URL environment variable is missing.');
}

// 1. Heatlh check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 2. Student Info API
app.get('/api/about', (req, res) => {
  // Placeholder info, you can edit this later
  res.json({
    fullName: "Nguyen Van A",
    studentId: "123456",
    class: "22C1"
  });
});

// 3. GET items API
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 4. POST item API
app.post('/api/items', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
