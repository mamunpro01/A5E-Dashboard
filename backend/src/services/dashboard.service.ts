import { getSystemProvider } from "../providers/system/index.js";

export async function getDashboardData() {
  return getSystemProvider().getDashboard();
}
