const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV == "development";

module.exports = {
  mode: "production", // development  production
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //   ],
  // },
  // 生产环境下默认已经开启压缩
  optimization: {
    // usedExports: true, // 只会标记
    // sideEffects: true,
    // minimize: true,
  },
};
