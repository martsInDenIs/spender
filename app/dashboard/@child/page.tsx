import List from '@/app/components/List';
import { getEmptyArray } from '@/app/helpers';
import React from 'react';
import Request from '@/app/dashboard/@child/components/Request';

const Page: React.FC = () => {
    return <div className='flex flex-col h-full gap-3'>
        <section className='bg-4 h-40 rounded-md text-white p-4 flex flex-col gap-4 flex-1'>
            <div>
                <h2 className='text-3xl mb-2'>Accepted requests</h2>
                <hr />
            </div>
            <List>
                {getEmptyArray(15).map((_, key) => <Request type='accepted' key={key} />)}
            </List>
        </section>
        <section className='bg-4 h-40 rounded-md text-white p-4 flex flex-col gap-4 flex-1'>
            <div>
                <h2 className='text-3xl mb-2'>Rejected requests</h2>
                <hr />
            </div>
            <List>
                {getEmptyArray(15).map((_, key) => <Request type='rejected' key={key} />)}
            </List>
        </section>
    </div>;
};

export default Page;