import webpack from 'webpack'
import path from 'path'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { isDev, mode, paths } = options
  return {
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    entry: paths.entry,
    mode,
    module: {
      rules: buildLoaders(options),
    },
    output: {
      clean: true,
      filename: '[name].[contenthash].js',
      path: paths.build
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers()
  }
}