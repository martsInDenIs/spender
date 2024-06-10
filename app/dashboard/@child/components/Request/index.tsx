import Button from '@/app/components/Button';
import React, { useMemo } from 'react';

type Props = {
    /** TODO: Make enum */
    type: "accepted" | "rejected"
}

const Request: React.FC<Props> = ({ type }) => {
    const { message, buttons } = useMemo(() => {
        if (type === 'accepted') {
            return {
                message: "Accepted request!",
                buttons: [<Button className='bg-green-600 hover:bg-green-500 w-full' key={'buy'}>Buy it!</Button>]
            }
        }

        return {
            message: "Rejected request!",
            buttons: [<Button className='bg-slate-500 hover:bg-slate-400' key="tryAgain">Ask again :( </Button>, <Button className='bg-red-700 hover:bg-red-600' key="stillBuy">Still buy!</Button>]
        }
    }, [type]);

    return <div className='bg-2 p-2 rounded-md'>
        <div>
            <p className='text-center text-xl mb-1'>
                {message}
            </p>
            <hr />
        </div>
        <div className='flex items-center justify-center mt-2 gap-2 [&>button]:flex-1'>
            {buttons}
        </div>
    </div>
};

export default Request;