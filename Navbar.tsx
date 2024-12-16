import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <img src="l2.svg" alt="" />
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">New $ Featured</a>
      <a className="mr-5 hover:text-gray-900">Men</a>
      <a className="mr-5 hover:text-gray-900">Women</a>
      <a className="mr-5 hover:text-gray-900">Kids</a>
      <a className="mr-5 hover:text-gray-900">Sales</a>
      <a className="mr-5 hover:text-gray-900">SNKRS</a>
    
    </nav>
    <button className="inline-flex items-center gap-2 bg-gray-100 border-0 py-1 px-12 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      
    <img src="n0).svg" alt=""  className=''/>
    Search
      
    </button>
    <div className="flex gap-4">
    <img src="n1.svg" alt=""  className='flex gap-2'/>
    <img src="n2.svg" alt="" />
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar