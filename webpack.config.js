const path = require('path');

module.exports = {
    devtool:  'source-map',
    watch: true,
    mode: 'development',
    entry: {
        index: './src/index.js',
        effect3d: './src/effect3d/effect3d.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
};