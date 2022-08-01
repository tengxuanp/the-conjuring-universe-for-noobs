import React from 'react'
import data from '../utils/data'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function CharacterScreen() {
  const {query} = useRouter();
  const {slug} = query;

  const allChar = data.characters.concat(data.charactersC);
  const character = allChar.find(x => x.slug === slug);
  if(!character)
    { return <div><div className='back__btn'>
    <Link href="/">Back to Home</Link>
    </div>Character Not Found.</div>; }

  return (
    
    <div className='character'>
        <title>{character.name} | The Conjuring Universe</title>
        <div className='back__btn'>
        <Link href="/">Back to Home</Link>
        </div>
        <div className='card'>
            <div className='title'>{character.name}</div>
            <div className='photo'>
                <Image 
                    src={character.portrait} alt={character.name}
                    height='200px'
                    width='150px'
                    objectFit="contain"
                />
            </div>
            <div className='bio'>
                <p>{character.bio}</p>
            </div>
        </div>
    </div>
  )
}
