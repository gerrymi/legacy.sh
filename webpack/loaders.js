const path = require("path");
const babelrc = require("./.babelrc");

const babel = () => [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    include: path.join(__dirname, "../packages"),
    use: {
      loader: "babel-loader",
      options: babelrc,
    },
  },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    include: path.join(__dirname, "../packages"),
    use: {
      loader: "ts-loader",
    },
  },
];

const hot = () => ({
  test: /\.(js|jsx)$/,
  use: "react-hot-loader/webpack",
  include: /node_modules/,
});

const file = () => ({
  test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
  loader: "file-loader",
});

module.exports = {
  babel,
  hot,
  file,
};
