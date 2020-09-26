const webpack = require('webpack');
// const dotenv = require('dotenv');

const path = require('path');
module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, './src/client/js'),
        filename: 'bundle.js'
    },
    target: 'node',
    // externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                // use: ["babel-loader", "raw-loader"],
                use: "babel-loader",
                use: "raw-loader",
                resolve: {extensions: ['.ts']}
              }, {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                // use: ["babel-loader", "raw-loader"],
                use: "babel-loader",
                //use: "raw-loader",
                resolve: {extensions: ['.js']}
              }, 
            //   {
            //     test: /\.json$/,
            //     use: "json-loader", "postcss-loader"
            //   }, 
              {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
                // options: {sourceMap: true}
              }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                // options: {sourceMap: true}
              }, {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: 'url-loader?limit=10000'
              },
              {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
      new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
    externals: [{ 'express': { commonjs: 'express' } }]
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env': JSON.stringify(dotenv.config().parsed)
    //     })
    // ],
}