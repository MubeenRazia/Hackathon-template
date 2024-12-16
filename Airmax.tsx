import React from 'react'

const Airmax = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div >
        <div className="w-24 h-full " />
      </div>
      <div className="flex flex-wrap  w-[1440px] h-[52px] sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
        Best of Air Max
        </h1>
       
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="a1.svg"
          />
        </div>
        <div className='w-[424px] '>
        <div className='flex gap-14'>
        <h1 className="text-xl font-medium title-font text-gray-900 mt-5">
        Nike Air Max Pulse $13.99
        </h1>
       
        </div>
        <p className="text-base leading-relaxed mt-2">
        Women's Shoes
        </p></div>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="a2.svg"
          />
        </div>
        <h2 className="text-xl flex gap-12 font-medium title-font text-gray-900 mt-5">
        Nike Air Max Pulse    ₹ 13 995
        </h2>
        <p className="text-base leading-relaxed mt-2">
        Men's Shoes
        </p>
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src="a3.svg"
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Nike Air Max 97 SE   ₹ 16 995
        </h2>
        <p className="text-base leading-relaxed mt-2">
        Men's Shoes
        </p>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Airmax