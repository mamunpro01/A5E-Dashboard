import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    wanIp: "192.168.1.1",
    gateway: "192.168.1.254",
    dns: [
      "1.1.1.1",
      "8.8.8.8",
    ],
    rx: "92 Mbps",
    tx: "24 Mbps",
    status: "online",
    interfaces: [
      {
        name: "WAN",
        status: "online",
        ip: "192.168.1.1",
      },
      {
        name: "LAN",
        status: "online",
        ip: "10.0.0.1",
      },
      {
        name: "WG0",
        status: "offline",
        ip: "-",
      },
    ],
  });
});

export default router;
