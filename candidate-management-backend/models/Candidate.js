const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  experience: { type: String, required: true },
  skills: [{ type: String }]
});

module.exports = mongoose.model('Candidate', candidateSchema);
