"use server";

import { baseFetch } from "@/lib/helpers";
import { ROLE_NAMES } from "@/lib/services/role/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(roleName: ROLE_NAMES) {
  const response = await baseFetch("/users/set-role", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role: roleName }),
  });

  const role = response.headers
    .get("Set-Cookie")
    ?.split("; ")
    .find((cookie) => cookie.startsWith("role"));

  if (!role) {
    // TODO: Add handler
    return false;
  }

  const [roleKey, roleValue] = role.split("=");

  cookies().set(roleKey, roleValue);

  redirect("/dashboard");
}

export async function logout() {
  cookies().delete("role");
  redirect("/login");
}
