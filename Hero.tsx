import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="text-center items-center justify-center w-full bg-[#F5F5F5] mx-auto  mt-[14px]
] 
h-[58px] lg:w-2/3 ">
      <p className="title-font sm:text-4xl font-bold text-gray-900">
      Hello Nike App
      </p>
      <p className="  leading-relaxed">
      Download the app to access everything Nike. <u>Get Your Great</u>
      </p>
      
    </div>
  <div className="container mx-auto flex 

px-2 py-24 items-center justify-center  mb-30 w-[1344px] h-[700px] flex-col">
    <img
      className="lg:w-full md:w-2/6 
h-full rounded"
      alt="hero"
      src="s1.svg"
    />
    
  </div>
</section>

    </div>
  )
}

export default Hero