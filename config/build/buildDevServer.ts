import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { IBuildOptions } from './types/config'

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: options.port,
  }
}
