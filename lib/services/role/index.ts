import "server-only";

import { cookies } from "next/headers";
import * as jwt from "../jwt";
import { isJwtPayload } from "./helpers";

const ROLE_KEY = "role";

function getRole() {
  const token = cookies().get(ROLE_KEY)?.value;

  if (!token) {
    return;
  }

  const decodedToken = jwt.decodeToken(token);

  return isJwtPayload(decodedToken) ? decodedToken[ROLE_KEY] : undefined;
}

function hasRole() {
  return cookies().has(ROLE_KEY);
}

export { getRole, hasRole };
