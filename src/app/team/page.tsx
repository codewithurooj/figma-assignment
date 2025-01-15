import React from 'react'
import Navbar from './Navbar'
import ChefPage from './ChefPage'
import SupportPage from '@/components/home/SupportPage'


function page() {
  return (
    <div>
      <Navbar/>
      <ChefPage/>
      <SupportPage/>
      
    </div>
  )
}

export default page
