const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {
            exclude: ['index.html']
        }),
        
        new VueLoaderPlugin()
    ]
};