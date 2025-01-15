import React from 'react'
import Navbar from './Navbar'
import AboutPage from './AboutPage'
import ChooseUs from './ChooseUs'
import TeamMember from './TeamMember'
import Testinomial from '@/components/home/Testinomial'


function page() {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <ChooseUs/>
      <TeamMember/>
      <Testinomial/>
    </div>
  )
}

export default page
