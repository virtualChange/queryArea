//生产环境

/**
 * 清空输出目录
 */
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
}