const importAllImagesInDirectory = () => {
  const importAll = (require) =>
    require.keys().reduce((acc, next) => {
      acc[
        next
          .replace("images/simpsonsImages/", "")
          .replace("./", "")
          .replaceAll("-", " ")
          .replaceAll(".jpg", "")
      ] = require(next);
      return acc;
    }, {});

  const images = importAll(
    require.context("images/simpsonsImages/", false, /\.(png|jpe?g|svg)$/)
  );

  return images;
};

export default importAllImagesInDirectory;
