import { Router } from "express";

import health from "./health.js";
import system from "./system.js";
import dashboard from "./dashboard.js";
import events from "../events/sse.js";
import network from "./network.js";

const router = Router();

router.use("/health", health);
router.use("/system", system);
router.use("/dashboard", dashboard);
router.use("/events", events);
router.use("/network", network);

export default router;
