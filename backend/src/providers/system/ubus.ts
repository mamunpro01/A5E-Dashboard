import type {
  DashboardSystemData,
  SystemProvider,
} from "./interface.js";

export class UbusSystemProvider implements SystemProvider {
  async getDashboard(): Promise<DashboardSystemData> {
    throw new Error("UBUS provider not implemented yet");
  }
}
