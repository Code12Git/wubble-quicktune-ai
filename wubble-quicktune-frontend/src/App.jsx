import { useSelector } from "react-redux"
import Dropdown from "./components/Dropdown"
import TrackPreview from "./components/TrackPreview"

function App() {
  const { musicData } = useSelector((state) => state.music)

  return (
    <div className="bg-gradient-to-r from-amber-200 via-pink-300 to-indigo-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <Dropdown />
        {musicData && <TrackPreview track={musicData} />}
      </div>
    </div>
  )
}

export default App