const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPluagin=require('clean-webpack-plugin')

module.exports={
    entry :{
        main:'.src/index.js',
    },
    output :{
        filename:'[name].[hash].js',
        path : path.resolve('./dist'),
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude:['node_modules'],
            use:[{loader:'babel-loader'}],
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
    }),
    new CleanWebpackPluagin(['dist'])
],
devServer:{
    host:'localhost',
    port:3000,
    open:true,
}
}