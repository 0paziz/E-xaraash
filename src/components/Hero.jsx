import React from 'react'

export default function Hero() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-6  flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-3xl md:text-4xl mb-4 leading-tight">
            Shop Quality Products <br /> At The Best Prices
          </h1>

          <button className="bg-blue-500 mb-2 hover:bg-blue-600 transition text-white font-bold px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/w-bags.png"
            alt="Shopping bags"
            className="max-w-sm md:max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  )
}
