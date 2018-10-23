const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('Clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
function resolve(dir){
    return path.join(__dirname,'..',dir)
}
module.exports = {
    entry:'./main/main.js',
    output:{
        path:path.join(__dirname, '/dist'),
        filename:'build.js',
        library:'mainjs',
        libraryTarget:'umd',
        umdNamedDefine:true
    },
    //设置开发者工具的端口号,不设置则默认为8080端口
    devServer: {
        contentBase:'./dist',
        port: 8090
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
                
            }
        ],
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter') // 默认的错误提示方式
                    }
                },
                enforce: 'pre', // 编译前检查
                exclude: /node_modules/, // 不检测的文件
                include: [__dirname + '/src'], // 要检查的目录
            }
        ]
    },
    plugins:[
          new ExtractTextWebpackPlugin('[name].bundle.css',{
            allChunks:true
          }),
          /*new CleanWebpackPlugin(["dist"],{
            root:__dirname,
            verbose:true,
            dry:false
          }),*/
          new CopyWebpackPlugin([{
            from:path.resolve(__dirname,'src'),
            to:"",
            ignore:['.*']
          }])
     ]

};