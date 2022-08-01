import React from 'react'
import Characters from '../components/characters'
import Footer from '../components/footer'
import Home from '../components/home'
import Navbar from '../components/navbar'
import { ScrollToTop } from '../components/ScrollToTop'
import Timeline from '../components/timeline'

export default function Index() {
  return (
<div>
<title>The Conjuring Universe</title>
    <Navbar />
    <Home />
    <Timeline />
    <Characters />
    <ScrollToTop />
    <Footer />
</div>
  )
}
