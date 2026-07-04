import { Request, Response } from "express";
import * as owrt from "../services/openwrt.service.js";

export async function board(req: Request, res: Response) {
  res.json(await owrt.getBoard());
}

export async function memory(req: Request, res: Response) {
  res.send(await owrt.getMemory());
}

export async function wifi(req: Request, res: Response) {
  res.send(await owrt.getWifi());
}

export async function load(req: Request, res: Response) {
  res.send(await owrt.getLoad());
}

export async function wan(req: Request, res: Response) {
  res.send(await owrt.getWAN());
}
