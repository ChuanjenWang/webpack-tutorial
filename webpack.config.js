{
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname,'dist')
        },
        module: {
            rules: [
                {
                    use: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/
                }
            ]
        }
    }
}