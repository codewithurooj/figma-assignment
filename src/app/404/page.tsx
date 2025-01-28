import React from 'react'
import Navbar from './Navbar'
import Error from './Error'

import SupportPage from '@/components/home/SupportPage'

function page() {
  return (
    <div>
      <Navbar/>
      <Error/>
      <SupportPage/>
      
    </div>
  )
}

export default page
