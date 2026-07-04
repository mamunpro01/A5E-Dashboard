import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});
import type { NetworkData } from "../types/network";

export async function fetchNetwork() {
  const { data } = await api.get<NetworkData>("/network");
  return data;
}
