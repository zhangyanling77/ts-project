const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.tsx',//入口文件
    output:{
        path:path.resolve(__dirname,'dist'),//路径
        filename:'bundle.js',//文件名
        publicPath:'/'
    },
    resolve:{
        alias:{
            '@':path.resolve('src')
        }
    },
    devtool:'source-map',
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,'dist'),
        // 无法响应的路由都会重定向到首页
        historyApiFallback:true
    },
    //处理路径解析的
    resolve:{
        extensions:['.tsx','.ts','.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.tsx?/,
                loader:'ts-loader'
            },
            {
                //pre normal post
                enforce:'pre',
                test:/\.tsx?/,
                loader:'source-map-loader'
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:["url-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin() // 热更新
    ]
}
