# Candidate Management Web Application

This is a web application to manage candidates' data, including features like search, filter, and pagination. The application is built using **React.js** for the frontend, **Node.js** with **Express** for the backend, and **MongoDB** for the database.

## Features
- Add new candidates.
- Search candidates by name, phone, or email.
- Filter candidates by gender, experience, and skills.
- Pagination for handling large datasets.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** CSS

---

## Prerequisites
Before running the application, ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **MongoDB** (version 8.0.1 or higher)
- **npm** (Node package manager)

---

## Getting Started

### Step 1: Clone the repository
```bash
git clone <project-repository-url>
cd <your-project-folder>
```
---

### Step 2: Install Dependencies
#### 2.1 Backend
Navigate to the backend folder and install the dependencies:

```bash
cd candidate-management-backend
npm install
```
#### 2.2 Frontend
Navigate to the frontend folder and install the dependencies:

```bash
cd candidate-management-frontend
npm install
```
### Step 3: Set Up MongoDB
Ensure that MongoDB is installed and running locally.
Open a terminal window and start the MongoDB server by running:
```bash
mongod
```
### Step 4: Seed the Database
Before starting the application, seed the MongoDB database with some sample candidate data.

In the candidate-management-backend folder, run the following command:
```
node seed.js
```
This will insert sample candidates into your MongoDB database.

### Step 5: Start the Backend Server
In the candidate-management-backend folder, start the backend server:

```bash
npm app.js
```
The backend server will start at http://localhost:5000.

### Step 6: Start the Frontend Server
In a separate terminal, navigate to the candidate-management-frontend folder and start the React development server:

``` bash
npm start
```
The frontend will be available at http://localhost:3000.

## Sample Data
Sample candidates are included in the seed file (seed.js). The following sample candidates are added to the MongoDB database:

```
[
  {
    "name": "vijay ram",
    "phone": "8247251035",
    "email": "vijayram@example.com",
    "gender": "Male",
    "experience": "2 Years",
    "skills": ["JavaScript", "React"]
  },
  { "name": "Krish",
    "phone": "9959096432",
    "email": "mary@example.com",
    "gender": "Female",
    "experience": "1 Years",
    "skills": ["HTML", "CSS", "JavaScript"]
  }
]
```
### API Endpoints
The backend exposes the following API endpoints:

#### 1. Get All Candidates - GET /api/candidates
Retrieve all candidates with optional query parameters for search, filter, and pagination.

Example:
```
sql
GET /api/candidates?search=vijay&gender=Male&skills=JavaScript&experience=2%20Years
```
### 2. Add a Candidate - POST /api/candidates
Add a new candidate by sending a POST request with the candidate details.

Payload example:
```
{
    "name": "vijay ram",
    "phone": "8247251035",
    "email": "vijayram@example.com",
    "gender": "Male",
    "experience": "2 Years",
    "skills": ["JavaScript", "React"]
}
```
## Troubleshooting
### 1. MongoDB Connection Issues
If you encounter any connection issues with MongoDB, ensure that the MongoDB server is running:

```
mongod
```
### 2. Port Conflicts
If the backend server port 5000 or the frontend port 3000 is in use, update the port in the respective configuration files.
License
This project is open-source and available under the MIT License.


---

### **Key Sections to Pay Attention To:**

1. **Prerequisites**: Lists the software versions and dependencies.
2. **Getting Started**: Provides clear step-by-step instructions to install dependencies, set up MongoDB, seed the database, and start the servers.
3. **Seed Data**: Explains how to seed the MongoDB database with the sample candidates from `seed.js`.
4. **API Endpoints**: Documents the API routes for managing candidates.
5. **Troubleshooting**: Common issues with MongoDB and port conflicts.

---
