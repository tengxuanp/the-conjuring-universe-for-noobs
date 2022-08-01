import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export default function TimelineSort({films, setSorted, activeCat, setActiveCat}) {

 const [chronoOn, setChronoOn] = useState(true);
 const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

 useEffect(()=>{

    if(activeCat==='All'){  
      setSorted(films);
      }

    if(activeCat==='Chrono'){
    const sortedFilm = films.sort((a,b) => a.happens > b.happens ? 1 : -1);
    setSorted([...sortedFilm]);
    setChronoOn(true);
    }

    if(activeCat==='Release'){
    const sortedFilm = films.sort((a,b) => a.release > b.release ? 1 : -1);
    setSorted([...sortedFilm]);
    setChronoOn(false);
    }

},[activeCat])

  return (
    <div className='subtitle'>
    <div className='subtitle-chronological'>
      <button 
        className={activeCat==='Chrono'? "active":""}
        onClick={()=>setActiveCat('Chrono')}>Chronological</button></div>
    <div className='toggle__button' >
      <div className="switch" data-ison={chronoOn}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
    <div className='subtitle-releasetime'>
      <button
        className={activeCat==='Release'? "active":""}  
        onClick={()=>setActiveCat('Release')}>Release Time</button></div>
  </div>
  )
}
