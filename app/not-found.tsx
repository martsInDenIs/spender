import React from 'react';
import { redirect } from 'next/navigation';

const NotFoundPage: React.FC = () => {
    redirect('/dashboard');

    return null;
};

export default NotFoundPage;