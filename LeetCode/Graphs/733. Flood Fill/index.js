/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (image === null || image.length < 1 || image[sr][sc] === color)
    return image;

  const initColor = image[sr][sc];

  const fill = (image, r, c, color, initColor) => {
    if (
      r < 0 ||
      r >= image.length ||
      c < 0 ||
      c >= image[0].length ||
      initColor !== image[r][c]
    ) {
      return;
    }
    image[r][c] = color;
    fill(image, r - 1, c, color, initColor);
    fill(image, r + 1, c, color, initColor);
    fill(image, r, c - 1, color, initColor);
    fill(image, r, c + 1, color, initColor);
  };
  fill(image, sr, sc, color, initColor);
  return image;
};
