import Hero from 'components/Hero/Hero'
import React, { FC, useState } from 'react'

const Home:FC = () => {
    const [play,setPlay] = useState(false)
  return (
    <>
    <Hero play={play} setPlay={setPlay} />
    </>
  )
}

export default Home