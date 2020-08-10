//公共配置
/**
 * 复制资源
 */
const CopyPlugin = require('copy-webpack-plugin');

/**
 * 创建页面
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')


module.exports = {
    entry: {
        list: './src/script/list.js',
        province: './src/script/province.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash:5].js'
    },
    stats: {
        modules: false,
        colors: true
    },
    plugins: [
        //new CleanWebpackPlugin(), //清空文件夹
        new HtmlWebpackPlugin({ //引用模板
            template: 'assets/list.html',
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({ //引用模板
            template: 'assets/detail.html',
            filename: 'detail.html',
            chunks: ['province']
        }),
        new CopyPlugin({ //拷贝css,和img
            patterns: [{
                    from: 'assets/img',
                    to: './img'
                },
                {
                    from: 'assets/css',
                    to: './css'
                }
            ]
        }),
    ]

}