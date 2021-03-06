import React from 'react'
import { Card } from '../UI/card/Card'
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <>
      <Card>
        <div style={{ padding: '5rem' }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </>
  )
}

export default Hero
