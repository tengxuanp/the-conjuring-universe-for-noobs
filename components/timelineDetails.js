import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function TimelineDetails({film, activeCat}) {
  return (
    <motion.div layout className='timeline__wrapper'>
    <div className='timeline__card'>
        {(activeCat==='Chrono')?
        <div className='firstProp'>{film.happens}</div>:
        <div className='firstProp'>{film.release}</div>}
        <div className='secondProp'><Image 
              src={film.logo} alt={film.name} 
              width='300px' 
              height='150px' />
        </div>
    </div>
    </motion.div>
  )
}
