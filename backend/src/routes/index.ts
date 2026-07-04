import { Router } from "express";

import health from "./health.js";
import system from "./system.js";
import dashboard from "./dashboard.js";
import events from "../events/sse.js";

const router = Router();

router.use("/health", health);
router.use("/system", system);
router.use("/dashboard", dashboard);
router.use("/events", events);

export default router;
