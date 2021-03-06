  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'base-all.css',
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve( __dirname, 'src/index.html' ),
        filename: 'index.html'
      }),
    ],
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },
    output: {
      filename: '[name].bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        // {
        //   test: /\.less$/,
        //   use: [
        //     {
        //       loader: 'style-loader', // creates style nodes from JS strings
        //     },
        //     {
        //       loader: 'css-loader', // translates CSS into CommonJS
        //     },
        //     {
        //       loader: 'less-loader', // compiles Less to CSS
        //     }
        //   ],
        // },
        {
          test: /\.less$/,
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "less-loader"
          ],
        }
      ]
    },
    resolve: {
      alias: {
        gridSystems: path.resolve(__dirname, 'src/styles/gridSystems'),
        utils: path.resolve(__dirname, 'src/styles/utils'),
        atoms: path.resolve(__dirname, 'src/atoms'),
        atomsStyles: path.resolve(__dirname, 'src/styles/atoms'),
        moleculesStyles: path.resolve(__dirname, 'src/styles/molecules'),
        molecules: path.resolve(__dirname, 'src/molecules'),
        lazyLoadComponents:  path.resolve(__dirname, 'src/lazyLoadComponents')
      }
    }
  };