import Image from 'next/image'
import React from 'react'

const DishCard = ({dishName, dishImg, dishDescription, dishPrice, addToCart, menu}) => {
  return (
    <div className='relative flex flex-col max-w-[350px] pb-4 rounded-xl'>
        <Image className='rounded-t-xl' src={dishImg} alt={dishName} height={350} width={350}/>
       { dishName === dishDescription ? <h1 className='font-bold text-lg pb-10'>{dishName}</h1> :
        <div className="pb-6">
            <h1 className='font-bold text-lg'>{dishName}</h1>
            <p>{dishDescription}</p>
        </div>
        }
        <div className='absolute bottom-0 rounded-bl-lg hover:-translate-y-1 transition-all bg-[#FFA323] p-1'>
            <button onClick={() => addToCart(menu)}>
                Añadir al carrito
            </button>
        </div>
        <div className='absolute right-0 bottom-0 bg-[#FFA323] p-1 rounded-lg'>
            <p className='font-semibold text-right '>Q{dishPrice}</p>
        </div>
    </div>
  )
}

export default DishCard