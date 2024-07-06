import React from 'react'
import { motion, useTransform } from 'framer-motion';
import { FaCameraRetro } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
function Service() {
  return (
   <>
   <div className='px-10 py-10 relative'>
    {/* Header */}
    <div className='w-fit mx-auto flex items-center space-x-3 h-10 overflow-hidden'>
        <motion.div
                  initial={{translateX:"-100%"}}
                  whileInView={{translateX:"0%"}}
                  transition={{duration:0.5}}
                  
        className='h-[3px] bg-white xl:w-20 lg:w-16 w-14'></motion.div>
        <motion.div
           initial={{translateY:"100%"}}
           whileInView={{translateY:"0%"}}
           transition={{duration:0.5}}
           
        className='xl:text-2xl  text-xl font-bold text-white'>NOW WE WORK</motion.div>
        <motion.div
              initial={{translateX:"100%"}}
              whileInView={{translateX:"0%"}}
              transition={{duration:0.5}}
              
        className='h-[3px] bg-white xl:w-20 lg:w-16 w-14'></motion.div>
    </div>
   </div>
 {/* end */}
 <div className='xl:px-28 lg:px-20 md:px-16 px-10 w-fit'>
   <motion.div
       initial={{translateY:"100%"}}
       whileInView={{translateY:"0%"}}
       transition={{duration:0.5}}
       viewport={{once:true}}
   className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Minima, aut? voluptates est nihil perspiciatis 
     nesciunt ut molestiae quisquam repudiandae blanditiis!</motion.div>
   </div>
   
   <div className='xl:px-28 lg:px-20 md:px-16 px-10 py-10 h-fit overflow-hidden'>
    <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-10 items-center lg:justify-center lg:space-x-20'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
         className='group'
        >
            <div className='rounded-full border-2 w-28 h-28 border-green-500 group-hover:border-white p-5'>
            <BsCardText className='text-green-500 group-hover:text-white w-full h-full'/>
            </div>

            </motion.div>
        <div className='h-[2px] w-44 bg-green-500 md:block hidden'></div>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
         className='group'
        >
            <div className='rounded-full border-2 w-28 h-28 border-green-500 group-hover:border-white p-5'>
            <FaCameraRetro className='text-green-500 group-hover:text-white w-full h-full'/>
            </div>

            </motion.div>
         <div className='h-[2px] w-44 bg-green-500 md:block hidden'></div>
         <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
         className='group'
        >
            <div className='rounded-full border-2 w-28 h-28 border-green-500 group-hover:border-white p-5'>
            <FaCreditCard className='text-green-500 group-hover:text-white w-full h-full'/>
            </div>

            </motion.div>
    </div>
   </div>
   <div className='xl:px-10 lg:px-20 md:px-16 px-10 pb-10 h-fit overflow-hidden'>
    <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center lg:justify-center lg:space-x-20 group'>
    <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        className='flex flex-col items-center'>
            <div className='text-white'>document</div>
            <div className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum architecto illum vel sed doloribus exercitationem deleniti est aspernatur eius.</div>
        </motion.div>
       
            <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        className='flex flex-col items-center'>
            <div className='text-white'>document</div>
            <div className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum architecto illum vel sed doloribus exercitationem deleniti est aspernatur eius.</div>
        </motion.div>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        className='flex flex-col items-center'>
            <div className='text-white'>document</div>
            <div className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum architecto illum vel sed doloribus exercitationem deleniti est aspernatur eius.</div>
        </motion.div>
    </div>
   </div>
   </>
  )
}

export default Service
