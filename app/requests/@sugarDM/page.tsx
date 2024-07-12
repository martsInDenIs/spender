import DecideRequest from "@/components/dashboard/Request/DecideRequest";
import List from "@/components/common/List";
import { getRequests } from "@/lib/api/requests/api";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations();

    const requests = await getRequests({ conditions: 'decided=false' });

    return <section className="flex flex-col w-full bg-4 rounded-md p-4 text-white">
        <div className="mt-5">
            <h1 className="text-center text-4xl mb-2">{t('requests.sugarDM.header')}</h1>
            <hr />
        </div>
        <List listEmptyPlaceholder={<p className="empty-list-placeholder">{t('components.list.emptyPlaceholder')}</p>}>
            {requests?.map(req => <DecideRequest {...req} key={req.id} />)}
        </List>
    </section>
}