import BestScore from "./BestScore/BestScore";
import CurrentScore from "./CurrentScore/CurrentScore";

const Score = (props) => {
  return (
    <div className="score-container">
      <CurrentScore currentScore={props.currentScore} />
      <BestScore bestScore={props.bestScore} />
    </div>
  );
};

export default Score;
