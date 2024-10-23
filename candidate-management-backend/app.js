const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/candidates_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/candidates', candidateRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

