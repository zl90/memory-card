import Description from "./Description/Description";
import Score from "./Score/Score";
import Grid from "./Grid/Grid";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-container-layout">
        <Score />
        <Description />
        <Grid />
      </div>
    </div>
  );
};

export default Content;
