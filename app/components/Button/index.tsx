import classNames from 'classnames';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, className, ...props }) => {
    return <button className={classNames('px-4 rounded-md transition-colors', className)} {...props}>{children}</button>;
}

export default Button;