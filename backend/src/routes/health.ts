import { Router } from "express";
import { config } from "../config/index.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    name: config.appName,
    version: config.version,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
