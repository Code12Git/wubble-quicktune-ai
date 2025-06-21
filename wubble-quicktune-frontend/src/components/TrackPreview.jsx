import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";

const TrackPreview = ({ track }) => {
    
  const { title, audioUrl, mood, genre, id } = track;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedTracks = JSON.parse(localStorage.getItem("likedTracks")) || [];
    setLiked(likedTracks.includes(id));
  }, [id]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    const likedTracks = JSON.parse(localStorage.getItem("likedTracks")) || [];
    let updatedLikes;
    if (liked) {
      updatedLikes = likedTracks.filter((trackId) => trackId !== id);
    } else {
      updatedLikes = [...likedTracks, id];
    }
    localStorage.setItem("likedTracks", JSON.stringify(updatedLikes));
    setLiked(!liked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4"
    >
      <h2 className="text-xl font-semibold text-center">{title}</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="text-white bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full shadow-md"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
      </div>

      <div className="flex gap-3">
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
          Mood: {mood}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
          Genre: {genre}
        </span>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={audioUrl}
          download
          className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-lg shadow-md"
        >
          <FaDownload className="inline mr-2" /> Download
        </a>

        <button onClick={toggleLike} className="text-red-500 text-xl">
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </motion.div>
  );
};

export default TrackPreview;
