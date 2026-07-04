import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";

import DashboardPage from "@/pages/DashboardPage";
import NetworkPage from "@/pages/NetworkPage";
import DevicesPage from "@/pages/DevicesPage";
import DockerPage from "@/pages/DockerPage";
import AdGuardPage from "@/pages/AdGuardPage";
import LogsPage from "@/pages/LogsPage";
import SettingsPage from "@/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "network",
        element: <NetworkPage />,
      },
      {
        path: "devices",
        element: <DevicesPage />,
      },
      {
        path: "docker",
        element: <DockerPage />,
      },
      {
        path: "adguard",
        element: <AdGuardPage />,
      },
      {
        path: "logs",
        element: <LogsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
