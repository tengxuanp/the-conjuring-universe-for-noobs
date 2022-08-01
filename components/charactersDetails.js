import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function CharactersDetails({character}) {
  return (
    <motion.div layout className='card'>
      <Link href={`/${character.slug}`}>
      <div className='portrait'>
          <Image
            src={character.portrait} alt={character.name}
            height='200px'
            width='150px'
            objectFit="contain"
          />
      </div>
      </Link> 
      <div>
          {character.name}
      </div>
    </motion.div>
  )
}
