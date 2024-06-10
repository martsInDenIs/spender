import List from '@/app/components/List';
import { getEmptyArray } from '@/app/helpers';
import React from 'react';
import Request from './components/Request';
import { getRequests } from '@/app/api/requests/api';

const Page: React.FC = async () => {
    const requests = await getRequests();

    return <section className='bg-4 h-full rounded-md text-white p-4 pt-10 flex flex-col gap-4'>
        <div>
            <h1 className='text-5xl mb-4'>Partners requests</h1>
            <hr />
        </div>
        <List>
            {requests.map((request) => <Request {...request} key={request.id} />)}
        </List>
    </section>
};

export default Page;