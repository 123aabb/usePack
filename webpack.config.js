 //webpack配置文件最先读取里面的配置
const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')  //下载引用的插件
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports = {
    entry: './src/js/entry.js',//入口文件路径
    //publicPath:'js/',        //设置index.html提供资源服务地址（不推荐使用）
    output: {                   //输出路径
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')//__dirname根目录，+ 'dist/js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,                              //正则找css文件
                use: [ 'style-loader', 'css-loader' ]        //使用模块
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [ {
                    loader: "url-loader",
                    options:{
                        limit:8192                //图片大小于8kb以base64
                    }
                } ]
            }
        ]
    },
    devServer:{                  //服务器运行的目标文件地址
        contentBase:'./dist/js'
    },
    plugins: [                 //插件配置
        new HtmlWebpackPlugin({template: './index.html'}), //根据指定的页面生成一个新的模板页面并添加script引入静态资源
        new CleanWebpackPlugin()
    ]
};

//运行webpack打包  npm start 热更新
