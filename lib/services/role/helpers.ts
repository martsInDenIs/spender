import { JwtPayload } from "jsonwebtoken";
import * as jwt from "../jwt";

function isJwtPayload(
  token: ReturnType<typeof jwt.decodeToken>
): token is JwtPayload {
  if (token === null || typeof token === "string") {
    return false;
  }

  return true;
}

export { isJwtPayload };
