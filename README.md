# 🌐 MHRD Dashboard (React + Node + MySQL + MongoDB)

A centralized dashboard for tracking and monitoring all **MHRD (Ministry of Human Resource Development)** initiatives and schemes in one place.  
Built as a **Full Stack Web Application** using React, Node.js, MySQL, and MongoDB — with analytics, feedback, and real-time progress tracking.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js (Hooks, Axios, React Router, Tailwind CSS, Dark Mode) |
| **Backend** | Node.js + Express.js |
| **Database 1 (Relational)** | MySQL (Schemes Data) |
| **Database 2 (NoSQL)** | MongoDB (Feedback Data) |
| **Version Control** | Git & GitHub |
| **Environment** | dotenv, CORS, Axios, Nodemon |

---

## 📊 Features

✅ **Schemes Dashboard**
- Add, edit, and delete MHRD schemes (stored in MySQL)  
- Track budget, progress %, and status (Ongoing, Completed, Active)  
- Real-time updates from backend API  

✅ **Feedback Section**
- Stores user feedbacks in MongoDB  
- Live updates without reloading the page  

✅ **Analytics Widgets**
- Total number of schemes  
- Average project progress  
- Total feedback count  

✅ **Modern UI**
- Built with React + Tailwind CSS  
- Dark mode toggle 🌙  
- Smooth transitions and hover animations  

✅ **Routing**
- `/schemes` → View and manage all schemes  
- `/feedback` → Manage and view feedback  
- `/about` → Project summary & contributors  

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sumeet2930/mhrd-dashboard.git
cd mhrd-dashboard
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=mhrd_dashboard
MONGO_URI=mongodb://localhost:27017/mhrd_dashboard
PORT=5000
```

Then run:

```bash
npm start
```

✅ You should see:

```
✅ Connected to MySQL Database
✅ MongoDB connected successfully
🚀 Server running on port 5000
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

✅ React app runs at:
**[http://localhost:3000](http://localhost:3000)**

---

## 📸 Preview

![Dashboard Preview](https://user-images.githubusercontent.com/yourimage.png)
*(Add screenshot here after UI update)*

---

## 📁 Project Structure

```
mhrd-dashboard/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SchemeForm.jsx
│   │   │   ├── SchemeTable.jsx
│   │   │   └── FeedbackForm.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── public/
│
└── .gitignore
```

---

## 🧠 Future Enhancements

* Add **user authentication** (JWT + bcrypt)
* Add **admin dashboard** for analytics
* Integrate **chart visualizations (Recharts / Chart.js)**
* Enable **cloud deployment (Render / Vercel)**

---

## 👨‍💻 Developer

**Sumeet Kumar Sahoo**
B.Tech CSE | Lovely Professional University
📧 [sumitkumarsahoo2930@gmail.com](mailto:sumitkumarsahoo2930@gmail.com)
🌍 [GitHub Profile](https://github.com/Sumeet2930)

---

⭐ **If you liked this project, don’t forget to star the repo!**

