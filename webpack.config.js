//最终配置

const base = require('./webpack.base')

const prod = require('./webpack.prod')
const dev = require('./webpack.dev')
const {
    plugins
} = require('./webpack.prod')
module.exports = function (env) {
    if (env && env.prod) {
        //生产环境
        prod.plugins = prod.plugins.concat(base.plugins)
        return {
            ...base,
            ...prod
        }
    } else {
        //开发环境

        return {
            ...base,
            ...dev,

        }
    }
}