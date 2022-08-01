/* eslint-disable @next/next/no-img-element */
import amityville from '../public/images/story/amityville.jpg'
import warrensTakeDoll from '../public/images/story/warrensTakeDoll.jpg'
import janiceMurders from '../public/images/story/janiceMurders.jpg'
import orphans from '../public/images/story/orphans.jpg'
import victoria from '../public/images/story/victoria.jpg'
import carAccident from '../public/images/story/carAccident.jpg'
import drowns from '../public/images/story/drowns.jpg'
import React from 'react'
import data from '../utils/data'
import dynamic from "next/dynamic"
import { motion, useScroll } from "framer-motion"
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Image from 'next/image';
import { ScrollToTop } from '../components/ScrollToTop'
import Link from 'next/link'

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const YearScroll = batch(Fade(), Sticky(), MoveOut(0, -300));
const YearScroll2 = batch(Fade(), Sticky(), MoveIn(500, 0));
const FirstAppear = batch(Fade(), Sticky(), MoveOut(0, -50));


export default function StoryTimeline() {
    const { scrollYProgress } = useScroll();

    // Films data
    const films = data.films;
    const annabelle = films[0];
    const annabelleComesHome = films[1];
    const annabelleCreation = films[2];
    const laLlorona = films[3];
    const theConjuring = films[4];
    const theConjuring2 = films[5];
    const theConjuring3 = films[6];
    const theNun = films[7];

    // Character data
    const characters = data.characters;
    const ed = characters[0];
    const lorraine = characters[1];
    const judy = characters[2];
    const nunValak = characters[3];
    const annaMalthus = characters[7];
    

  return (
    <div>
    <title>Story of The Conjuring Universe</title>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
    />
    <ScrollContainer>

    {/* Welcome */}
    <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <span style={{ fontSize: "30px" }}>Welcome to</span>
        </Animator>
    </ScrollPage>
    <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
        <span style={{ fontSize: "40px" }} className='text-mYellow'>
            THE CONJURING Universe</span><br /> <span className='text-white text-2xl'>Story Timeline</span>
        </Animator>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={YearScroll}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1673</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator>
            <div className='p-4 text-center'>
            <span style={{ fontSize: "40px" }}>
            <span className='text-mYellow'>La Llorona</span> drowns their children in the river.
            </span>
            <div className='flex justify-center self-center'>
            <Image src={drowns} alt='drowns' width='300px' height='180px'/>
            </div>
            </div>
        </Animator>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={YearScroll2}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1943</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(500,0), Sticky(),Fade())}>
        <span style={{ fontSize: "40px" }}>
        <span className='text-mYellow'>the Mullins</span> lose their daughter in a 
        tragic accident.</span>
        <div className='flex justify-center self-center'>
        <Image src={carAccident} alt='carAccident' width='300px' height='180px'/>
        </div>
        </Animator>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(0,600), Sticky(),Fade())}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1952</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(0,600), Sticky(),Fade())}>
        <span style={{ fontSize: "35px" }}>
         Catholic priest and nun in training investigate <span className='text-mYellow'>the suicide of a nun</span> at a convent in Romania.</span>
        <div className='flex justify-center self-center'>
        <Image src={victoria} alt='victoria' width='300px' height='180px'/>
        </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={FadeUp}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theNun.happens}</div>
        <span className='text-mYellow text-[20px]'>Events in...</span>
        <img src={theNun.logo} alt={theNun.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Character */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(500,0), Sticky(),Fade())}>
            <div className='translate-y-[12rem]'>
            <span className='flex justify-center self-center text-lg'>First appearance:</span>
            <div className='flex justify-center self-center'>
            <img className='w-[120px]' src={nunValak.portrait} alt={nunValak.name} />
            </div>
            <span className='flex justify-center self-center'>{nunValak.name}</span>
            </div>
        </Animator>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={YearScroll}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1955</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
        <span style={{ fontSize: "35px" }}><span className='text-mYellow'>the Mullins</span> open up their home to a group of orphan girls into their home.
         </span>
        <div className='flex justify-center self-center'>
        <Image src={orphans} alt='orphans' width='300px' height='180px'/>
        </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={batch(MoveIn(-500,0), Sticky(),Fade())}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theNun.happens}</div>
        <span className='text-mYellow text-[20px]'>Events in...</span>
        <img src={annabelleCreation.logo} alt={annabelleCreation.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Character */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(-500,0), Sticky(),Fade())}>
            <div className='translate-y-[12rem]'>
            <span className='flex justify-center self-center text-lg'>First appearance:</span>
            <div className='flex justify-center self-center'>
            <img className='w-[120px]' src={annaMalthus.portrait} alt={annaMalthus.name} />
            </div>
            <span className='flex justify-center self-center'>Janice&#40;Malthus&#41;</span>
            </div>
        </Animator>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={YearScroll}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1967</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator>
        <div className='m-4 text-center'>
        <span style={{ fontSize: "26px" }}><span className='text-mYellow'>Janice</span> &#x27;s name was changed to 
        <span className='text-mYellow'> Annabelle</span> and she was adopted by
        <span className='text-mYellow'> the Higgins</span> family. After she grew up and joined a cult, she then returned to her adopted home and murdered her parents.
         </span>
        <div className='flex justify-center self-center mt-4'>
        <Image src={janiceMurders} alt='janiceMurders' width='400px' height='180px'/>
        </div>
        </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={FadeUp}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theNun.happens}</div>
        <span className='text-mYellow text-[20px]'>Events in...</span>
        <img src={annabelle.logo} alt={annabelle.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Year */}
    <ScrollPage>
        <Animator animation={YearScroll}>
        <span className='text-red-600' style={{ fontSize: "100px" }}>1970</span>
        <br /><br />
        </Animator>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
        <span style={{ fontSize: "35px" }}><span className='text-mYellow'>the Warrens</span> accept
        <span className='text-mYellow'> Annabelle doll</span> in to their house.
         </span>
        <div className='flex justify-center self-center'>
        <Image src={warrensTakeDoll} alt='warrensTakeDoll' width='300px' height='180px'/>
        </div>
        </Animator>
    </ScrollPage>

    {/* Character */}
    <ScrollPage>
        <Animator animation={FirstAppear}>
            <div className='translate-y-[12rem]'>
            <span className='flex justify-center self-center text-lg'>First appearance:</span>
            <div className='flex justify-center self-center'>
            <img className='w-[120px] mr-2' src={ed.portrait} alt={ed.name} />
            <img className='w-[120px]' src={lorraine.portrait} alt={lorraine.name} />
            </div>
            <span className='flex justify-center self-center'>The Warrens</span>
            </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={FadeUp}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theConjuring.happens}</div>
        <span className='text-mYellow text-[20px]'>the Perron case, Events in...</span>
        <img src={theConjuring.logo} alt={theConjuring.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Character */}
    <ScrollPage>
        <Animator animation={FirstAppear}>
            <div className='translate-y-[12rem]'>
            <span className='flex justify-center self-center text-lg'>First appearance:</span>
            <div className='flex justify-center self-center'>
            <img className='w-[120px]' src={judy.portrait} alt={judy.name} />
            </div>
            <span className='flex justify-center self-center'>Judy Warren</span>
            </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={batch(MoveIn(500,0), Sticky(),Fade())}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{annabelleComesHome.happens}</div>
        <span className='text-mYellow text-[20px]'>Events in...</span>
        <img src={annabelleComesHome.logo} alt={annabelleComesHome.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator animation={batch(MoveIn(500,0), Sticky(),Fade())}>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{laLlorona.happens}</div>
        <span className='text-mYellow text-[20px]'>Events in...</span>
        <img src={laLlorona.logo} alt={laLlorona.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Event */}
    <ScrollPage>
        <Animator animation={batch(MoveIn(0,800), Sticky(),Fade())}>
        <span style={{ fontSize: "35px" }}><span className='text-mYellow'>The Amity Ville Case</span></span>
        <div className='flex justify-center self-center'>
        <Image src={amityville} alt='amityville' width='400px' height='180px'/>
        </div>
        </Animator>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator >
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theConjuring2.happens}</div>
        <span className='text-mYellow text-[20px]'>The Enfield Poltergeist case, Events in...</span>
        <img src={theConjuring2.logo} alt={theConjuring2.name} />
        </Animator>
    </span>
    </ScrollPage>

    {/* Movie Events */}
    <ScrollPage>
    <span className='flex justify-center self-center'>
        <Animator>
        <div className='flex justify-center self-center' style={{ fontSize: "50px" }}>{theConjuring3.happens}</div>
        <span className='text-mYellow text-[20px]'>Arne Cheyenne Johnson case, Events in...</span>
        <img src={theConjuring3.logo} alt={theConjuring3.name} />
        </Animator>
    </span>
    </ScrollPage>

    <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
        <div className='flex flex-col'>
        <span style={{ fontSize: "40px" }}>End of Story.</span>
        <br/>
        <button 
            type='button' 
            className='p-2 border-2 border-white text-white rounded-lg text-2xl
                        hover:bg-white hover:text-black hover:rounded-sm transition-all'>
        <Link href='/'>Back to Home</Link>
        </button>
        </div>
        </Animator>
    </ScrollPage>
    </ScrollContainer>

    <ScrollToTop />
    </div>
  )
}
