import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Description = (props) => {
  const handleClick = () => {
    // Restart the game.
    props.setGameState("play");
    props.setGameWasReset(true);
  };

  const displayMessage = (gameState) => {
    switch (gameState) {
      case "play":
        return (
          <div className="display-play">
            Click every card once. Don't click a card twice! Can you click them
            all?
          </div>
        );
      case "lose":
        return (
          <div className="display-lose">
            You lose. Better luck next time!
            <Button
              variant="contained"
              onClick={handleClick}
              className="restart-button"
              color="error"
            >
              Restart
            </Button>
          </div>
        );
      case "win":
        return (
          <div className="display-win">
            Congratulations, you win!
            <Button
              variant="contained"
              onClick={handleClick}
              className="restart-button"
              color="error"
            >
              Restart
            </Button>
          </div>
        );
      default:
        return (
          <div className="display-play">
            Click every card once. Don't click a card twice! Can you click them
            all?
          </div>
        );
    }
  };

  return (
    <div className="description-container">
      {displayMessage(props.gameState)}
    </div>
  );
};

export default Description;
