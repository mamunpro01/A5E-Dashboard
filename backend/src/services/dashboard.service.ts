export interface DashboardData {
  cpu: number;
  memory: number;
  docker: number;
  uptime: string;
  router: string;
  network: string;
  adguard: string;
  wanIp: string;
}

export async function getDashboardData(): Promise<DashboardData> {
  return {
    cpu: 12,
    memory: 46,
    docker: 5,
    uptime: "3 days",
    router: "Online",
    network: "Connected",
    adguard: "Running",
    wanIp: "192.168.1.1",
  };
}
