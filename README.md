Got it! Here’s a **simple, student-friendly README** for your GitHub repo:

---

# Project Camp Backend

**Version:** 1.0.0
**Type:** Backend API for Project Management

---

## **About**

Project Camp Backend is a **REST API** for managing projects and tasks.

* Users can create projects, tasks, and subtasks.
* Add notes to projects.
* Invite team members and assign roles.
* Secure login with JWT and email verification.

---

## **Features**

* **User Authentication:** Register, login, email verification, password reset
* **Projects:** Create, update, delete, list projects
* **Tasks & Subtasks:** Assign tasks, track progress, mark subtasks complete
* **Project Notes:** Add and manage notes
* **Role-based Access:** Admin, Project Admin, Member
* **File Uploads:** Attach files to tasks
* **Health Check:** Test if API is working

---

## **API Endpoints**

* **Auth:** `/api/v1/auth/` – register, login, verify email, reset password
* **Projects:** `/api/v1/projects/` – manage projects and members
* **Tasks:** `/api/v1/tasks/` – manage tasks and subtasks
* **Notes:** `/api/v1/notes/` – manage project notes
* **Health:** `/api/v1/healthcheck/` – check system status

---

## **Tech Stack**

* Node.js & Express
* MongoDB & Mongoose
* JWT Authentication
* Nodemailer for email
* Multer for file uploads

---
