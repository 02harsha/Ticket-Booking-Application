# Ticket-Booking-Application
# Ticket Booking Application

A feature-rich ticket booking application built with the MERN stack, enabling users to seamlessly search, book, and manage tickets for events, movies, or travel. The application focuses on providing a user-friendly interface and robust backend for reliable performance.

---

## 🚀 Features

- **User Authentication**: Secure login and registration using JWT.
- **Event/Movie Search**: Search for events or movies using advanced filters.
- **Seat Selection**: Interactive seat selection for personalized bookings.
- **Real-time Availability**: Updates ticket availability dynamically.
- **Payment Integration**: Integrated with secure payment gateways.
- **Admin Dashboard**: Manage events, tickets, and user accounts.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Error Handling**: Wrong routing and "Item Not Found" implementations.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux Toolkit
- **Others**: Axios, Daisy UI, JWT Tokens

---

## 📂 Project Structure
Frontend/ ├── node_modules/ # Dependencies ├── public/ # Public assets ├── src/ │ ├── assets/ # Static assets (images, icons, etc.) │ ├── Components/ # Reusable components │ ├── firebase/ # Firebase configuration │ ├── Pages/ # Page components (e.g., Home, Booking) │ ├── redux/ # Redux setup for state management │ ├── routes/ # Application routes │ ├── App.css # Global styles │ ├── index.css # Tailwind configuration │ ├── main.jsx # Application entry point ├── .gitignore # Git ignore file ├── index.html # Main HTML template ├── package.json # Project dependencies ├── postcss.config.js # PostCSS configuration ├── tailwind.config.js # Tailwind configuration ├── vite.config.js # Vite configuration └── README.md # Documentation\

---


Backend/ ├── database/ # Database connection and configuration ├── middleware/ # Middleware for validation and authentication ├── node_modules/ # Dependencies ├── routes/ # API routes (e.g., booking, user, admin) ├── .env # Environment variables (excluded from Git) ├── index.js # Application entry point ├── package.json # Project dependencies └── README.md # Documentation

---

## ⚙️ Installation and Setup

Follow these steps to set up and run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/02harsha/Ticket-Booking-Application.git
   cd Ticket-Booking-Application


# Navigate to the server folder
cd server
npm install

# Navigate to the client folder
cd ../client
npm install

# Start backend server
cd server
npm start

# Start frontend client
cd ../client
npm start


