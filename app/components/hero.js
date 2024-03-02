import React from 'react'

export default function Hero() {
  return (
    <div className='mt-11 md:flex items-center md:justify-around'>
<div className='flex flex-col items-center '>
    <h1 className="text-6xl font-bold w-54 text-center md:text-[100px] md:leading-[90px] md:w-[550px]">Welcome to a taste of home..</h1>
    <p className='text-[10px] mt-6 w-[260px] md:font-bold md:text-[12px] md:w-[400px]'>Indulge in our flavors, Where 
    each tells a story, inviting you to savor every moment
     of culinary delight..</p>
    <button className="bg-yellow-500 w-32 py-2 mt-6">our menu</button>
</div>
<div className="flex justify-center mt-11">
<img className='w-44 h-44 md:w-[400px] md:h-[400px]' src='./pngegg.png'/>
</div>

    </div>
  )
}
