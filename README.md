#  Wubble QuickTune Mini - AI Music Preview Generator

A single-page full-stack web app that simulates the Wubble music preview flow:  
**“Choose mood + genre → generate → listen + download + save + liked.”**

Built as part of the Wubble Full Stack Developer Internship Challenge.

---

##  Live Demo

 [Deployed on Vercel](https://wubble-quicktune-ai-x6fl.vercel.app/)  
 [Public GitHub Repo](https://github.com/Code12Git/wubble-quicktune-ai)

---

##  Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Redux** (for state management)
- **Framer Motion** (for animations)
- **LocalStorage** (for liked/recent tracks)

### Backend:
- **Node.js + Express**
- Serves:
  - List of moods
  - List of genres
  - Random track previews

---

##  Features

###  Core Functionality
- [x] Select Mood (Happy, Sad, Energetic, Chill)
- [x] Select Genre (Pop, Lo-fi, Cinematic, EDM)
- [x] "Generate" Button simulates music generation with a 2s animation
- [x] Random music preview returned (mock or royalty-free)
- [x] Play/Pause audio
- [x] Download audio
- [x] Display mood & genre tags
- [x] Like/Favorite tracks (stored in LocalStorage)
- [x] Fun loading animation using Framer Motion
- [x] Recent tracks (stored in LocalStorage)
- [x] Smooth UI transitions

---

##  How to Run Locally

###  Frontend

```bash
git clone https://github.com/Code12Git/wubble-quicktune-ai.git
cd wubble-quicktune-frontend
npm install
npm run dev
```

### Backend
``` bash
Copy
Edit
cd backend
npm install
npm run dev
API runs at http://localhost:3001
Frontend runs at http://localhost:5173
```
### Folder Structure
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
### Logic Highlights
- Simulated generation delay using setTimeout

- Random audio from preloaded list

- Like functionality stored per user via LocalStorage

- All frontend logic is modular and reusable

- Responsive UI using Tailwind’s utility-first classes and framer

### Future Improvements
- Add real-time backend track fetching via database

- Auth system for personalized track history

- Add waveform visualizer

- Add categories & filtering

- Add unit tests for UI and backend endpoints


### Contact
If you have questions or feedback:

- Email: sasxenasaksham46@gmail.com

### License
MIT License

yaml
Copy
Edit

---








