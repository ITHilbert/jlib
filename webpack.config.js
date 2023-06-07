//Path include
const path = require('path');
//const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
    //Vue
    {
        entry: {
            main: "./src/vue/vue.js",
        },
        output: {
            filename: 'vue.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.vue$/,
                    use: [
                        { loader: "vue-loader" },
                        { loader: "vue-style-loader" }
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
        ],
        resolve: {
            alias: {
                vue$: "vue/dist/vue.js",
            },
            extensions: ["*", ".js", ".vue", ".json"],
        },
    },
    //Ts
    {
        entry: './src/ts/index.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        output: {
            filename: 'jlib.js',
            path: path.resolve(__dirname, 'dist')
        }
    },
    //SCSS Vue
    {
        entry: ['./src/scss/vue.scss'],
        module: {
            rules: [{
                test: /.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // MiniCssExtractPlugin anstelle von extract-loader
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }]
        },
        output: {
            //filename: 'vue.css',
            path: path.resolve(__dirname, 'dist/css')
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'vue-styles.css',
            })
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin(),
            ],
        },
    },

];