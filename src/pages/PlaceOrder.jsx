import React from 'react'
import Title from '../components/Title'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col s:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]' >
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-120">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name=""  placeholder='Last Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="email" name=""  placeholder='Email address'/>
        </div>
      </div>
    </div>
  )
}
 
export default PlaceOrder
