import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/config'

export function buildResolvers(options: IBuildOptions): ResolveOptions {
  return {
    alias: {},
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['index'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
  }
}
