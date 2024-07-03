import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Nisp = () => {
  return (
    <section className='w-full h-screen'>
    <Navbar/>
    <Image src='/images/startup.jpeg' alt='img' width={1800} height={100} className='w-full' />
    <h1 className='absolute top-[40%] left-[10%] text-6xl w-[80%] text-center font-bold leading-[4.5rem] text-white'>NATIONAL INNOVATION AND STARTUP POLICY</h1>
    </section>
  )
}

export default Nisp