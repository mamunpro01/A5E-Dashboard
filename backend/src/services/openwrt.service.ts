import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

async function run(cmd: string) {
  try {
    const { stdout } = await execAsync(cmd);
    return stdout.trim();
  } catch {
    return null;
  }
}

export async function getBoard() {
  const output = await run("ubus call system board");

  if (!output) {
    return {
      supported: false,
      message: "Not running on OpenWrt/ImmortalWrt"
    };
  }

  return JSON.parse(output);
}

export async function getLoad() {
  return await run("cat /proc/loadavg");
}

export async function getMemory() {
  return await run("cat /proc/meminfo");
}

export async function getWifi() {
  return await run("iwinfo");
}

export async function getWAN() {
  return await run("ip addr show");
}
