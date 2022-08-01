import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import arrow from '../public/images/arrow.png'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 1100) {
            setIsVisible(true)}
            else{
            setIsVisible(false)
            }
        }
    
    const ScrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    };

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);

        return () => {
         window.removeEventListener('scroll',toggleVisibility);
        };
    },[])

    return (
        <div className='fixed bottom-2 right-2 flex justify-center self-center'>
            <button 
                type='button' 
                onClick={ScrollToTop}
                className=
                {isVisible?'opacity-100 flex flex-col text-red-600 hover:scale-110 transition-transform'
                :'opacity-0'}
                >          
            <Image src={arrow} alt='Back To Top' 
                    width='30px'
                    height='50px'
            />
            Top
            </button>
            
        </div>
    )

};

