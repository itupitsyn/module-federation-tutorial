export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  isProd: boolean;
  analyzer?: boolean;
  platform?: BuildPlatform;
}