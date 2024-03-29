const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/js/application.js',
  mode: 'development',
  output: {
    filename: 'application_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },  
  plugins: [new HtmlWebpackPlugin({

    template: "./src/index.html"
  }),new MiniCssExtractPlugin()],
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader,
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }
    ]
  },
  optimization: {
    minimizer: [
      
      new MiniCssExtractPlugin(),
    ],
  },
  

  
};
