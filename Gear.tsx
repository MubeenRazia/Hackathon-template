import React from 'react'

const Gear = () => {
  return (
    <div>
        
            <div>
                <section >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div >
                <div className="w-24 h-full " />
              </div>
              <div className="flex flex-wrap  w-[1440px] h-[52px] sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Gear Up
                </h1>
               
              </div>
            </div>
            <div className="flex sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3  sm:mb-0 mb-6">
                <div className="rounded-lg w-[300px] h-[300px]">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="g1svg.svg"
                  />
                </div>
                <div className='w-[424px] '>
                <div className='flex gap-10'>
                <h1 className="text-xl font-medium title-font text-gray-900 mt-5">
                Nike Dri-FIT ADV TechKnit Ultra  ₹ 3 895
                </h1>
               
                </div>
                <p className="text-base leading-relaxed mt-2">
                Men's Short-Sleeve<br/> Running Top
                </p></div>
                
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg  w-[300px] h-[300px] overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="g2.svg"
                  />
                </div>
                <h2 className="text-xl flex gap-12 font-medium title-font text-gray-900 mt-5">
                Nike Dri-FIT Challenger    ₹ 2 495
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Men's 18cm (approx.) 2-in-1<br/> Versatile Shorts
                </p>
                
              </div>
              <div className="p-2 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg w-[300px] h-[300px] overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="g3.svg"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Nike Dri-FIT ADV Run Division <br/> ₹ 5 295
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Women's Long-Sleeve Running Top
                </p>
                
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg w-[300px] h-[300px] overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="g4.svg"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Nike Fast  ₹ 3 795
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Women's Mid-Rise 7/8 Running <br/>Leggings with Pockets
                </p>
                
              </div>
            </div>
          </div>
        </section>
        
            </div>
          )
        
        

    </div>
  )
}

export default Gear