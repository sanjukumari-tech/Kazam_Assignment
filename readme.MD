🔥

📝 Real-Time Notes App
A full-stack Note-taking app built with:

✅ Frontend: Vue 3, Pinia, Axios, Socket.io-client
✅ Backend: Node.js, Express, Socket.io, Mongoose, Redis
✅ Supports real-time updates and Redis caching

🚀 Live Demo
👉 Add link here if deployed

📸 Preview
Feature	Screenshot
Notes List	Add screenshot here
Add New Note	Add screenshot here
Real-time Sync	Add screenshot here

🏗️ Tech Stack
Layer	Tech
Frontend	Vue 3, Pinia, Axios, Socket.io-client
Backend	Node.js, Express, Socket.io, Mongoose
Database	MongoDB, Redis (caching)

✨ Features
✅ Add notes in real-time
✅ Notes auto-sync across multiple clients
✅ Data persisted in MongoDB
✅ Redis caching layer for optimized fetching
✅ Modular & scalable codebase
✅ Simple, clean UI

📂 Project Structure
bash
Copy
Edit
├── backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── redisClient.js
├── frontend
│   ├── src/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── App.vue
│   │   └── main.js
│   └── vite.config.js
├── README.md
└── package.json
⚙️ Setup Instructions
1️⃣ Clone Repository
bash
Copy
Edit
git clone https://github.com/your-username/note-app.git
cd note-app
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
✅ Create .env file:

env
Copy
Edit
MONGO_URI=your-mongodb-connection
REDIS_HOST=your-redis-host
REDIS_PORT=your-redis-port
REDIS_USER=default
REDIS_PASSWORD=your-redis-password
✅ Start server:

bash
Copy
Edit
node index.js
📝 Backend runs at http://localhost:5000

3️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
📝 Frontend runs at http://localhost:5173

💻 Usage
Open app at http://localhost:5173

Add a new note → instantly syncs to all clients

Notes are stored in MongoDB + cached in Redis

Enjoy 🎉

🧩 Core Libraries
Vue 3

Pinia

Axios

Socket.io-client

Express

Socket.io

Mongoose

Redis (node-redis)

📌 Possible Enhancements
✅ User authentication

✅ Markdown support

✅ Delete/edit notes

✅ Filter/search notes

✅ Deployment to production

🙌 Contributing
PRs welcome! Open an issue to discuss features or bugs.

📄 License
MIT © 2025 sanjukumari