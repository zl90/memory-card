import GridItem from "./GridItem/GridItem";
import uniqid from "uniqid";
import importAllImagesInDirectory from "./ImportAllImagesInDirectory";
import { useEffect, useState } from "react";
import { getThemeProps } from "@mui/system";

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

  const handleClick = (index) => {
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

    // Increment the score.
    props.setCurrentScore(props.currentScore + 1);

    // Set the new state.
    setSimpsonsImages(newArray);
  };

  const handleGameOver = () => {};

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
          />
        );
      })}
    </div>
  );
};

export default Grid;
