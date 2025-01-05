<!-- GitHub User Search Application

Introduction

This application allows users to search for GitHub profiles by username, view repository lists, followers, and detailed repository information. It also includes features to save user data in a database and delete users from the database.

Features

Search GitHub users by username.

View user details such as avatar, public repositories, followers, and following count.

Display a list of repositories for the searched user.

Navigate to detailed pages for repositories and followers.

Store searched user data in a database for quick retrieval.

Delete users from the database via the frontend.

Technologies Used

Frontend: React, CSS

Backend: Node.js, Express

Database: MySQL

API: GitHub API

HTTP Client: Axios

Prerequisites

Node.js installed 

MySQL server installed and running

Git installed

Installation and Setup

Clone the Repository

$ git clone <repository-link>
$ cd github-user-search

Backend Setup

Install dependencies:

$ cd backend
$ npm install

Configure the Database:

Create a MySQL database named github_user_db.

Import the provided SQL script to create the users table.

CREATE DATABASE github_user_db;
USE github;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  avatar_url TEXT,
  location VARCHAR(255),
  public_repos INT,
  public_gists INT,
  followers INT,
  following INT,
  created_at DATETIME
);

Update the database configuration in backend/config/db.js:

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '<your_password>',
  database: 'github'
});

module.exports = db;

Start the Backend Server:

$ npm start

The backend server will run on http://localhost:3030.

Frontend Setup

Install dependencies:

$ cd frontend
$ npm install

Run the React App:

$ npm start

The React app will run on http://localhost:3000.

How to Use

Open the frontend app in your browser at http://localhost:3000.

Enter a GitHub username in the search box and click Search.

View user details and repositories on the results page.

Use the View Followers button to navigate to the user's followers.

Use the Delete User button to remove the user from the database.

API Endpoints

Backend

Save User: POST /api/users/:username

Get All Users: GET /api/users

Delete User: DELETE /api/users/:username

Video Demonstration

Drive Video Link

GitHub Repository

Repository Link -->
