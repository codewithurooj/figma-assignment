import React from 'react'
import Navbar from './Navbar'
import AboutPage from './AboutPage'
import ChooseUs from './ChooseUs'
import TeamMember from './TeamMember'
import Testinomial from '@/components/home/Testinomial'
import FoodMenu from './FoodMenu'
import SupportPage from '@/components/home/SupportPage'


function page() {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <ChooseUs/>
      <TeamMember/>
       <div className='mt-36'><FoodMenu/></div>
  
       <div className='mt-36'><Testinomial/></div>
       <SupportPage/>
    </div>
  )
}

export default page
