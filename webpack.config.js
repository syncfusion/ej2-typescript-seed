const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        'src/app/index': './src/app/index.ts'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}