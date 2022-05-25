import BestScore from "./BestScore/BestScore";
import CurrentScore from "./CurrentScore/CurrentScore";

const Score = () => {
  return (
    <div className="score-container">
      <CurrentScore />
      <BestScore />
    </div>
  );
};

export default Score;
