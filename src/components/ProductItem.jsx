import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)
  return (
    <Link 
      className='bg-white text-black rounded-2xl overflow-hidden shadow-sm 
      hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer'
      to={`/product/${id}`}
    >
      
      {/* Image Section */}
      <div className='overflow-hidden'>
        <img 
          className='w-full h-60 object-cover rounded-2xl 
          hover:scale-110 transition-transform duration-500' 
          src={image[0]} 
          alt="" 
        />
      </div>

      {/* Content */}
      <div className='p-4'>
        <p className='text-sm font-medium text-gray-800 truncate'>
          {name}
        </p>

        <p className='mt-2 text-base font-semibold text-black'>
          {currency} {price}
        </p>
      </div>

    </Link>
  )
}

export default ProductItem
