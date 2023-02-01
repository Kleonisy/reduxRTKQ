export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  build: string
  entry: string
  html: string
}

export interface BuildEnv {
  port: number
  mode: BuildMode
}

export interface BuildOptions {
  isDev: boolean
  mode: BuildMode
  paths: BuildPaths
  port: number
}