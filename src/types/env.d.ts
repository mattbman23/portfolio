// environment variables
declare namespace NodeJS {
  export interface ProcessEnv {
    REVALIDATE_TOKEN: string;
    GITHUB_URL: string;
  }
}
