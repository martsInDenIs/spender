"use server";

import { ROLE } from "@/app/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(role: ROLE) {
  cookies().set("role", role);
  redirect("/dashboard");
}

export async function logout() {
  cookies().delete("role");
  redirect("/login");
}
