import React from 'react'
import Image from 'next/image'

const Category = ({name, imgSrc, setCategories}) => {

    const handleCategory = () => {
        setCategories(name)
    }

    

  return (
    <button onClick={handleCategory} value={name} className='items-center w-full px-6'>
        <div className='flex items-center justify-between rounded-lg  hover:shadow-2xl  transform transition duration-300 group hover:scale-110'>
            <Image className='rounded-l-lg' src={imgSrc} alt={name} height={0} width={120} />
            <div className='flex justify-center items-center pr-2'>
            <h3>{name}</h3>
            </div>
        </div>
    </button>
  )
}

export default Category