import Description from "./Description/Description";
import Score from "./Score/Score";
import Grid from "./Grid/Grid";
import { useState } from "react";

const Content = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameWasReset, setGameWasReset] = useState(false);

  // Used to determine what the Description component displays.
  // Will display a 'restart' button when the game ends.
  // Possible values: 'play', 'win', 'lose'.
  const [gameState, setGameState] = useState("play");

  return (
    <div className="content-container">
      <div className="content-container-layout">
        <Score currentScore={currentScore} bestScore={bestScore} />
        <Description
          gameState={gameState}
          setGameState={setGameState}
          setGameWasReset={setGameWasReset}
        />
        <Grid
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          gameState={gameState}
          setGameState={setGameState}
          gameWasReset={gameWasReset}
          setGameWasReset={setGameWasReset}
        />
      </div>
    </div>
  );
};

export default Content;
