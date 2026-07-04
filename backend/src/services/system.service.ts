import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

export async function run(command: string) {
  try {
    const { stdout } = await execAsync(command);
    return stdout.trim();
  } catch (error) {
    return "";
  }
}

export async function getSystemInfo() {
  const hostname = await run("hostname");
  const uptime = await run("uptime");
  const kernel = await run("uname -r");
  const cpu = await run("cat /proc/cpuinfo");
  const memory = await run("cat /proc/meminfo | head -5");

  return {
    hostname,
    uptime,
    kernel,
    cpu,
    memory
  };
}
