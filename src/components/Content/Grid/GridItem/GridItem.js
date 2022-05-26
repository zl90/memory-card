import { Divider } from "@mui/material";

const GridItem = (props) => {
  const displayCard = (state) => {
    // Display different coloured cards depending on the game state.
    // "lose" and "win": show which cards the user clicked.
    // "play": show all the cards normally.
    switch (state) {
      case "win":
      case "lose":
        return (
          <>
            {props.selected ? (
              <button className="grid-item selected" onClick={props.onClick}>
                <img
                  src={props.image}
                  alt="Homer Simpson"
                  className="grid-item-image"
                />
                <Divider className="grid-item-divider" />
                <p className="grid-item-name">{props.name}</p>
              </button>
            ) : (
              <button
                className="grid-item not-selected"
                onClick={props.onClick}
              >
                <img
                  src={props.image}
                  alt="Homer Simpson"
                  className="grid-item-image"
                />
                <Divider className="grid-item-divider" />
                <p className="grid-item-name">{props.name}</p>
              </button>
            )}
          </>
        );
      case "play":
      default:
        return (
          <button className="grid-item" onClick={props.onClick}>
            <img
              src={props.image}
              alt="Homer Simpson"
              className="grid-item-image"
            />
            <Divider className="grid-item-divider" />
            <p className="grid-item-name">{props.name}</p>
          </button>
        );
    }
  };

  return <div>{displayCard(props.gameState)}</div>;
};

export default GridItem;
