import jwt from "jsonwebtoken";

function decodeToken(token: string) {
  return jwt.decode(token);
}

export { decodeToken };
