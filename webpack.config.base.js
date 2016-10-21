const path = require('path');
const webpack = require('webpack');

const libraryName = 'HidenNoTare';
const lowerLibraryName = 'hiden-no-tare';

module.exports = function getConfig(env) {
  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
  let outputFile = `${lowerLibraryName}.js`;

  if (env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin(
      {
        minimize: true,
        compress: {
          warnings: false,
        },
        mangle: true,
      }
    ));
    outputFile = `${lowerLibraryName}.min.js`;
  }

  return {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNameDefine: true,
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      },
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader?cacheDirectory',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    plugins,
  };
};
