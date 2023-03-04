import React from 'react'
import { useEffect, useState } from 'react'
import getData from '@/services/getCategories'
import Category from '@/components/Category'
import DishCard from './DishCard';


const Menu = ({addToCart}) => {
    const [data, setData] = useState('')
    
    const [categories, setCategories] = useState('')

    const fetchData = async () => {
        const response  = await getData()
        setData(response)
    }

   

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div className='flex h-full'>
        
        <div className="flex flex-col w-1/4 h-full items-center gap-y-8 pb-4 border-r-4 border-r-[#002F35]">
            <h1 className="font-bold font-mohr text-5xl text-center pt-10  ">Categorias</h1>
            {data.length > 0 ? (
                data.map( data => (
                    data.nombre === "PLATOS FUERTES" ? "" :
                    <Category key={data.id} name={data.nombre} imgSrc={data.imagenes.normal} cat={categories} setCategories={setCategories}/>
                ))
            ) : (
                <h1>loading...</h1>
            )
            }
        </div>
        <div className="flex flex-col w-full h-full pt-36">
            <h1 className="font-bold font-mohr text-5xl pl-10 ">Menu's</h1>
            <div className="grid grid-cols-3 gap-4 px-4 w-full h-full ">
            {data.length > 0 ? (
                data.map( data => ( 
                    data.nombre === categories ? (data.menus.map( menu => (
                         <DishCard key={menu.id} dishName={menu.nombre} dishImg={menu.imagenes.normal || menu.imagenes.unavailable} dishDescription={menu.descripcion} dishPrice={menu.precio} addToCart={addToCart} menu={menu}/> 
                    ))) : ("")
                ))
            ) : <h1>nothing to show</h1>
            }                 
            </div>
        </div>
    </div>
  )
}

export default Menu