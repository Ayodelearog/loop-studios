import React from 'react'
import Image from 'next/image'

function Leader() {
  return (
    <div className='w-full my-[5rem] px-8 font-josefin lg:px-[10%] relative'>
        <div className='relative my-6 p-6 h-[200px] lg:hidden '>
            <Image src='/images/mobile/image-interactive.jpg' sizes=' 100vw' fill alt='vr man' />
        </div>

        <div className='relative my-6 p-6 h-[400px] hidden lg:block lg:w-[60%]  '>
            <Image src='/images/desktop/image-interactive.jpg' sizes='(max-width: 1440px) 60vw, 100vw' fill alt='vr man'  />
        </div>

        <div className='text-center lg:absolute lg:bottom-0 lg:bg-white lg:w-[40%] lg:right-0 lg:mr-[10%] lg:pt-[3.5rem] lg:pl-[3rem]'>
            <h3 className='text-2xl leading-6 lg:text-left lg:text-5xl'>THE LEADER IN INTERACTIVE VR</h3>
            <p className='mt-4 text-primary-very-dark-gray mx-2 font-semibold lg:text-left'>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning projects have been transforming business through digital experiences that bind to their brand.
            </p>
        </div>
    </div>
  )
}

export default Leader