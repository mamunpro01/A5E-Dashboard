import { Router } from "express";
import * as controller from "../controllers/system.controller.js";

const router = Router();

router.get("/board", controller.board);
router.get("/memory", controller.memory);
router.get("/wifi", controller.wifi);
router.get("/load", controller.load);
router.get("/wan", controller.wan);

export default router;
