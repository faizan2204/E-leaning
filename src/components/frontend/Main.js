import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'

function Main(props) {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Main