const Webpack = require('webpack');
const path = require('path');


module.exports = {
    configureWebpack: {
        plugins: [
            new Webpack.ProvidePlugin({
                //$: 'jquery',
                //jQuery: 'jquery',
                _: 'lodash'
            })
        ],
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '~': path.join(__dirname, './src'),
                '@sass': path.join(__dirname, './src/sass')
            }
        }
    }   
}