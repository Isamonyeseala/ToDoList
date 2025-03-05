# ToDoList

📝 To-Do List
A simple To-Do List web application built with Node.js, Express, MongoDB, and EJS. It allows users to manage their tasks using the Eisenhower Matrix, categorizing tasks based on priority.

📖 About the Project This project is a full-stack web application designed to help users manage their tasks effectively. ✅ Add tasks with priority labels (Do Now, Schedule, Delegate, Eliminate)
✅ Mark tasks as completed (strikethrough effect)
✅ Delete tasks they no longer need

📌 Features
✔ Task Management: Users can add, complete, and delete tasks
✔ Priority System: Tasks are categorized using the Eisenhower Matrix
✔ Responsive Design: Works seamlessly on both mobile and desktop ✔ Database Storage: Tasks are stored in MongoDB (Atlas) for easy access

🛠️ Tech Stack

Frontend: EJS (Embedded JavaScript) + CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Styling: Custom CSS
📌 Open in Browser Go to: http://localhost:3000

📌 Usage

1️⃣ Add tasks with priority levels 2️⃣ Mark tasks as completed or delete them

📜 Folder Structure

/to-do-list
│── /models          # Mongoose models (User, Task)
│── /routes          # Express route handlers (auth, tasks)
│── /views           # EJS templates (index.ejs, login.ejs, register.ejs)
│── /public          # Static files (CSS, images)
│── server.js        # Main server file
│── package.json     # Project dependencies
│── .env.example     # Sample environment variables
│── README.md        # Project documentation
