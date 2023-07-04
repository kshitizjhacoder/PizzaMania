import React, { useState } from 'react'
import { addScaleCorrector, animate, animateValue, motion, transform } from 'framer-motion';
import { Link } from 'react-router-dom';
import bread1 from '../assets/breads/Bread_1.png'
import bread2 from '../assets/breads/Bread_2.png'
import bread3 from '../assets/breads/Bread_3.png'
import bread4 from '../assets/breads/Bread_4.png'
import bread5 from '../assets/breads/Bread_5.png'
let bread = bread2;
function Base({addBase,pizza}) {
    
    const bases = ["Stuffed Crust.",
        "Cracker Crust.",
        "Flat Bread Crust.",
        "Thin Crust.",
        "Cheese Crust Pizza.",
        "Thick Crust Pizza."];
    const [pizzaimg,setpizzaimg] = useState({
        bread1:false,
        bread2:false,
        bread3:false,
        bread4:false,
        bread5:false
    });
    
    const onpizzaclicked = (base)=>{
        addBase(base);
        console.log(base +" "+ typeof(base));
        if(base === "Stuffed Crust.")
            bread = bread1;
        else if(base === 'Cracker Crust.')
            bread=bread2;
        else if(base === 'Flat Bread Crust.')
            bread = bread3;
        else if(base === 'Thin Crust.')
            bread = bread4;
        else if(base === 'Cheese Crust Pizza.')
            bread = bread5;
        console.log(bread);

    }
  return (

    <motion.div className='container mt-8'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    >
        <div >
            <motion.h1 className='text-orange-50 text-lg'
            initial={{x:'-100vw'}}
            animate={{scale:1.1,x:0}}
            transition={{type:"spring" ,duration:1.8}}
            >Select the Base for Bread ^_^</motion.h1>
            <div className="w-full mt-4 flex justify-between">
            <ul className='w-3/6 flex flex-col justify-center content-center flex-wrap'>
                {bases.map(base=>{
                    console.log(bread);
                    let spanClass = pizza.base === base?'block p-2 text-xl text-orange-50 border-solid border-[0.5px] border-orange-200':'block p-2 text-lg text-orange-50 border-none ease-in duration-300 hover:border-solid border-[0.5px] border-orange-200';
                    return( 

                        <li className=''
                        key={base}
                        onClick={()=>onpizzaclicked(base)}>
                        <motion.span className={spanClass}
                         whileHover={{scale:1.2}}
                         transition={{duration:0.8}}
                         ><div className='cursor-pointer'>{base}</div></motion.span></li>
                )})}
            </ul>
            <div className='mt-4 w-2/6'>
            <motion.img 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0.5}}
            transition={{duration:1}}
            src={bread} alt="" className='w-full'/></div>
            </div>
        </div>
        {pizza.base &&
        <motion.div className='w-[6rem] bg-transparent text-xl font-bold py-2 px-4 border-4 border-orange-300 rounded-xl hover:bg-grey-200'
        initial={{x:'-100vw'}}
        animate={{x:'45vw'}}
        whileHover={{scale:1.2}}
        transition={{type:'spring',duration:0.5}}
        >
            <Link to='/Topping'>
            <button className='bg-transparent'>Next</button>
            </Link>
        </motion.div>
        }
    </motion.div>
  )
}

export default Base;