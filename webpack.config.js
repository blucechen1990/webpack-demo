const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MinCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            modules: true
          }
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".js", ".json", '.jsx'],
    alias: {
      '@js': path.resolve(__dirname, './src/js')
    }
  },
  plugins: [
    // 清空输出文件夹
    new CleanWebpackPlugin(),
    // 自动生成目标html，并把输出js插入到html中
    new HtmlWebPackPlugin({
      filename: 'index.html',     //输出文件名称
      template: './src/main.html',//模板路径
    }),
    // 把css代码分离出单独的文件插入到html中
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].css',
    })
  ],
  // 开发服务器
  // devServer: {
  //   //开发服务器配置
  //   // contentBase: "./build", //指向打包目录
  //   port: 3000, //服务端口号
  //   progress: true, //打包进度
  //   open: true, //是否打开浏览器
  //   compress: false, //是否压缩
  //   hot: true,
  // }
};