import "./App.css";
import gifs from "./utils/gifs";
import ImageCard from "./components/ImageCard";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";

function App() {
  const [imgs, setImgs] = useState([]);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();

  const shuffleImages = () => {
    setImgs([]);

    let shuffledGifs = shuffle(gifs);
    let gameArr = [];

    for (let i = 0; i < 8; i++) {
      gameArr.push(shuffledGifs[i]);
    }

    gameArr = [...gameArr, ...gameArr];
    console.log(gameArr);

    gameArr = shuffle(gameArr);
    console.log(gameArr);

    setImgs(gameArr);
  };

  const newGame = () => {
    setScore(0);
    shuffleImages();
  };

  useEffect(() => {
    shuffleImages();
  }, []);

  const imageList =
    imgs && imgs.length > 0
      ? imgs.map((item, index) => (
          <div key={item.url} className="m-2">
            <ImageCard src={item.url} alt={item.name} />
          </div>
        ))
      : null; // Check if imgs is not an empty array before mapping

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-10">
      <img src="Seinfeld_logo.svg" alt="Seinfeld Logo" className="w-1/4 p-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{imageList}</div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}
export default App;
