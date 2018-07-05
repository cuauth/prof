const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  output: {
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/grupo\/*/, to: '/' },
      ]
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.css$/,
        oneOf: [ {
          resourceQuery: /external/, // foo.css?inline
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: false,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
            ]
        },{
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
            ]
        }
        
      ]
        
      }
    ]
  },
  plugins: [htmlPlugin]
};