//开发环境配置
module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        openPage: 'list.html',
        proxy: {
            "/api": 'http://yuanjin.tech:5100/',//当访问改地址时,转发地址
            changeOrigin: true
        }
    }
}