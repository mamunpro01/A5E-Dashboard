import type {
  DashboardSystemData,
  SystemProvider,
} from "./interface.js";

export class MockSystemProvider implements SystemProvider {
  async getDashboard(): Promise<DashboardSystemData> {
    return {
      hostname: "A5E",

      model: "Radxa Cubie A5E",

      firmware: "ImmortalWrt SNAPSHOT",

      kernel: "6.18.34",

      cpu: 12,

      memory: 47,

      uptime: "2 hours",

      docker: 4,

      router: "Online",

      network: "Connected",

      adguard: "Running",

      wanIp: "192.168.1.1",
    };
  }
}
