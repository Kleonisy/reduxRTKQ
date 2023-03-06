import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

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

  const cssLoader = buildCssLoader(isDev)

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
