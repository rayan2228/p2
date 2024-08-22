import React from 'react'
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { useRef } from 'react';


const Home = () => {


  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress} = useScroll({
    target: targetRef
   })

// Define horizontal scroll animations
const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
const x3 = useTransform(scrollYProgress, [0, 1], ['0%', '-42%']);


  // Optional: Smooth out the progress value
  // const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Convert progress to a width percentage for the blue color
    const blueWidth = useTransform(progress, [0, 1], ['0%', '100%']);


  return (
    <div className='py-[100px] bg-black'>
       <div className='max-w-container mx-auto'>
          <div className='flex flex-col'>
             <div className='flex flex-col justify-center items-center text-center text-white mb-[40px]'>
                <h1 className='text-5xl font-bold leading-[60px] capitalize px-[90px]'>We solve technical challenges for your clients <span className='text-purple-600'>Using Hadless shopify</span></h1>
                 <p className='mt-3 text-lg leading-7 max-w-[896px] text-[#e0dede] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto recusandae ex modi. Eveniet quae minima ducimus, illum fuga error quam!.</p>
             </div>
             <div className='flex flex-col gap-y-6 text-white sticky top-[50px] left-0 overflow-hidden'>
             <motion.div className='flex w-[70%] justify-between border-[#fff] border-0 border-b-[1px] pb-4'>
                     <h3 className='w-[20%] font-bold text-xl'>Challenges</h3>
                     <p className='w-[50%] text-start left-7 text-[#e0dede] pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem obcaecati perferendis? Cum mollitia dignissimos corporis dicta? A, vero aut?</p>
                </motion.div>
                <motion.div className='flex w-[70%] ml-[120px] justify-between border-[#fff] border-0 border-b-[1px] pb-4' style={{ x: x1 }}>
                     <h3 className='w-[20%] font-bold text-xl '>Challenges</h3>
                     <p className='w-[50%] text-start left-7 text-[#e0dede] pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem obcaecati perferendis? Cum mollitia dignissimos corporis dicta? A, vero aut?</p>
                </motion.div>
                <motion.div className='flex w-[70%] ml-[240px] justify-between border-[#fff] border-0 border-b-[1px] pb-4'
                  style={{ x: x2 }}>
                     <h3 className='w-[20%] font-bold text-xl '>Challenges</h3>
                     <p className='w-[50%] text-start left-7 text-[#e0dede]] pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem obcaecati perferendis? Cum mollitia dignissimos corporis dicta? A, vero aut?</p>
                </motion.div>
                <motion.div className='flex w-[70%] ml-[360px] justify-between border-[#fff] border-0 border-b-[1px] pb-4'
                   style={{ x: x3 }} 
                 >
                     <h3 className='w-[20%] font-bold text-xl'>Challenges</h3>
                     <p className='w-[50%] text-start left-7 text-[##e0dede] pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem obcaecati perferendis? Cum mollitia dignissimos corporis dicta? A, vero aut?</p>
                </motion.div>

                <motion.div style={{ scaleX: scrollYProgress ,background: `linear-gradient(to right, blue ${blueWidth.get()}, red ${blueWidth.get()})`}}  className='w-[70%] h-[4px] mx-auto mt-[20px] rounded'></motion.div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Home