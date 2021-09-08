module.exports = {
    mode: "production",
    devServer: {
        contentBase: './examples/'
    },
    output: {
        filename: 'p5.splitSave.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}