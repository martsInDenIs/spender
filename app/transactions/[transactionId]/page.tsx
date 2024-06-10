import React from 'react';

type Props = {
    params: {
        transactionId: string;
    }
}

const Page: React.FC<Props> = ({ params: { transactionId } }) => {
    return <div>Transaction page: {transactionId}</div>
}

export default Page;