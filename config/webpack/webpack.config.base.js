/* eslint-disable import/extensions, import/no-extraneous-dependencies */

const path = require('path');
const Webpack = require('webpack');

const PACKAGE = require('../../package.json');
const {
  AUTH0_CLIENT_ID_DEV,
  AUTH0_CLIENT_ID_PROD,
  AUTH0_DOMAIN,
} = require('../auth/auth0.config.js');

const BANNER = `
${PACKAGE.name} - v${PACKAGE.version}
${PACKAGE.description}
${PACKAGE.homepage}

Copyright (c) 2017-${(new Date()).getFullYear()}, OpenLattice, Inc. All rights reserved.
`;

module.exports = (env) => {

  //
  // constants
  //

  const BABEL_CONFIG = path.resolve(__dirname, '../babel/babel.config.js');
  const BASE_PATH = `/${env.basePath || 'login'}/`;
  const ENV_DEV = 'development';
  const ENV_PROD = 'production';

  const ROOT = path.resolve(__dirname, '../..');
  const BUILD = path.resolve(ROOT, 'build');
  const NODE = path.resolve(ROOT, 'node_modules');
  const SOURCE = path.resolve(ROOT, 'src');

  //
  // loaders
  //

  const BABEL_LOADER = {
    test: /\.js$/,
    exclude: /node_modules/,
    include: [
      SOURCE,
    ],
    use: {
      loader: 'babel-loader',
      options: {
        configFile: BABEL_CONFIG,
      },
    },
  };

  //
  // plugins
  //

  const BANNER_PLUGIN = new Webpack.BannerPlugin({
    banner: BANNER,
    entryOnly: true,
  });

  const DEFINE_PLUGIN = new Webpack.DefinePlugin({
    __AUTH0_CLIENT_ID__: JSON.stringify(env.production ? AUTH0_CLIENT_ID_PROD : AUTH0_CLIENT_ID_DEV),
    __AUTH0_DOMAIN__: JSON.stringify(AUTH0_DOMAIN),
    __BASE_PATH__: JSON.stringify(BASE_PATH),
    __ENV_DEV__: JSON.stringify(!!env.development),
    __ENV_PROD__: JSON.stringify(!!env.production),
    __PACKAGE__: JSON.stringify(PACKAGE.name),
    __VERSION__: JSON.stringify(`v${PACKAGE.version}`),
  });

  //
  // base webpack config
  //

  return {
    bail: true,
    entry: [
      path.resolve(ROOT, 'src/index.js'),
    ],
    mode: env.production ? ENV_PROD : ENV_DEV,
    module: {
      rules: [
        BABEL_LOADER,
        {
          generator: {
            filename: (
              env.production
                ? 'static/assets/[name].[contenthash][ext]'
                : 'static/assets/[name][ext]'
            )
          },
          test: /\.(gif|ico|jpg|jpeg|png|svg|webp)(\?.*)?$/,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: !!env.production,
    },
    output: {
      path: BUILD,
      publicPath: BASE_PATH,
    },
    performance: {
      hints: false, // disable performance hints for now
    },
    plugins: [
      DEFINE_PLUGIN,
      BANNER_PLUGIN,
    ],
    resolve: {
      extensions: ['.js', '.css'],
      modules: [
        SOURCE,
        NODE,
      ],
    },
  };
};
