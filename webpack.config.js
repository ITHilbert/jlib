const path = require('path');
//const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require("vue-loader");


module.exports = [
    //Vue
    {
        entry: {
            main: "./src/vuecomponents.js",
        },
        output: {
            filename: 'vuecomponents.js',
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
        entry: './src/index.ts',
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
    //Sass Vue
    {
        entry: ['./src/sass/vuecomponents.scss'],
        module: {
            rules: [{
                test: /.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }]
        },
        output: {
            filename: 'vuescsstmp.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
];