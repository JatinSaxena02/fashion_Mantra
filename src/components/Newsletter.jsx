import { Send } from '@material-ui/icons'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-style flex justify-center items-center h-[350px] w-[100%] flex-col bg-purple-300'>
      <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
      <h2 className='text-[20px] mt-2'>
        Always in touch with us, for your favourite products
      </h2>
      <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#ccc] rounded-[5px] overflow-hidden
      '>
        <input type="email" placeholder='email' className='outline-none border-none p-[15px] flex-[6]'/>
        <button className='bg-green-600 h-[100%] flex-1'><Send className='text-white'/></button>
      </div>
    </div>
  )
}

export default Newsletter
