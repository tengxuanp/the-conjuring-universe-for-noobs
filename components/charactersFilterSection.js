import React, { useEffect } from 'react'
import Image from 'next/image'
import filter from '../public/images/filterW.png'


export default function CharactersFilterSection({
  characters, setFiltered, setSearch,
  activeSpecies, setActiveSpecies,
  }) {
  

  useEffect(()=>{
    if(activeSpecies==='All'){
      setFiltered(characters);
      return;
    }

    const filteredSpecies = characters.filter((character)=>character.species===activeSpecies);
    setFiltered(filteredSpecies);

  },[activeSpecies])

  return (
    <div className='filter'>
      <div className='title'>
        <span>Filter
          <div className='icon'>        
            <Image  
              src={ filter } alt='filter'
              height='26px'
              width='26px' />
          </div>
        </span>
      </div>
      <div className='secondRow'>
        <div className='search'>
            Search by name:
            <br />
            <input 
              type="text"
              onChange={(x)=>{setSearch(x.target.value)}}       
            />          
        </div>

        <div className='filter__buttons'>
          <div className='species'>
            <h4>Species</h4>
            <button className={activeSpecies==='All'?'active':''} onClick={()=>setActiveSpecies('All')}>All</button>
            <button className={activeSpecies==='human'?'active':''} onClick={()=>setActiveSpecies('human')}>Human</button>
            <button className={activeSpecies==='demon'?'active':''} onClick={()=>setActiveSpecies('demon')}>Demon</button>
            <button className={activeSpecies==='ghost'?'active':''} onClick={()=>setActiveSpecies('ghost')}>Ghost</button>
          </div>
        </div>
      </div>
    </div>
  )
}
