import React from 'react'

const Button = ({children}) => {
  return (
    <div className='text-white bg-blue-700 rounded py-[13px] px-[34px] w-[170px] h-[50px]'>{children}</div>
  )
}

export default Button