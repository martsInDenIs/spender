import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = {
    className?: string;
}

const List: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return <div className={classNames('flex flex-col gap-2 text-white h-full overflow-y-scroll px-5 py-2 rounded', className)}>
        {children}
    </div>
}

export default List;