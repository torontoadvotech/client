import htmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import PluginTerser from 'terser-webpack-plugin';
import autoprefixer from 'autoprefixer';

const DEFAULT_ENV = {
  NODE_ENV: 'development'
};

const ENV = Object.entries(DEFAULT_ENV).reduce((obj, [k, v]) => {
  // @ts-ignore
  obj[`process.env.${k}`] = JSON.stringify(process.env[k] || v);
  return obj;
}, {});

const DIST = path.resolve(__dirname, 'dist');

export default (_env: any, options: { mode: string }) => {
  const IS_PROD = options.mode === 'production';

  return {
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
      filename: 'client.js',
      publicPath: '/',
      path: DIST
    },
    devtool: IS_PROD ? false : 'cheap-module-eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loaders: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                allowTsInNodeModules: true,
                compilerOptions: {
                  sourceMap: true
                }
              }
            }
          ]
        },
        {
          test: /\/fonts\/.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader?name=fonts/[hash].[ext]'
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: 'styles.css'
      }),
      new htmlWebpackPlugin({
        title: 'Web Chat App',
        template: './src/index.html'
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()]
        }
      }),
      new webpack.DefinePlugin(ENV)
    ],

    devServer: {
      contentBase: DIST,
      compress: true,
      port: 8888,
      historyApiFallback: true,
      writeToDisk: true
    },

    optimization: {
      minimize: true,
      minimizer: [new PluginTerser()]
    }
  } as webpack.Configuration;
};
