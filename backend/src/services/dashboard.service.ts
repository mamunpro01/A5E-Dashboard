import { getBoard, getLoad, getMemory, getWifi, getWAN } from "./openwrt.service.js";

export async function getDashboard() {
  const [board, load, memory, wifi, wan] = await Promise.all([
    getBoard(),
    getLoad(),
    getMemory(),
    getWifi(),
    getWAN(),
  ]);

  return {
    system: board,
    load,
    memory,
    wifi,
    wan,
    generatedAt: new Date().toISOString(),
  };
}
