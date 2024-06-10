import React from 'react';

const Layout: React.FC<Readonly<{
    children: React.ReactNode
}>> = ({
    children
}) => {
        return <div className='flex justify-center mt-20'>{children}</div>;
    };

export default Layout;