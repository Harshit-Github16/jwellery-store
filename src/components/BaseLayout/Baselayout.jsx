import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Baselayout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Baselayout
