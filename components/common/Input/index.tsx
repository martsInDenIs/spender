import React, { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
    return <label className="flex flex-col gap-1">
        {label}
        <input ref={ref} type='text' className='w-full bg-2 text-white p-1' {...props} />
    </label>
});

Input.displayName = 'Input';

export default Input;