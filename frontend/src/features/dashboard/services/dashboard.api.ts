import { api } from "@/lib/api/client";
import type { DashboardData } from "../types/dashboard";

export async function fetchDashboard() {
  const { data } = await api.get<DashboardData>("/dashboard");

  return data;
}
