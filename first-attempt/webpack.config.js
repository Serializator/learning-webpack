const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                /*
                 * match all the .scss files and transpile them using the sass-loader
                 * after which the output is passed to the css-loader and minified.
                */
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: { minimize: true }
                    }, 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['./dist'], {
            exclude: ['index.html'],
            verbose: false
        }),
        
        new ExtractTextPlugin({ filename: 'bundle.css' })
    ]
};