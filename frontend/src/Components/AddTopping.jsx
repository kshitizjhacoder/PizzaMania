import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import bread1 from '../assets/breads/Bread_1.png'
import bread2 from '../assets/breads/Bread_2.png'
import bread3 from '../assets/breads/Bread_3.png'
import bread4 from '../assets/breads/Bread_4.png'
import bread5 from '../assets/breads/Bread_5.png'
import basil from '../assets/Basil_1.png'
import greenpepper from '../assets/GreenSweetPepper.png'
import cheese from '../assets/cheese.png'

//for the image conditional rendering
function imagesrender(source) {
  return (
    <div>
      <motion.img
        initial={{scale:0.5,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[15%] top-[15%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[8%] top-[18%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[6%] top-[30%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[24%] top-[35%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[24%] top-[20%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[24%] bottom-[50%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[15%] bottom-[40%]' />
      <motion.img
      initial={{scale:0.5,opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.5}}
        src={source} className='w-[4%] absolute z-2 right-[6%] bottom-[50%]' />
    </div>
  );
}

const AddTopping = ({ addtopping, pizza }) => {
  let bread;
  if (pizza.base === "Stuffed Crust.")
    bread = bread1;
  else if (pizza.base === 'Cracker Crust.')
    bread = bread2;
  else if (pizza.base === 'Flat Bread Crust.')
    bread = bread3;
  else if (pizza.base === 'Thin Crust.')
    bread = bread4;
  else if (pizza.base === 'Cheese Crust Pizza.')
    bread = bread5;
  let toppingoption = ["Pepperoni", "Mushroom", "Extra cheese", "Sausage", "Onion", "Black olives", "Green pepper", "Fresh garlic", "Tomato", "Fresh basil"];
  return (
    <>
      <motion.div className='container mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className='text-orange-50 text-lg'>Choose Your Toppings ^_^</h1>
        <div className="w-full mt-4 flex justify-between relative">

          <ul className='flex flex-col justify-center content-center flex-nowrap'>
            {toppingoption.map(topping => {
              let spanClass = pizza.toppings.includes(topping);
              spanClass = (spanClass) ? 'block p-2 text-xl text-orange-50 border-solid border-[0.5px] border-orange-200' : 'block p-2 text-lg text-orange-50 border-none ease-in duration-300 ';
              return (
                <li
                  key={topping}
                  onClick={() => addtopping(topping)}
                >
                  <motion.span className={spanClass}
                    whileHover={{ duration: 0.5, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  ><div className='cursor-pointer'>{topping}</div></motion.span></li>
              )
            })}
          </ul>
          <div className='mt-4 w-2/6 h-[40%]'>
            {pizza.toppings.includes("Fresh basil") &&
              <div>
              <motion.img
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5}}
                src={basil} className='w-[4%] absolute z-2 right-[16%] top-[30%]' />
                <motion.img
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5}}
                src={basil} className='w-[4%] absolute z-2 right-[12%] top-[32%]' />
                <motion.img
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5}}
                src={basil} className='w-[4%] absolute z-2 right-[20%] top-[34%]' />
                <motion.img
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5}}
                src={basil} className='w-[4%] absolute z-2 right-[14%] top-[42%]' />
              </div>
            }
            {pizza.toppings.includes("Green pepper") &&
              imagesrender(greenpepper)
            }
            {pizza.toppings.includes("Extra cheese") &&
              <motion.img
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.5}}
                src={cheese} className='w-[4%] absolute z-2 right-[15%] top-[33%]' />
            }
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={bread} alt="" className='w-full relative z-[-5]' /></div>
        </div>
      </motion.div>
      {pizza.toppings &&
        <motion.div className='w-[6rem] bg-transparent text-xl font-bold py-2 px-4 border-4 border-orange-300 rounded-xl hover:bg-grey-200'
          initial={{ x: '-100vw' }}
          animate={{ x: 550 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", duration: 0.8 }}
        ><Link to='/Order'>
            <button>Next</button>

          </Link></motion.div>
      }
    </>
  )
}

export default AddTopping