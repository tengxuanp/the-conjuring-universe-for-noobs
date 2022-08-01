import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import rock from '../public/images/rock.png'
import tree from '../public/images/tree.png'
import mist1 from '../public/images/mist1.png'
import mist2 from '../public/images/mist2.png'
import { motion } from 'framer-motion'

export default function Home() {
  // parallax
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <motion.div
        whileHover={{scale:1.3,transition:{duration:0.2}}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:3.5,delay:0.2}}
        className='title'>
          The Conjuring Universe
      </motion.div>
    
      <motion.div
        initial={{x: "-10%"}}
        animate={{opacity:0}}
        whileInView={{x: "10%"}}
        transition={{duration:2,delay:0.3}}
        className='mist1'>
        <Image
          src={mist1} alt='mist1'
          objectFit='contain'
          height='400px'
          width='400px'
        />
      </motion.div>

      <motion.div
        initial={{x: "0%"}}
        animate={{opacity:0}}
        whileInView={{x: "-10%"}}
        transition={{duration:2,delay:0.2}}
        className='mist2'>
        <Image
          src={mist2} alt='2'
          objectFit='contain'
          height='800px'
          width='800px'
        />
      </motion.div>

      <motion.div
        initial={{x: "0%"}}
        whileInView={{ x: "-5%" }}
        transition={{duration:2,delay:0.2}}
        // style={{transform: `translateX(-${offsetX * 0.1}px)` }}
        className='tree'>
        <Image
          src={tree} alt='tree'
          objectFit='contain'
          height='1000px'
        />
      </motion.div>
      <motion.div 
        initial={{x: "0%"}}
        whileInView={{ x: "8%" }}
        transition={{duration:2,delay:0.2}}
        className='rock'>
        <Image
          src={rock} alt='rock'
          objectFit='contain'
          height='500px'
          width='500px'
        />
      </motion.div>
      
    </div>
  )
}
