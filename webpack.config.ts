import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { IBuildEnv, IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    isDev,
    mode,
    paths,
    port: PORT
  })

  return config
}