import React from 'react'

    function Button({
  children,
  type = "button",
  className = "",
  ref,
  ...props
}) {
  return (
    <button
      type={type}

      ref={ref}
      className={`px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
