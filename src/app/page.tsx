import About from '@/components/home/About'
import ActiveProcessPage from '@/components/home/ActiveProccessPage'
import ChefPage from '@/components/home/ChefPage'
import ChooseAndPickPage from '@/components/home/ChoosePick'
import ChooseUs from '@/components/home/ChooseUs'
import FoodCategory from '@/components/home/FoodCategory'
import HeroSection from '@/components/home/HeroSection'
import Logo from '@/components/home/Logo'
import MenuPage from '@/components/home/MenuPage'
import Navbar from '@/components/home/Navbar'
import ProfessionalChefs from '@/components/home/ProffesionalChefs'
import SupportPage from '@/components/home/SupportPage'
import Testinomial from '@/components/home/Testinomial'
import React from 'react'

function page() {
  return (
    <div>
      <Logo/>
      <Navbar/>
      <HeroSection/>
      <About/>
      <FoodCategory/>
      <ChooseUs/>
      <ProfessionalChefs/>
      <ChooseAndPickPage/>
      <MenuPage/>
      <ChefPage/>
      <ActiveProcessPage/>
      <Testinomial/>
      <SupportPage/>
      
    </div>
  )
}

export default page
