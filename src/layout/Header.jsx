import React, { useState } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import img1 from '../assets/images/cocoon-spread-1.webp'
import img2 from '../assets/images/cocoon-spread-2.webp'
import Marquee from "react-fast-marquee";
import useColorChange from '../hooks/useColorChange';

const Header = () => {

  const[topbarShow, setTopberShow] = useState(false)

useColorChange()
  return (
    <header className='fixed top-0 left-0 z-50 w-full py-5 bg-white'>
        <div className='mx-auto max-w-container'>
            <div className='flex items-center justify-between'>
                <div className='w-1/5'>
                   <h3 className='text-3xl font-bold text-purple-800'>Next Js</h3>
                </div>
                <div className='w-3/5'>
                    <div className='flex items-center justify-center'>
                      <div className='flex items-center justify-between text-xl gap-x-8 '>
                        <div className='flex items-center justify-between uppercase gap-x-2'>
                          <span className='text-2xl font-bold'><IoArrowForwardCircleOutline /></span>
                            <p className='text-[20px] font-semibold leading-7'>Start A Project</p>
                        </div>
                        <div onClick={()=>setTopberShow(!topbarShow)}  className='flex items-center justify-between text-xl uppercase transition-transform cursor-pointer gap-x-2 group'>
                            <span className='text-black w-7 h-7 rounded-full flex items-center justify-center bg-[#bbb8bb]'><FaBars className='text-base'/></span>
                            <p className='relative font-semibold leading-7 text-black'>
                                    Menu
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                            </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='w-1/5'>
                <div className='relative flex flex-col items-center justify-between gap-y-5'>
                        <div className='bg-[#c5c4c4] w-[220px] h-[1px]'></div>
                           <Marquee>
                            <div className='flex items-center justify-between gap-x-6'>
                                <p className='font-bold  px-8 text-[18px]  leading-normal relative after:absolute after:left-[-8px] after:top-[50%] after:translate-y-[-50%] after:w-4 after:h-4 after:bg-purple-500 after:content-[" "] after:rounded-full'>Discovery Call</p>
                            </div>
                           </Marquee>
                        <div className='bg-[#c5c4c4] w-[220px] h-[1px]'></div>
                      </div>
                </div>
            </div>
        </div>
        <div className={`w-full bg-white relative duration-900 transition-all ease-linear z-10 ${topbarShow ? 'top-0 block transition-all ease-linear duration-900' : "-top-[700px] hidden transition-all ease-linear duration-900"}`}>
          <div className='mx-auto max-w-container'>
             <div className='relative w-full pt-[80px] pb-[30px] mt-6 flex flex-col sm:flex-row items-start sm:items-end transition-all ease-linear justify-between   border-[#333232] border-0 border-b-[1px'>
               <ul className='flex flex-col items-start gap-4'>
                <li>
                  <Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>about</Link>
                </li>
                  <li>
                    <Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Insights</Link>
                  </li>
                    <li>
                      <Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>contact</Link>
                    </li>
               </ul>
                 <div className='mb-[-25px] max-w-[600px] relative'>
                  <img src={img1} alt="image" className='relative top-[-54px] left-[-90px]' width={250} height={350}/>
                  <img src={img2} alt="image" className='absolute bottom-[12px] right-[-100px]' width={250} height={350}/>
                </div>
                <ul className='flex flex-col items-start gap-4 sm:items-end'>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Shopify</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Composable Commerce</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Headless Commerce</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Product Configurators</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Headless CMS</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Software Development</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>PWAS</Link></li>
                           <li><Link href="/about" className='text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Jamstack</Link></li>
                           <li><Link href="/about" className='py-2 text-xl leading-none capitalize sm:text-2xl md:text-3xl lg:text-2xl'>Drupal</Link></li>
                       </ul>
             </div>
          </div>
        </div>
    </header>
  )
}

export default Header