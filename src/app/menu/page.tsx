import React from 'react'
import Navbar from './Navbar'
import MainMenu from './MainMenu'
import Dessert from './Dessert'
import Drinks from './Drinks'
import PartnersPage from './PartnerPage'


function page() {
  return (
    <div>
      <Navbar/>
      <MainMenu/>
      <Dessert/>
      <Drinks/>
      <PartnersPage/>
      
    </div>
  )
}

export default page

