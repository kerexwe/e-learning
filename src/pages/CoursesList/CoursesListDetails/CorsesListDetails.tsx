import React from 'react'
import Hero from './components/Hero/Hero'
import Lessons from './components/Lessons/Lessons'
import Reviews from './components/Reviews/Reviews'


const CorsesListDetails : React.FC = () => {
  return (
    <section>
      <Hero/>
      <Lessons/>
      <Reviews/>
    </section>
  )
}

export default CorsesListDetails