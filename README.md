# Budget App – Backend
This is the backend for a personal budgeting application. It allows users to sign up, log in, and manage their expenditures with full authentication and session handling. The backend is built using Node.js, Express, and MongoDB.

---

## Tech Stack
    Node.js with Express.js
    MongoDB + Mongoose
    JWT Authentication
    Cookie-based sessions
    dotenv for environment config
    Morgan for logging
    CORS for frontend/backend integration

---

## Project Structure

    Backend/
    │
    ├── controllers/             # Route handler logic
    │   ├── userAuth/
    │   └── userItems/
    │
    ├── db/
    │   └── db.config.js         # MongoDB connection setup
    │
    ├── middleware/
    │   └── checkLoggedIn.js     # JWT verification middleware
    │
    ├── models/                  # Mongoose schemas
    │   ├── userModel.js
    │   ├── expenditureModel.js
    │   └── testModel.js
    │
    ├── routes/                  # Route definitions
    │   ├── user.auth.js
    │   └── user.Items.js
    │
    ├── .gitignore
    ├── app.js                   # Express app config
    ├── server.js                # Entry point
    ├── package.json
    └── .env                     # Environment variables (not committed)

---

## Authentication Routes

    | Route          | Method | Description               |
    | -------------- | ------ | ------------------------- |
    | `/auth/signup` | POST   | Register new user         |
    | `/auth/login`  | POST   | Login user and set cookie |
    | `/auth/logout` | POST   | Logout user               |
    | `/auth/`       | GET    | Show logged-in user data  |

---

## Expenditure API Routes (Protected)

    | Route             | Method | Description           |
    | ----------------- | ------ | --------------------- |
    | `/api/additem`    | POST   | Add an expense item   |
    | `/api/getitem`    | GET    | Get all user expenses |
    | `/api/deleteitem` | POST   | Delete an expense     |
    | `/api/updateitem` | POST   | Update an expense     |

    ⚠️ All /api/ routes require a valid JWT cookie for access.

---

## How to Run

    1. Clone the repository
    
    git clone https://github.com/yourusername/budget-backend.git
    cd budget-backend
    
    2. Install dependencies
    
    npm install
    
    3. Setup your .env file
    
    MONGO_URI=your_mongodb_connection
    JWT_SECRET=your_jwt_secret
    
    4. Start the server
    
    npm start

---

## 📄 License

This project is not licensed for public/commercial use. All rights reserved to the project owner.
