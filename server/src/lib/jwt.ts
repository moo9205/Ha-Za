import { sign, verify } from "jsonwebtoken";

export function generateAccessToken(id: number) {
  return sign({ userId: id }, process.env.ACCESS_SECRET!, { expiresIn: '1h' });
}

export function verifyAccessToken(token: string) {
  return verify(token, process.env.ACCESS_SECRET!);
}