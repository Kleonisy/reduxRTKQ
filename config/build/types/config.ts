export type TBuildMode = 'production' | 'development'

export interface IBuildPaths {
  build: string
  entry: string
  html: string
  src: string
}

export interface IBuildEnv {
  port: number
  mode: TBuildMode
}

export interface IBuildOptions {
  isDev: boolean
  mode: TBuildMode
  paths: IBuildPaths
  port: number
}
