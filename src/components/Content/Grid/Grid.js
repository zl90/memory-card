import GridItem from "./GridItem/GridItem";
import uniqid from "uniqid";
import importAllImagesInDirectory from "./ImportAllImagesInDirectory";
import { useEffect, useState } from "react";

const Grid = (props) => {
  const [simpsonsImages, setSimpsonsImages] = useState([]);

  // Equal to componentDidMount() lifecycle method.
  // This hook runs one time when the component mounts.
  useEffect(() => {
    const rawImageData = importAllImagesInDirectory();
    const imagesArray = buildImageArray(rawImageData);

    // Place the imported image data into state.
    setSimpsonsImages(imagesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the restart button has been clicked (see Description.js) then reset the grid.
  useEffect(() => {
    if (props.gameWasReset) {
      // Unselect all grid items
      unselectGridItems();

      // Shuffle the grid.
      shuffleGridItems();

      // Reset the current score.
      props.setCurrentScore(0);

      props.setGameWasReset(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameWasReset]);

  // When the image data is imported, it's very ugly.
  // This function puts the data in an array of usable objects.
  const buildImageArray = (importedImageObject) => {
    const imageArray = [];
    Object.entries(importedImageObject).forEach(([key, value]) => {
      // This capitalizes each word in the Simpsons character name.
      let words = key.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
      }
      words = words.join(" ");

      // Build a nicely organised array for us to put into state.
      if (!(words in imageArray)) {
        imageArray.push({
          image: value,
          name: words,
          selected: false,
          id: uniqid(),
        });
      }
    });

    return imageArray;
  };

  const shuffleGridItems = () => {
    // Randomize the order of simpsonsImages
    let arr = simpsonsImages;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setSimpsonsImages(arr);
  };

  const handleClick = (index) => {
    if (props.gameState === "play") {
      // First, check if the clicked image has already been clicked this round.
      // If so, the user has lost the game, and will need to start over.
      if (simpsonsImages[index].selected) {
        handleGameOver();
        return null;
      }

      // Update the state to show the image at {index} has been clicked.
      const newArray = simpsonsImages.map((object, i) => {
        if (i === index) {
          object.selected = true;
        }

        return object;
      });

      // Set the new state.
      setSimpsonsImages(newArray);

      // Increment the score.
      props.setCurrentScore(props.currentScore + 1);

      if (playerHasWon()) {
        handleGameWon();
      } else {
        // Shuffle the cards.
        shuffleGridItems();
      }
    }
  };

  const handleGameWon = () => {
    props.setGameState("win");

    // Record the high score
    props.setBestScore(simpsonsImages.length);
  };

  const playerHasWon = () => {
    // Check if all the cards have been selected (player wins!)
    let win = true;
    simpsonsImages.map((object, i) => {
      if (!object.selected) {
        win = false;
      }
      return null;
    });
    return win;
  };

  const handleGameOver = () => {
    props.setGameState("lose");

    // Record the high score.
    if (props.currentScore > props.bestScore) {
      props.setBestScore(props.currentScore);
    }
  };

  const unselectGridItems = () => {
    const newArray = simpsonsImages.map((object, i) => {
      if (object.selected) {
        object.selected = false;
      }
      return object;
    });

    setSimpsonsImages(newArray);
  };

  return (
    <div className="grid-container">
      {simpsonsImages.map((object, i) => {
        return (
          <GridItem
            image={object.image}
            name={object.name}
            key={object.id}
            onClick={() => {
              handleClick(i);
            }}
            selected={object.selected}
            gameState={props.gameState}
          />
        );
      })}
    </div>
  );
};

export default Grid;
