// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaHeart,
  FaDownload,
  FaSave,
} from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import { toggleSavedTrack } from "../redux/actions/musicAction";
import MusicWaveLoader from "../ui/MusicWaveLoader";
const TrackPreview = ({ track }) => {
  const { title, audioUrl, mood, genre } = track;
  const { isLoading } = useSelector(state => state.music);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch()
  const likeKey = `likes_${title}`;

  useEffect(() => {
    const storedLikes = parseInt(localStorage.getItem(likeKey)) || 0;
    setLikeCount(storedLikes);
  }, [likeKey]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    const updatedCount = likeCount + 1;
    localStorage.setItem(likeKey, updatedCount);
    setLikeCount(updatedCount);
  };

  const handleTrackSaved = () => {
    dispatch(toggleSavedTrack(track))
  }
  return isLoading ? (
    <>
      <MusicWaveLoader />
    </>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl w-full mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center gap-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        🎵 {title}
      </h2>
  
      <div className="flex items-center gap-6">
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="text-white cursor-pointer bg-indigo-600 hover:bg-indigo-700 p-4 rounded-full shadow-md transition-all"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </motion.button>
  
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
  
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium shadow-sm">
          🎭 Mood: {mood}
        </span>
        <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-medium shadow-sm">
          🎧 Genre: {genre}
        </span>
      </div>
  
      <div className="flex gap-4 mt-2 items-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={audioUrl}
          download
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-xl shadow transition-all flex items-center gap-2"
        >
          <FaDownload /> Download
        </motion.a>
  
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleTrackSaved}
          className="bg-blue-100 cursor-pointer hover:bg-blue-200 text-blue-800 text-sm px-4 py-2 rounded-xl shadow transition-all flex items-center gap-2"
        >
          <FaSave /> Save
        </motion.button>
  
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleLike}
          className="text-red-500 cursor-pointer text-xl flex items-center gap-2"
        >
          <FaHeart />{" "}
          <span className="text-sm font-semibold">{likeCount}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default TrackPreview;
