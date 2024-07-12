'use server'

import { SupportedLanguages } from "@/constants"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"

export async function changeLanguage(langKey: SupportedLanguages) {
    cookies().set('lang', langKey);
    revalidatePath('/', 'layout');
} 