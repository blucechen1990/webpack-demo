const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css插件


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
        use: [MinCssExtractPlugin.loader, 'css-loader'],
        // use: ['file-loader', 'extract-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    //数组形式 存放所有的webpack插件
    new HtmlWebPackPlugin({
      filename: "index.html", //生成打包文件名
      template: "./src/index.html", //模板路径
      minify: { //生产模式可以进行配置
        removeAttributeQuotes: true, //删除 html文件双引号
        collapseWhitespace: false //折叠控行
      },
      hash:true, //添加哈希值
    }),
    new MinCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
  ],
  devServer: {
    //开发服务器配置
    // contentBase: "./build", //指向打包目录
    port: 3000, //服务端口号
    progress: true, //打包进度
    open: true, //是否打开浏览器
    compress: false //是否压缩
  }
};