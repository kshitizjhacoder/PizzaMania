import React from 'react'
import { Link } from 'react-router-dom';
import {easeIn, motion, transform } from 'framer-motion';
function Home() {

   
  return (
    <motion.div className='p-4 mt-4 w-full flex justify-center align-center'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.5,duration:3,ease:"linear"}}
    >
        <div className="w-4/5 ">
            <motion.h2 animate={{scale:1.2}}
                    transition={{ease:"linear"  ,duration:0.5}}
            className='p-4 m-12 text-[2rem] flex justify-center content-end text-orange-50	'>Welcome Foodie</motion.h2>
            <Link to='/Base'>
            <motion.button whileHover={{scale:1.2}}
                    transition={{duration:0.5}}
                    
            className='bg-orange-50 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-4 border-orange-300 hover:border-blue-500 rounded-lg'>Create Your Magic</motion.button>
            </Link>
        </div>
    </motion.div>
  )
}

export default Home;