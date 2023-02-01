import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: 'css/[name].[contenthash:8].css',
      filename: 'css/[name].[contenthash:8].css'
    })
  ]
}