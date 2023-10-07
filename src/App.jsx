import "./App.css";
import gifs from "./utils/gifs";
import ImageCard from "./components/ImageCard";
import BlankCard from "./components/BlankCard";
import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";

function App() {
  const [imgs, setImgs] = useState([]);
  const [score, setScore] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const shuffleImages = () => {
    setImgs([]);
    setFlippedCards([]);
    setDisabled(false);

    let shuffledGifs = shuffle(gifs);
    let gameArr = [];

    for (let i = 0; i < 8; i++) {
      gameArr.push({ ...shuffledGifs[i], key: `${shuffledGifs[i].url}-${i}` });
    }

    gameArr = [...gameArr, ...gameArr];

    gameArr = shuffle(gameArr);

    setImgs(gameArr);
  };

  const newGame = () => {
    setScore(0);
    setGuessedCards([]); // Clear guessedCards
    shuffleImages();
  };

  useEffect(() => {
    shuffleImages();
  }, []);

  const handleCardClick = (index) => {
    if (disabled) return;

    if (!flippedCards.includes(index) && flippedCards.length < 2) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;
        const firstCard = imgs[firstIndex];
        const secondCard = imgs[secondIndex];

        if (firstCard.name === secondCard.name) {
          // Match found
          setScore(score + 1); // Increase the score

          if (score + 1 === 8) {
            // Check if the user has beaten the game
            alert("Congratulations! You've beaten the game!");
          }

          setFlippedCards([]);
          setGuessedCards((guessedCards) => [
            ...guessedCards,
            firstIndex,
            secondIndex,
          ]);
        } else {
          // No match
          setDisabled(true);
          setTimeout(() => {
            setFlippedCards([]);
            setDisabled(false);
          }, 1000);
        }
      }
    }
  };

  const imageList =
    imgs && imgs.length > 0
      ? imgs.map((item, index) => (
          <div
            key={`${item.url}-${index}`} // Generate a unique key
            className={`m-2 ${
              flippedCards.includes(index) || guessedCards.includes(index)
                ? "bg-white transform rotate-y-180 cursor-default pointer-events-none transition-transform ease-in-out duration-300"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || guessedCards.includes(index) ? (
              <ImageCard src={item.url} alt={item.name} />
            ) : (
              <BlankCard />
            )}
          </div>
        ))
      : null;

  return (
    <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-10">
      <img src="Seinfeld_logo.svg" alt="Seinfeld Logo" className="w-1/4 p-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{imageList}</div>
      <div className="mt-4">Score: {score}</div>
      <button onClick={newGame}>New Game</button>
      <br />
      <h2 className="font-2xl">JUST A FAN PROJECT, NOT ENDORSED BY THE SHOW OR ITS OWNERS</h2>
    </div>
  );
}

export default App;
