const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// const Dotenv = require("dotenv-webpack");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      clean: true,
    },
    stats: "errors-only",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // {
        //   test: /\.(scss|sass)$/,
        //   use: ["style-loader", "css-loader", "sass-loader"],
        // },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
          type: "asset/resource",
        },
        {
          test: /\.mp4$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "video"
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "asset/inline",
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
      // new Dotenv({
      //   systemvars: true,
      //   allowEmptyValues: false,
      // }),
      new ESLintPlugin({
        emitError: true,
        emitWarning: true,
        failOnError: true
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html"),
      }),
      new CleanWebpackPlugin(),
    ],
    cache: {
      type: "filesystem",
    },
    optimization: {
      // runtimeChunk: true,
      // runtimeChunk: "single",
    },
    devServer: {
      historyApiFallback: { index: "/", disableDotRule: true },
      port: 3000,
      open: true,
      compress: true,
      hot: true,
      static: path.join(__dirname, "public"),
    },
  };
};