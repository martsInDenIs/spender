import classNames from 'classnames';
import React, { PropsWithChildren, Children, ReactNode } from 'react';

type Props = {
    className?: string;
    listEmptyPlaceholder?: ReactNode
}

const List: React.FC<PropsWithChildren<Props>> = ({ children, className, listEmptyPlaceholder }) => {
    return <div className={classNames('flex flex-col gap-2 text-white h-full overflow-y-scroll px-5 py-2 rounded', className)}>
        {!children || !Children.count(children) ? listEmptyPlaceholder : children}
    </div>
}

export default List;