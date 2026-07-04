import dotenv from "dotenv";

dotenv.config();

export const config = {
  appName: "A5E Dashboard",
  version: "0.1.0",
  port: Number(process.env.PORT ?? 8090),
};
