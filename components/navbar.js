/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import hamburger from '../public/images/hamburger.png'
import cross from '../public/images/cross.png'
import {Link} from 'react-scroll';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => setToggleMenu(!toggleMenu)

    return (
    <nav className='navbar w-full fixed z-[999]'>
        <ul className='navbar__bigscreen-links'>
            <li className='link'><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='link'><Link to='timeline' smooth={true} duration={500}>Timeline</Link></li>
            <li className='link'><Link to='characters' smooth={true} duration={500}>Characters</Link></li>
        </ul>

        <div className='navbar__smallscreen'>
            <div className='hamburger'>
            <Image             
                src={hamburger} alt='hamburger'
                height='28px'
                width='28px'
                onClick={ () => {setToggleMenu(true)}} 
            />
            </div>

            {toggleMenu && (
            <div className='navbar__smallscreen-overlay'>
                <div fontSize={37} className="overlay__close" onClick={() => {setToggleMenu(false)}}>
                    <Image
                    className='cross'    
                    src={cross} alt='cross'
                    height='32px'
                    width='28px'
                    />
                </div>
                <ul className='app__navbar-smallscreen-links'>
                    <li className='link'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
                    <li className='link'><Link onClick={handleClick} to='timeline' smooth={true} duration={500}>Timeline</Link></li>
                    <li className='link'><Link onClick={handleClick} to='characters' smooth={true} duration={500}>Characters</Link></li>
                </ul>
            </div>
            )}

        </div>
    </nav>

      )
    
  
}
