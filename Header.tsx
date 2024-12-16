
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap   bg-[#F5F5F5] flex-col md:flex-row items-center w-[1440px] h-[36px] ">

    <a className="flex title-font font-medium  ml-[48px] items-center text-[#111111]
 mb-4 md:mb-0">
      <img src="l1.svg" alt="" />
    </a>
    <nav className="md:ml-auto flex  gap-4 flex-wrap ml-28 items-center text-base justify-center">
    <Link href="./Find a store" className=' text-[#111111]
'>Find a Store</Link>
<div className='  w-[3px] h-[14px] bg-[#111111]'></div>
      <Link href="./Help" className=' text-[#111111]
'>Help</Link>
<div className='  w-[3px] h-[14px] bg-[#111111]'></div>

<Link href="./Join Us" className=' text-[#111111]
'>Join us</Link>
<div className='  w-[3px] h-[14px] bg-[#111111]'></div>
<Link href="./Find a store" className=' text-[#111111]
'>Sign In</Link>
    </nav>
    
  </div>
</header>

    </div>
  )
}

export default Header