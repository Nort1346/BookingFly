export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      MONGODB_URI: string;
      JWT_SECRET: string;
      GAME_URI: string;
    }
  }
}
