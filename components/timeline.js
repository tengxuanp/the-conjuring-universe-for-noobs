import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import data from '../utils/data'
import TimelineDetails from './timelineDetails';
import TimelineSort from './timelineSort';
import satan from '../public/images/satanR.png'
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Timeline() {
  const [films, setFilms] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [activeCat, setActiveCat] = useState('Chrono');

  useEffect(()=>{
    fetchFilms();
  },[]);

  const fetchFilms = () => {
    setFilms(data.films);
    setSorted(data.films);
  };

  return (
    <div className='timeline'>
      <div className='title'>
        <div className='title-film'><button>Film Timeline</button></div>
        <div className='flex justify-center self-center'>|</div>
          <div className='title-story'>
            <Link href={`/story`}>
            <button>     
              <Image
                src={satan} alt='satan' 
                height='26px'
                width='26px'
              />&nbsp;
              Read the Story
            </button>
            </Link>
          </div>
      </div>

      
        <TimelineSort films={films} setSorted={setSorted}
                      activeCat={activeCat} setActiveCat={setActiveCat}  />
      <motion.div layout>
        {sorted.map((film)=>
        <TimelineDetails key={film.slug} film={film} activeCat={activeCat}/>)}
      </motion.div>

    </div>
  )
}
