import axios from "axios";
import https from "node:https";

import { config } from "../../config/index.js";

export const openwrtHttp = axios.create({
  baseURL: config.openwrt.url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: config.openwrt.verifySsl,
  }),
});
