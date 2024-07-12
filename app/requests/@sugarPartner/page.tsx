import List from "@/components/common/List";
import AcceptedRequest from "@/components/dashboard/Request/AcceptedRequest";
import RejectedRequest from "@/components/dashboard/Request/RejectedRequest";
import { getRequests } from "@/lib/api/requests/api";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations();

    const acceptedRequests = await getRequests({ conditions: "decided=true&allowed=true&executed=false" });
    const rejectedRequests = await getRequests({ conditions: "decided=true&allowed=false&executed=false" });

    return <div className="w-full flex flex-row gap-4 text-white">
        <section className="flex flex-col flex-1 w-full bg-4 rounded-md p-4">
            <div className="mt-5">
                <h1 className="text-center text-4xl mb-2">{t('requests.sugarPartner.acceptSection.header')}</h1>
                <hr />
            </div>
            <List listEmptyPlaceholder={<p className="empty-list-placeholder">{t('components.list.emptyPlaceholder')}</p>}>
                {acceptedRequests?.map(req => <AcceptedRequest {...req} key={req.id} />)}
            </List>
        </section>
        <section className="flex flex-col flex-1 w-full bg-4 rounded-md p-4">
            <div className=" mt-5">
                <h1 className="text-center text-4xl mb-2">{t('requests.sugarPartner.rejectSection.header')}</h1>
                <hr />
            </div>
            <List listEmptyPlaceholder={<p className="empty-list-placeholder">{t('components.list.emptyPlaceholder')}</p>}>
                {rejectedRequests?.map(req => <RejectedRequest {...req} key={req.id} />)}
            </List>
        </section>
    </div>
}