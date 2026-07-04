import dotenv from "dotenv";

dotenv.config();

export const config = {
  appName: "A5E Dashboard",
  version: "0.1.0",

  port: Number(process.env.PORT ?? 8090),

  provider: {
    system: process.env.SYSTEM_PROVIDER ?? "mock",
  },

  openwrt: {
    url: process.env.OPENWRT_URL ?? "",
    username: process.env.OPENWRT_USERNAME ?? "",
    password: process.env.OPENWRT_PASSWORD ?? "",
    verifySsl: process.env.OPENWRT_VERIFY_SSL === "true",
  },
};
