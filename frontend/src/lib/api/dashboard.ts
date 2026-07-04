import api from "./client";

export interface DashboardResponse {
  cpu: number;
  memory: number;
  docker: number;
  uptime: string;
  router: string;
  network: string;
  adguard: string;
  wanIp: string;
}

export async function getDashboard() {
  const { data } =
    await api.get<DashboardResponse>("/dashboard");

  return data;
}
