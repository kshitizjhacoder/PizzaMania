import React from 'react'
import Pizza from '../assets/pizza.svg'
function Header() {
  return (
    <div>
        <div className='w-[20rem] flex justify-evenly content-center'>
            <img src={Pizza} alt="" className='w-[6rem]'/>
            <h2 className='p-4 mt-12 text-xl flex justify-center content-end text-orange-50	'>Make Your Pizza</h2>
        </div>
        <hr className='border-orange-50' />
    </div>
  )
}

export default Header;