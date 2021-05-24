const path = require('path')
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
const pxtoviewport = require('postcss-px-to-viewport')
const autoprefixer = require('autoprefixer')

module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/api': {
                target:'https://nodejs-api-chi.vercel.app/',
                changeOrigin: true,
                pathRewrite: { // 路径重写，
                    '^/api': ''
                }
            }
        },
        open:true
    },
    configureWebpack: config => {
        config.optimization = {
            splitChunks: {
                chunks: 'all',
                minSize: 3000, // （默认值：30000）块的最小大小。
                minChunks: 1, //（默认值：1）在拆分之前共享模块的最小块数
                maxAsyncRequests: 5, //（默认值为5）按需加载时并行请求的最大数量
                maxInitialRequests: 6, // （默认值为3）入口点的最大并行请求数
                automaticNameDelimiter: '-',
                name: true,
                cacheGroups: {
                    lodash: {
                        name: 'lodash',
                        test: /[\\/]node_modules[\\/]lodash[\\/]/,
                        priority: 20
                    },
                    vue: {
                        name: 'vue',
                        test: /[\\/]node_modules[\\/]vue[\\/]/
                    },
                    vuex: {
                        name: 'vuex',
                        test: /[\\/]node_modules[\\/]vuex[\\/]/
                    },
                    'vuex-presistedstate': {
                        name: 'vuex-presistedstate',
                        test: /[\\/]node_modules[\\/]vuex-presistedstate[\\/]/
                    },
                    'vue-router': {
                        name: 'vue-router',
                        test: /[\\/]node_modules[\\/]vue-router[\\/]/
                    },
                    'vant': {
                        name: 'vant',
                        test: /[\\/]node_modules[\\/]vant[\\/]/
                    },
                    moment: {
                        name: 'moment',
                        test: /[\\/]node_modules[\\/]moment[\\/]/,
                        priority: 40
                    }
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap((options) => {
                options = merge(options, {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            // 按需导入vant插件
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                // 指定样式的路径
                                style: (name) => `${name}/style/less`
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer({
                        autoprefixer: {
                            overrideBrowserslist: [
                                'Android 4.1',
                                'iOS 7.1',
                                'Chrome > 31',
                                'ff > 31',
                                'ie >= 8'
                            ]
                        }
                    }),
                    pxtoviewport({
                        viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                        unitPrecision: 3 // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                    })
                ]
            }
        }
    }



}
