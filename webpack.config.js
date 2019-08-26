const path = require('path');

module.exports = {
    devtool:  'source-map',
    watch: true,
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};