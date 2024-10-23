import React, { useState } from 'react';
import axios from 'axios';
import "./index.css"

function AddCandidateForm({ fetchCandidates }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', gender: '', experience: '', skills: [] });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/candidates', form);
    setForm({ name: '', phone: '', email: '', gender: '', experience: '', skills: [] })
    fetchCandidates();
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input className='add-selection' value={form.name} name="name" placeholder="Name" onChange={handleChange} required />
      <input className='add-selection' value={form.phone} name="phone" placeholder="Phone" onChange={handleChange} required />
      <input className='add-selection' value={form.email} name="email" placeholder="Email" onChange={handleChange} required />
      <select className='add-selection' value={form.gender} name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <select className='add-selection' value={form.experience} name="experience" onChange={handleChange}>
        <option value="">Select Experience</option>
        <option value="1 Year">1 Year</option>
        <option value="2 Years">2 Years</option>
        <option value="3 Years">3 Years</option>
      </select>
      <input className='add-selection' value={form.skills} name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
      <button className='add-button' type="submit">Add Candidate</button>
    </form>
  );
}

export default AddCandidateForm;
