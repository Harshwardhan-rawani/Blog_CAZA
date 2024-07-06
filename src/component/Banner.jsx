import React, { useEffect, useState } from 'react'
import photo from "../assets/Banner/banner.jpg"
import { motion, useTransform } from 'framer-motion';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { BiMenu } from 'react-icons/bi';
import "./css/Banner.css"
import { IoCloseSharp } from "react-icons/io5";
function Banner({height}) {
    const [nav,setnav]=useState(false)
    const handlenav = ()=>{
        setnav(!nav)
    }


  return (
    <>
     <div className='w-[100%] lg:h-[100vh] md:h-[70vh] h-[50vh] relative'>

            <div className='w-full h-full absolute top-0'><img src={photo} className='w-full h-full' alt="" /></div>
            <div className='bg-[#0202028b] w-full h-full absolute top-0 '></div>
            <div className='w-full h-full absolute flex justify-center items-end py-8  xl:text-5xl md:text-4xl text-3xl text-white animate_arrow z-30'> <Link to="service" smooth={true} duration={500}><IoArrowDownCircleOutline /></Link></div>
            <div className={`absolute top-0 h-full  overflow-hidden   flex items-center xl:mx-28 lg:mx-20 md:mx-18 mx-10`}>
                <motion.div
                  initial={{opacity:0,translateX:"-100%"}}
                  whileInView={{opacity:1,translateX:"0%"}}
                  transition={{duration:1}}
                >
                    <p className='text-white lg:text-4xl md:text-3xl text-xl  font-bold'>CAPTURE SPLANDID</p>
                    <p className='text-white lg:text-4xl md:text-3xl text-xl  font-bold'>VACATION MEMORIES</p>
                    <p className='lg:text-lg sm:text-md text-sm text-white italic md:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                    <button className='border-2 py-1 px-2 text-white mt-3 md:mt-5 font-bold lg:text-xl md:text-lg text-md hover:border-gray-300 hover:text-gray-300'>Contact Us</button>
                </motion.div>
               
            </div>
            <div className={`${height["y"]>250?"fixed animate z-50 bg-[#000000ed] h-14":"absolute top-0 h-20"} z-50  w-full`}>
            <motion.div
                   initial={{ translateY: '-100%' }}
                   animate={{ translateY: '0%' } }
                   transition={{ duration: 1 , ease:"linear" }}
            className={`h-full w-full  flex items-center justify-between xl:px-28 lg:px-16 md:px-18 px-10 `}>
                    <div className='text-white lg:text-3xl md:text-2xl text-xl  font-bold'>C A Z A</div>
                    <div className={` flex items-center text-white font-bold md:hidden`} onClick={()=>{handlenav()}}><BiMenu className='md:text-4xl sm:text-3xl text-2xl'/></div>
             <ul className='md:flex xl:space-x-16  lg:space-x-12 md:space-x-6 font-bold hidden '>
                        <li className='text-white text-xl cursor-pointer hover:animation_b' > <Link  to='home' smooth={true} duration={500}>Home</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="service" smooth={true} duration={500}>Service</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="about" smooth={true} duration={500}>About us</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                 
                        </ul> 
                         
            </motion.div>
            </div>

 
     </div>

     <div className={`md:hidden fixed z-50 top-0 w-1/2 transition duration-200 ease-linear ${nav?"translate-x-0 opacity-100":" -translate-x-[100%] opacity-0"} translate-y-[${height["y"]}]  h-[100vh] bg-[#000000c8] py-10`}>
                  <div className={`absolute top-7 right-10 text-white text-3xl font-bold`} onClick={()=>{handlenav()}}><IoCloseSharp /></div>
         <ul className={`w-fit mx-auto text-center mt-20 space-y-4 font-bold`}>
                        <li className='text-white text-xl cursor-pointer hover:animation_b' ><Link  to="home" smooth={true} duration={500} onClick={()=>{handlenav()}}>Home</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="service" smooth={true} duration={500} onClick={()=>{handlenav()}}>Service</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="gallery" smooth={true} duration={500} onClick={()=>{handlenav()}}>Gallery</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="blog" smooth={true} duration={500} onClick={()=>{handlenav()}}>Blog</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="about" smooth={true} duration={500} onClick={()=>{handlenav()}}>About us</Link></li>
                        <li className='text-white text-xl cursor-pointer hover:animation_b ' ><Link to="contact" smooth={true} duration={500} onClick={()=>{handlenav()}}>Contact</Link></li>
                 
                        </ul> 
            </div>

    </>
  )
}

export default Banner
