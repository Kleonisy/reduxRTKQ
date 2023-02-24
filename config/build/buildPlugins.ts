import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: 'css/[name].[contenthash:8].css',
      filename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
