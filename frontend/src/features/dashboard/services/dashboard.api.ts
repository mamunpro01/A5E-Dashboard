import { api } from "@/lib/api";
import type { DashboardData } from "../types/dashboard";

export async function fetchDashboard() {
  const { data } = await api.get<DashboardData>("/dashboard");

  return data;
}
