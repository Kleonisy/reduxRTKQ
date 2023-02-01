import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    open: true,
    port: options.port
  }
}