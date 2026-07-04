export interface DashboardData {
  hostname: string;
  model: string;
  firmware: string;
  kernel: string;

  cpu: number;
  memory: number;
  uptime: string;

  docker: number;

  router: string;

  network: string;

  adguard: string;

  wanIp: string;
}
