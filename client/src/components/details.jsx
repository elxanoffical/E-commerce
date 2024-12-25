import React from 'react'

const Details = () => {
  return (
    <div className='border flex flex-col gap-14'>
        <div className='flex flex-col gap-6'>
            <h3 className='font-semibold'>Detail</h3>
            <p className='text-neutral-600 leading-8 font-normal'>Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men.
             <span className='block'>Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must- <span className='block'>have addition to your collection.</span></span>
            The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping <span className='block'>it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.</span></p>
        </div>
        <div className=''>
            <ul className='flex flex-col gap-2 text-neutral-600 font-normal'>
                <li>Premium Quality</li>
                <li>Versatile Wardrobe Staple</li>
                <li>Available in Various Sizes</li>
                <li>Tailored Fit</li>
            </ul>
        </div>
    </div>
  )
}

export default Details