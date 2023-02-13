const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filname: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new ESLintPlugin(options)],
};