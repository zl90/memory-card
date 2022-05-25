import { Divider } from "@mui/material";

const GridItem = (props) => {
  return (
    <button className="grid-item" onClick={props.onClick}>
      <img src={props.image} alt="Homer Simpson" className="grid-item-image" />
      <Divider className="grid-item-divider" />
      <p className="grid-item-name">{props.name}</p>
    </button>
  );
};

export default GridItem;
