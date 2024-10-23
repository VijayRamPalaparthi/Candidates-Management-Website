const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Get all candidates with filters, search, and pagination
router.get('/', async (req, res) => {
  const { search, gender, experience, skills, page = 1, limit = 10 } = req.query;
  const query = {};

  if (search) {
    query.$or = [
      { name: new RegExp(search, 'i') },
      { phone: new RegExp(search, 'i') },
      { email: new RegExp(search, 'i') }
    ];
  }
  if (gender) query.gender = gender;
  if (experience) query.experience = experience;
  if (skills) query.skills = { $all: skills.split(',') };

  try {
    const candidates = await Candidate.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Candidate.countDocuments(query);
    res.json({ candidates, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new candidate
router.post('/', async (req, res) => {
  const { name, phone, email, gender, experience, skills } = req.body;
  const candidate = new Candidate({ name, phone, email, gender, experience, skills });
  try {
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
