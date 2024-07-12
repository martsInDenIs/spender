import React, { InputHTMLAttributes, forwardRef } from 'react';

type CheckboxProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> & {
    label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }, ref) => {
    return <label className='flex gap-2 select-none text-lg'>
        <input ref={ref} {...props} type='radio' />
        {label}
    </label>
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;