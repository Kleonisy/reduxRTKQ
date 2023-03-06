import path from 'path'
import webpack from 'webpack'
import { IBuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration}) => {
  const paths: IBuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push(buildCssLoader(true))
  config.module.rules.push(
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }
  )

  return config
}
