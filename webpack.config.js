const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = [
    //Vue
    {
        entry: './src/vuecomponents.js',
        devtool: 'inline-source-map',
        module: {
            rules: [{
                use: 'vue-loader',
                exclude: /node_modules/
            }]
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        resolve: {
            extensions: ['.js', '.vue']
        },
        output: {
            filename: 'vuecomponents.js',
            path: path.resolve(__dirname, 'dist')
        }
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
        }
    }
];

/* module.exports = (env = {}) => {
    return {
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
        }
    }
}; */
