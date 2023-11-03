import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from "../assets/profile-image.png";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens=useMediaQuery(('min-width:1060px'));
  return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 p-10'>
<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
   {isAboveMediumScreens ?(
    <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full beofre:max-w-[400px]
    before:h-full beofre:border-2 before:border-blue before:z-[-1]'>
        <img alt="profile" className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
        src={profile}/>
    </div>
   ):(
    <div></div>
   )}
</div>
    </section>
  )
}

export default Landing;