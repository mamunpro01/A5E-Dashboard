import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

export async function ubusCall(
  object: string,
  method: string,
  params: object = {},
) {
  const { stdout } = await exec("ubus", [
    "call",
    object,
    method,
    JSON.stringify(params),
  ]);

  return JSON.parse(stdout);
}
