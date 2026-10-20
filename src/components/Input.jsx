import React, { useId } from 'react'

function Input({
    icon,
    type,
    className,
    ref,
     ...props
    }) {
        // const id = useId() yo dina try garxu ekxhoti
  return (
    <div className='relative'>
      {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50">
        {icon}
        </span>}
      <input type={type}
      className={`w-full rounded-md border border-gray-200 bg-white py-2.5 pr-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 pl-10 ${className}`}
      ref={ref}
      {...props}   
      
      />
    </div>
  )
}

export default Input
