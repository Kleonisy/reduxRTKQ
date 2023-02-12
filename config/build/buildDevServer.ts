import { IBuildOptions} from './types/config';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: options.port
  }
}