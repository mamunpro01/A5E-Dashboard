import { useQuery } from "@tanstack/react-query";
import { fetchNetwork } from "../services/network.api";

export function useNetwork() {
  return useQuery({
    queryKey: ["network"],
    queryFn: fetchNetwork,
    refetchInterval: 5000,
  });
}
