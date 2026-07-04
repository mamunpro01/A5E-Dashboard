export interface OpenWrtConfig {
  url: string;
  username: string;
  password: string;
}

export interface RpcSession {
  token: string;
  expiresAt?: number;
}
