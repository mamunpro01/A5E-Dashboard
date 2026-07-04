import { ubusCall } from "./client.js";
import type { SystemBoard, SystemInfo } from "./types.js";

export async function getBoardInfo() {
  return await ubusCall("system", "board") as SystemBoard;
}

export async function getSystemInfo() {
  return await ubusCall("system", "info") as SystemInfo;
}
