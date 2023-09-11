import React from 'react'
import Footer from './Footer'
import InnerNav from './InnerNav'
import Home from './Home'
import '../../css/frontend/inner.css'

export default function InnerMain() {
  return (
    <>
    <InnerNav/>
    <div class="text-bg-warning p-3"  id='container12'>
      <a className='fa-home' href="/">Home</a>
      <a href="/java">Java</a>
    </div>
    
    <Home />
    <Footer/>
    </>
  )
}
