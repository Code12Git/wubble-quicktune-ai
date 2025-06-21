import { useSelector } from "react-redux";
import Dropdown from "./components/Dropdown";
import TrackPreview from "./components/TrackPreview";


function App() {
  const {musicData} = useSelector(state=>state.music)

console.log(musicData)

  return (
    <>
   <Dropdown />
  {musicData ? <TrackPreview track={musicData} /> : ''}
   </>
  );
}

export default App;