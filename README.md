# 🚀 Employee Management System (EMS)

## 📌 Overview

Employee Management System (EMS) is a full-stack web application built to manage employees, attendance, leave requests, and payroll operations in a centralized platform. The project provides separate dashboard experiences for administrators and employees with responsive UI design and real-time data management.

This project was developed to strengthen practical knowledge in full-stack development using React, Node.js, Express.js, and MongoDB.

---

# ✨ Features

## 👨‍💼 Admin Features

* Manage employee records
* View company-wide attendance
* Approve or reject leave requests
* Generate and manage payslips
* Department-wise employee filtering
* Dashboard analytics and statistics

## 👨‍💻 Employee Features

* Login authentication
* View attendance history
* Apply for leave requests
* Access monthly payslips
* View personal profile details

---

# 🛠️ Tech Stack

## 🎨 Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Lucide React Icons
* Date-fns

## ⚙️ Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nodemon

---

# 📂 Project Structure

```bash
EMS/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── layouts/
│   │   └── routes/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# 📦 Main Modules

## 👥 Employee Management

* Add employee details
* Edit employee information
* Department filtering
* Employee profile management

## ⏰ Attendance Management

* Clock In / Clock Out system
* Attendance history tracking
* Monthly attendance monitoring

## 📝 Leave Management

* Leave application system
* Admin approval workflow
* Leave status tracking

## 💰 Payroll Management

* Payslip generation
* Salary details management
* Printable payslip support

---

# 🔐 Authentication & Security

* JWT-based authentication
* Protected admin routes
* Role-based access control
* Secure API handling using Express middleware

---

# 🚀 Installation

## 📥 Clone Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

## 📁 Navigate to Project

```bash
cd employee-management-system
```

---

# ⚙️ Backend Setup

```bash
cd server
npm install
```

## 🧾 Create .env File

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
```

## ▶️ Run Backend Server

```bash
npm run server
```

---

# 🎨 Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔗 API Endpoints

## 👥 Employee Routes

* GET /api/employees
* POST /api/employees
* PUT /api/employees/:id
* DELETE /api/employees/:id

## ⏰ Attendance Routes

* POST /api/attendance/clock
* GET /api/attendance

## 📝 Leave Routes

* POST /api/leaves
* GET /api/leaves
* PUT /api/leaves/:id

## 💳 Payslip Routes

* POST /api/payslips
* GET /api/payslips
* GET /api/payslips/:id

---

# 🖥️ Screens Included

* Login Page
* Dashboard
* Employees Page
* Attendance Page
* Leave Management Page
* Payslip Page
* Settings Page

---

# 📚 Learning Outcomes

This project helped improve practical skills in:

* Full-stack web development
* REST API development
* MongoDB database operations
* Authentication and authorization
* React component architecture
* Backend debugging and API testing
* State management and routing

---

# 🚀 Future Improvements

* Email notifications
* Role-based permissions enhancement
* PDF payslip export
* Attendance analytics charts
* Deployment with Docker and CI/CD
* Real-time notifications

---

# 👨‍💻 Author

B. Niranjan

* Full Stack Developer
* Java & MERN Stack Learner
* Passionate about solving real-world problems through software

---

# 📄 License

This project is created for learning and portfolio purposes.
