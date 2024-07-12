import React from 'react';
import List from '@/components/common/List';
import { getRequests } from '@/lib/api/requests/api';
import CreateRequest from '@/components/dashboard/CreateRequest';
import AcceptedRequest from '@/components/dashboard/Request/AcceptedRequest';
import RejectedRequest from '@/components/dashboard/Request/RejectedRequest';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
    const t = await getTranslations();

    const acceptedRequests = await getRequests({ conditions: 'decided=true&allowed=true&executed=false' });
    const rejectedRequests = await getRequests({ conditions: 'decided=true&allowed=false&executed=false' });

    return <div className='flex flex-col h-full gap-3'>
        <section className='bg-4 h-40 rounded-md text-white p-4 flex flex-col gap-4 flex-1'>
            <div>
                <div className='flex flex-row justify-between pb-2'>
                    <h2 className='text-3xl mb-2'>{t('dashboard.partner.requests.accepted')}</h2>
                    <CreateRequest />
                </div>
                <hr />
            </div>
            {<List listEmptyPlaceholder={<p className='empty-list-placeholder'>{t('components.list.emptyPlaceholder')}</p>}>
                {acceptedRequests?.map((req) => <AcceptedRequest {...req} key={req.id} />)}
            </List>}
        </section>
        <section className='bg-4 h-40 rounded-md text-white p-4 flex flex-col gap-4 flex-1'>
            <div>
                <h2 className='text-3xl mb-2'>{t('dashboard.partner.requests.rejected')}</h2>
                <hr />
            </div>
            <List listEmptyPlaceholder={<p className='empty-list-placeholder'>{t('components.list.emptyPlaceholder')}</p>}>
                {rejectedRequests?.map((req) => <RejectedRequest {...req} key={req.id} />)}
            </List>
        </section>
    </div>
};