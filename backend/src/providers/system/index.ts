import { config } from "../../config/index.js";

import { MockSystemProvider } from "./mock.js";
import { UbusSystemProvider } from "./ubus.js";

export function getSystemProvider() {
  if (config.provider.system === "ubus") {
    return new UbusSystemProvider();
  }

  return new MockSystemProvider();
}
