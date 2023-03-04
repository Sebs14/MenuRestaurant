import React from 'react'
import Image from 'next/image'
const CartCard = ({dishImg, cart, dishName, dishPrice, removeFromCart}) => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
            <Image src={dishImg} alt={dishName} height={100} width={100}/>
            <p className='font-semibold text-right'>{dishName}</p>
        </div>
        <div className="flex items-center gap-x-5 pr-2">
            <p className='font-semibold text-right pr-2'>Q{dishPrice}</p>
            <button onClick={() => removeFromCart(cart)} className="text-2xl font-bold hover:text-white">x</button>
        </div>
    </div>
  )
}

export default CartCard