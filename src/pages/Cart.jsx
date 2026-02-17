import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const {cartItems,product,currency,updateQuantity,removeFromCart}=useContext(ShopContext)
  return (
    <div>
      
    </div>
  )
}

export default Cart
