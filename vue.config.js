const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

//解决跨域问题
module.exports = {
    devServer: {
        proxy: {
            /* 匹配所有以'/aip'开头的请求 */
            '/api': {
                target: 'http://localhost:8081', //代理目标的基础路径
                changeOrigin: true, //是否跨域
                pathRewrite: { //重命名
                    '^/api': '/api'
                },
                ws: true, //用于支持websocket
                //changeOrigin: true,  用于请求头中的host值
            }
        }
    }
}