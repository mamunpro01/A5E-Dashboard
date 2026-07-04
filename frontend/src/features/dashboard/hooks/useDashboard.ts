import { useQuery } from "@tanstack/react-query";
import { fetchDashboard } from "../services/dashboard.api";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    refetchInterval: 5000,
    staleTime: 4000,
    retry: 3,
  });
}
