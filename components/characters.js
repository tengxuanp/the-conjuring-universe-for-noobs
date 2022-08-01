import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import data from '../utils/data'
import scared from '../public/images/pxssy.png'
import CharactersDetails from './charactersDetails'
import CharactersFilterSection from './charactersFilterSection'
import { motion } from 'framer-motion'

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [charactersC, setCharactersC] = useState([]);
  const [mode, setMode] = useState(false);
  // Filter
  const [filtered, setFiltered] = useState([]);
  const [filteredC, setFilteredC] = useState([]);
  const [activeSpecies, setActiveSpecies] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    fetchCharacters();
    },[]);

  const fetchCharacters = () => {
    setCharacters(data.characters);
    setCharactersC(data.charactersC);
    setFiltered(data.characters);
    setFilteredC(data.charactersC);
  };

  return (
    <div className='characters'>
        <div className='topRow'>
            <div className='title'>Characters</div>
            <div>
              <button 
                className={mode ? "mode-on":"mode-off" }
                onClick={()=>setMode(!mode)}
                ></button>
            </div>
        </div>

          {/* Species Filter */}

          {mode?
          <CharactersFilterSection           
            setFiltered={setFilteredC} setSearch={setSearch} 
            characters={charactersC}
            activeSpecies={activeSpecies} setActiveSpecies={setActiveSpecies} />
          : 
          <CharactersFilterSection
            setFiltered={setFiltered} setSearch={setSearch} 
            characters={characters}
            activeSpecies={activeSpecies} setActiveSpecies={setActiveSpecies} />
          }

        {mode?
        <motion.div layout className='character__list'>
          {filteredC.filter((val)=>{
            if (search == ""){return val}
            else if (val.name.toLowerCase().includes(search.toLowerCase())){return val}
          })
          .map((character)=>
          <CharactersDetails key={character.slug} character={character} />)}
        </motion.div>                
        :
        <motion.div layout className='character__list'>
          {filtered.filter((val)=>{
            if (search == ""){return val}
            else if (val.name.toLowerCase().includes(search.toLowerCase())){return val}
          })
          .map((character)=>
          <CharactersDetails key={character.slug} character={character} />)}
        </motion.div>
        }

        {mode?        
        <motion.div 
          layout
          initial={{y: "calc(20vh - 10%)"}}
          animate={{y: "20%"}}
          className='scared'>
            <Image 
            src={scared} alt='Scared Guy'
            width='200px'
            height='150px'
            />
        </motion.div>:''
        }

    </div>
  )
}
