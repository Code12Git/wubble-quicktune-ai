import {  motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

const Dropdown = () => {
  const [moodOpen, setMoodOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading,setLoading] = useState(false)

  const moods = [
    { name: "Happy", emoji: "😊" },
    { name: "Sad", emoji: "😢" },
    { name: "Energetic", emoji: "⚡" },
    { name: "Chill", emoji: "🍃" }
  ];

  const genres = [
    { name: "Pop", emoji: "🎤" },
    { name: "Lo-fi", emoji: "🎧" },
    { name: "Cinematic", emoji: "🎬" },
    { name: "EDM", emoji: "🕺" }
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setMoodOpen(false);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setGenreOpen(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-amber-200 via-pink-300 to-indigo-400 min-h-screen w-full flex flex-col items-center justify-center p-8"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl font-bold text-white drop-shadow-lg mb-12 flex items-center gap-2"
      >
        <span>🎵</span> Music Selector <span>🎶</span>
      </motion.h1>
      
      <div className="space-y-8 w-full max-w-md">
        
        {/* Mood Selector */}
        <motion.div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMoodOpen(!moodOpen)}
            className="w-full p-4 rounded-xl cursor-pointer bg-white/90 backdrop-blur-sm border-2 border-white/50 text-gray-800 font-medium text-lg shadow-lg flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🎭</span>
              <span>Mood: {selectedMood ? selectedMood.name : "Happy"}</span>
            </div>
            <motion.span
              animate={{ rotate: moodOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl"
            >
              ⌄
            </motion.span>
          </motion.button>
          
          <AnimatePresence>
            {moodOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute mt-2 w-full bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-xl z-10"
              >
                {moods.map((mood) => (
                  <motion.li
                    key={mood.name}
                    onClick={() => handleMoodSelect(mood)}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
                    className={`p-3 px-4 border-b border-white/30 last:border-0 text-gray-700 cursor-pointer flex items-center gap-3 ${
                      selectedMood?.name === mood.name ? "bg-pink-300/80" : ""
                    }`}
                  >
                    <span className="text-xl">{mood.emoji}</span>
                    <span>{mood.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Genre Selector */}
        <motion.div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setGenreOpen(!genreOpen)}
            
            className="w-full p-4 rounded-xl cursor-pointer bg-white/90 backdrop-blur-sm border-2 border-white/50 text-gray-800 font-medium text-lg shadow-lg flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🎼</span>
              <span>Genre: {selectedGenre ? selectedGenre.name : "Lo-fi"}</span>
            </div>
            <motion.span
              animate={{ rotate: genreOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl"
            >
              ⌄
            </motion.span>
          </motion.button>
          
          <AnimatePresence>
            {genreOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute mt-2 w-full bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-xl z-10"
              >
                {genres.map((genre) => (
                  <motion.li
                    key={genre.name}
                    onClick={() => handleGenreSelect(genre)}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
                    className={`p-3 px-4 border-b border-white/30 last:border-0 text-gray-700 cursor-pointer flex items-center gap-3 ${
                      selectedGenre?.name === genre.name ? "bg-pink-300/80" : ""
                    }`}
                  >
                    <span className="text-xl">{genre.emoji}</span>
                    <span>{genre.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        {selectedMood && selectedGenre && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-4 rounded-xl cursor-pointer bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-bold text-lg shadow-lg mt-6"
          >
            Find My Music 🎶
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Dropdown;