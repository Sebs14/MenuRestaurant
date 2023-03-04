import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import CartCard from '@/components/CartCard'

const Hero = ({cart, quantity, removeFromCart}) => {
  const [cartToggle, isCartToggle] = useState(false)
  const handleCart = () => {
    isCartToggle(!cartToggle)
  }

  console.log({cart})

  return (
    <div className="relative w-full">


      <nav className="fixed z-10 w-full bg-[#002F35] md:absolute ">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <img
                  src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png"
                  className="w-12"
                  alt="tailus logo"
                  width="144"
                  height="133"
                />
                <span className="text-2xl font-bold text-[#FFA323]">
                  Smart <span className="text-[#FF6337]">Restaurant</span>
                </span>
              </Link>

              <button
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-[#FFA323]  lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <button onClick={() => handleCart()} className="block md:px-4 transition text-2xl hover:text-yellow-700">
                      <span className="font-bold">Carrito ({quantity})</span> 
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
     <Transition show={cartToggle} className="absolute z-50 bg-[#FF6337]/90 right-0 w-1/4 flex flex-col h-screen"
     enter="transition ease-in-out duration-300"
     enterFrom="translate-x-full"
     enterTo="translate-x-0 "
     leave="transition ease-in-out duration-300"
     leaveFrom=" translate-x-0"
     leaveTo=" translate-x-full">
 
        <button onClick={() => handleCart()} className="block pt-6 transition text-2xl hover:text-yellow-700">
          <span className="font-bold">Carrito ({quantity})</span> 
        </button>
        <div className="flex flex-col w-full bg-white/50 h-full gap-y-5">
        {
          cart.map( cart => (
            <CartCard key={cart.id} cart={cart} dishPrice={cart.precio} dishImg={cart.imagenes.normal} removeFromCart={removeFromCart}  dishName={cart.nombre}/>
          ))
        }
        </div>

     </Transition>
      
    
      <div className="relative bg-[#004A2F]">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <div className=" absolute bg-[#002F35] border-4 border-[#FFA323] rounded-2xl w-full h-32 -left-20 top-28 ">
                <div></div>
              </div>
              <h1 className="font-bold text-4xl text-[#FF6337] md:text-5xl lg:w-10/12 relative">
                Tus platillos favoritos al alcance de tu dedo!
              </h1>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
