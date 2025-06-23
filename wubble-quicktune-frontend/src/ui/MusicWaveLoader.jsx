// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const barVariants = {
  animate: {
    scaleY: [0.3, 1, 0.3],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function MusicWaveLoader() {
  return (
    <div className="flex items-center justify-center space-x-1 h-16">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-2 bg-indigo-600 rounded-sm origin-bottom"
          style={{ height: 24 }}
          variants={barVariants}
          animate="animate"
          transition={{
            delay: i * 0.15,
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
