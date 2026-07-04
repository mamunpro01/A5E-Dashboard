import { Router } from "express";

import health from "./health.js";
import system from "./system.js";

const router = Router();

router.use("/health", health);
router.use("/system", system);

export default router;
