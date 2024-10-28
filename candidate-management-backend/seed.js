const mongoose = require('mongoose');
const Candidate = require('./models/Candidate'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/candidates_db')
  .then(() => {
    console.log('Connected to MongoDB');
    return seedCandidates();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const seedCandidates = async () => {
  try {
    await Candidate.deleteMany({});
    await Candidate.insertMany([
      { name: "Vijay Ram", phone: "8247251035", email: "vijayram@example.com", gender: "Male", experience: "2 Years", skills: ["JavaScript", "React"] },
      { name: "Krish", phone: "9959096432", email: "krishna@example.com", gender: "Female", experience: "1 Year", skills: ["HTML", "CSS", "JavaScript"] },
      { name: "Ram", phone: "9247251035", email: "ram@example.com", gender: "Male", experience: "1 Years", skills: ["Python", "React", "Express"] },
    ]);
    console.log("Database seeded!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding the database:", err);
  }
};
