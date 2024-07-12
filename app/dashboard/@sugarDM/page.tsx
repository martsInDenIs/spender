import List from "@/components/common/List";
import DecideRequest from "@/components/dashboard/Request/DecideRequest";
import { getRequests } from "@/lib/api/requests/api";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations();

    const requests = await getRequests({ conditions: "decided=false" });

    return <section className='bg-4 h-full rounded-md text-white p-4 pt-10 flex flex-col gap-4 flex-1'>
        <div>
            <h1 className='text-5xl mb-4'>{t('dashboard.dm.requests')}</h1>
            <hr />
        </div>
        <List listEmptyPlaceholder={<p className="empty-list-placeholder">{t('components.list.emptyPlaceholder')}</p>}>
            {requests.map((request) => <DecideRequest {...request} key={request.id} />)}
        </List>
    </section>
}