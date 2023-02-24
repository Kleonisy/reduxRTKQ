import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    exclude: /node_modules/,
    test: /\.(js|jsx|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          [
            'i18next-extract',
            {
              keyAsDefaultValue: true,
              locales: ['ru', 'en']
            }
          ]
        ],
        presets: ['@babel/preset-env']
      }
    }
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const typescriptLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: 'ts-loader'
  }

  return [
    babelLoader,
    cssLoader,
    fileLoader,
    svgLoader,
    typescriptLoader
  ]
}
