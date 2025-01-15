import React from 'react'
import Navbar from './Navbar'
import QuestionsPage from './QuestionPage'
import SupportPage from '@/components/home/SupportPage'


function page() {
  return (
    <div>
      <Navbar/>
      <QuestionsPage/>
      <SupportPage/>
      
    </div>
  )
}

export default page
