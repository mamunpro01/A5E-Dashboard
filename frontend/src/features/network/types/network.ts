export interface NetworkData {
  wanIp: string;
  gateway: string;
  dns: string[];

  rx: string;
  tx: string;

  status: "online" | "offline";

  interfaces: {
    name: string;
    status: "online" | "offline";
    ip: string;
  }[];
}
