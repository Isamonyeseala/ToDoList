# ToDoList

A simple To-Do List web application built with Node.js, Express, MongoDB, and EJS. It allows users to manage their tasks effectively using the **Eisenhower Matrix**, categorizing tasks based on priority.

## 📖 About the Project

This project is a **full-stack web application** designed to help users manage their tasks effectively. With this app, users can organize tasks into categories based on urgency and importance. 

### Key Features:
- ✅ **Add tasks with priority labels**: Users can add tasks and assign them a priority using the Eisenhower Matrix (Do Now, Schedule, Delegate, Eliminate).
- ✅ **Mark tasks as completed**: Completed tasks are visually marked with a strikethrough effect.
- ✅ **Delete tasks**: Users can remove tasks they no longer need.
- ✅ **Responsive Design**: The app is fully responsive and works seamlessly on both mobile and desktop devices.
- ✅ **Database Storage**: Tasks are stored securely in **MongoDB Atlas** for easy and persistent access.

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript) + Custom CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Styling**: Custom CSS


## 📌 Usage

1️⃣ Add tasks with priority levels  
2️⃣ Mark tasks as completed or delete them  

## 📜 Folder Structure

```bash
/to-do-list
│── /models          # Mongoose models (Task)
│── /routes          # Express route handlers (tasks)
│── /views           # EJS templates (index.ejs, login.ejs, register.ejs)
│── /public          # Static files (CSS, images)
│── server.js        # Main server file
│── package.json     # Project dependencies
│── .env.example     # Sample environment variables
│── README.md        # Project documentation
```
