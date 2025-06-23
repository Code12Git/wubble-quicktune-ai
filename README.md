# 🎧 Wubble QuickTune Mini - AI Music Preview Generator

A single-page full-stack web app that simulates the Wubble music preview flow:  
**“Choose mood + genre → generate → listen + download.”**

Built as part of the Wubble Full Stack Developer Internship Challenge.

---

## 🚀 Live Demo

🔗 [Deployed on Vercel](https://your-deployed-link.vercel.app)  
🔗 [Public GitHub Repo](https://github.com/yourusername/wubble-quicktune-mini)

---

## 📸 Preview

![screenshot](./screenshot.png) <!-- Add a screenshot of your app here -->

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Zustand** (for state management)
- **Framer Motion** (for animations)
- **LocalStorage** (for liked/recent tracks)

### Backend:
- **Node.js + Express**
- Serves:
  - List of moods
  - List of genres
  - Random track previews

---

## 📦 Features

### ✅ Core Functionality
- [x] Select Mood (Happy, Sad, Energetic, Chill)
- [x] Select Genre (Pop, Lo-fi, Cinematic, EDM)
- [x] "Generate" Button simulates music generation with a 2s animation
- [x] Random music preview returned (mock or royalty-free)
- [x] Play/Pause audio
- [x] Download audio
- [x] Display mood & genre tags

### 🌟 Bonus Features
- [x] Like/Favorite tracks (stored in LocalStorage)
- [x] Dark mode toggle
- [x] Fun loading animation using Framer Motion
- [x] Recent tracks (stored in LocalStorage)
- [x] Smooth UI transitions

---

## 🧪 How to Run Locally

### 🖥️ Frontend

```bash
git clone https://github.com/yourusername/wubble-quicktune-mini.git
cd frontend
npm install
npm run dev
🔌 Backend
bash
Copy
Edit
cd backend
npm install
npm run dev
API runs at http://localhost:5000
Frontend runs at http://localhost:5173

📂 Folder Structure
css
Copy
Edit
wubble-quicktune-mini/
├── backend/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── ...
├── README.md
├── FUTURE.md
🧠 Logic Highlights
Simulated generation delay using setTimeout

Random audio from preloaded list

Like functionality stored per user via LocalStorage

All frontend logic is modular and reusable

Responsive UI using Tailwind’s utility-first classes

🧭 Future Improvements (see FUTURE.md)
Add real-time backend track fetching via database

Auth system for personalized track history

Add waveform visualizer

Add categories & filtering

Add unit tests for UI and backend endpoints

🧪 Tests (Optional)
If implemented:

bash
Copy
Edit
npm run test
Includes basic Jest/RTL unit tests for key components.

📧 Contact
If you have questions or feedback:

Email: support@wubble.ai

LinkedIn: Your LinkedIn

📝 License
MIT License

yaml
Copy
Edit

---

Let me know if you'd like me to help generate the backend structure (`server.js`), frontend layout, or even write the `FUTURE.md` file as mentioned in the prompt!








