/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-01-13 15:44:13
 * @LastEditors: Yukun
 * @LastEditTime: 2022-08-24 17:00:56
 */
const path = require('path');
const libraryList = ['amd', 'cjs', 'iife', 'umd'];

const entryConfig = () => {
  const config = {};
  libraryList.forEach((_val) => {
    config[_val] = './index.js';
  });
  return config;
};

module.exports = {
  mode: 'production', // "production" | "development" | "none"  可以脚本命令行传递  webpack --mode=production   相当于全局可取 process.env.NODE_ENV
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].umd.js',
    libraryTarget: 'umd', // 支持amd cmd 引入方式
    library: 'h5wakeupapp', // 支持script引入方式，全局暴漏参数
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')], //排除掉node_module目录
        use: [
          {
            loader: 'babel-loader',
            // options:{
            //   cacheDriectory:true,
            //   presets:['env'], //转码规则
            //   plugins:['transform-runtime'] //代码重复问题
            // }
          },
        ],
      },
    ],
  },
};
