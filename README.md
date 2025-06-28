# Event Hall Decoration Web App - Backend API

## Overview

This is the backend API for the Event Hall Decoration web application. It provides endpoints for managing authentication, workspaces, decorations, collaborations, and user accounts. The API is built using **TypeScript** and **Node.js**, and it uses **npm** for dependency management.

## Features

- User authentication and authorization
- CRUD operations for workspaces and decorations
- Integration with payment gateways (if applicable)

## Tech Stack

- **Node.js**: Runtime environment
- **TypeScript**: Strongly-typed JavaScript
- **Express.js**: Web framework
- **MongoDBL**: Database
- **npm**: Dependency management

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- A database (MongoDB)

### Installation

1. **Fork the Repository**  
   Click the "Fork" button at the top-right corner of this repository on GitHub to create your own copy.

2. **Clone the Repository**  
   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/belloshehu/deko-studio-backend

   cd deko-studio-backend
   ```

3. **Install dependencies**

   ```bash
      npm install
   ```

4. **Set environment variables**

   ```bash
   DATABASE_URL=your-database-url
   PORT=8000
   JWT_SECRET=your-secret-key
   MONGO_URI=mongodb://127.0.0.1:27017/deko-studio
   NODE_ENV=
   JWT_LIFETIME=
   JWT_COOKIE_LIFETIME=
   ORIGIN=
   CREDENTIALS=
   ```

5. **Start the local server**

   ```bash
   npm run dev
   ```

6. **Push your local changes**
   ```bash
   git checkout -b feature-name
   git commit -m " Add your message here"
   git push origin feature-name
   ```

### Explanation of Forking, Cloning, and Contributing

1. **Forking**:
   Forking creates a copy of the repository under your GitHub account. This allows you to make changes without affecting the original repository.
2. **Cloning**: Cloning downloads the repository to your local machine so you can work on it.
3. **Contributing**: After making changes locally, you push them to your forked repository and create a pull request to propose your changes to the original repository.

### Explanation of Forking, Cloning, and Contributing

1. **Forking**: Forking creates a copy of the repository under your GitHub account. This allows you to make changes without affecting the original repository.
2. **Cloning**: Cloning downloads the repository to your local machine so you can work on it.
3. **Contributing**: After making changes locally, you push them to your forked repository and create a pull request to propose your changes to the original repository.
