import { getTranslations } from "next-intl/server";

export default async function NotFound() {
    const t = await getTranslations('notFound');

    return <div className="flex items-center justify-center w-full">
        <p className="text-white text-5xl">{t('header')}</p>
    </div>
}