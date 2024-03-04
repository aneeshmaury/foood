import React from 'react'
import { global } from 'styled-jsx/css'


export default function Ourmenu() {
  return (
    <div className='mt-6'>
        <h1 className='text-center text-2xl text-gray-900 cookie-regular'>Our Menu</h1>
<div className= 'grid grid-col-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-4 mt-6'>

<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='h-44' src='pngegg (4).png'/>
 <h1 className='text-xl font-semibold '>Vegetable Curry</h1>
 <p className='text-gray-500 text-center'>A fragrant blend of veggies cooked in spicy curry sauce, perfect with rice or naan.</p>
</div>
<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='w-44' src='pngegg (5).png'/>
 <h1 className='text-xl font-semibold '>Caprese Salad</h1>
 <p className='text-gray-500 text-center'>A refreshing mix of ripe tomatoes, creamy mozzarella, and aromatic basil, drizzled with olive oil and balsamic vinegar.</p>
</div>
<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='h-44 w-51' src='pngegg (6).png'/>
 <h1 className='text-xl font-semibold '>Quinoa Stuffed</h1>
 <p className='text-gray-500 text-center'> Nutritious bell peppers filled with a savory quinoa mixture, baked to perfection for a wholesome meal.</p>
</div>
<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='h-44 w-51' src='pngegg (7).png'/>
 <h1 className='text-xl font-semibold '>Lentil Soup</h1>
 <p className='text-gray-500 text-center'>Comfort in a bowl, lentils simmered with veggies and spices, creating a hearty and satisfying soup.</p>
</div>
<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='h-44 w-51' src='pngegg (8).png'/>
 <h1 className='text-xl font-semibold '>Eggplant</h1>
 <p className='text-gray-500 text-center'>Layers of crispy breaded eggplant slices, tangy marinara sauce, and melted cheese, baked until golden and bubbly.</p>
</div>
<div className='bg-zinc-100 p-6 flex flex-col items-center rounded-3xl'>
 <img className='h-44 w-51' src='pngegg.png'/>
 <h1 className='text-xl font-semibold '>Veggie Stir-Fry</h1>
 <p className='text-gray-500 text-center'>Crisp and colorful vegetables wok-tossed in a flavorful sauce, offering a quick and healthy meal option bursting with flavor.</p>
</div> 
</div>


    </div>
  )
}
