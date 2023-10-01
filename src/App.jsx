import { useEffect, useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import gifs from "./utils/gifs";

function App() {
  const [gifSet, setGifSet] = useState([]);

  const randomSet = () => {
    let l = gifs.length;
    let r = [];

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 16; i++) {
      let j = getRandomInt(l);
      r.push(gifs[j]); // Use j as the index to select a random gif
    }
    setGifSet([])
    setGifSet(r);
  }

  useEffect(() => {
    randomSet();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-10">
      <img src="Seinfeld_logo.svg" alt="Seinfeld Logo" className="w-1/4 p-4" />
      <ImageGrid imgs={gifSet} />
      <button onClick={randomSet}>New Game</button>
    </div>
  );
}

export default App;
