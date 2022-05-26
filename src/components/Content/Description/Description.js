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
            Click any card! Can you remember which cards you <em>haven't</em>{" "}
            clicked?
          </div>
        );
      case "lose":
        return (
          <div className="display-lose">
            You lose. Better luck next time!
            <button onClick={handleClick} className="restart-button">
              Restart
            </button>
          </div>
        );
      case "win":
        return (
          <div className="display-win">
            Congratulations, you win!
            <button onClick={handleClick} className="restart-button">
              Restart
            </button>
          </div>
        );
      default:
        return (
          <div className="display-play">
            Click any card! Can you remember which cards you <em>haven't</em>{" "}
            clicked?
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
