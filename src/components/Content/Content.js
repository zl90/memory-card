import Description from "./Description/Description";
import Score from "./Score/Score";
import Grid from "./Grid/Grid";
import { useState, useEffect } from "react";

const Content = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="content-container">
      <div className="content-container-layout">
        <Score currentScore={currentScore} bestScore={bestScore} />
        <Description />
        <Grid
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </div>
    </div>
  );
};

export default Content;
