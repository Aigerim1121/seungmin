import React from 'react'
import Banner from '../components/Banner/Banner'
import BG from '../components/BG/BG'
import WhyRembini from '../components/WhyRembini/WhyRembini'
import Catalog from '../components/Catalog/Catalog'
import Card from '../components/Card/Card'
import Rembini from '../components/Rembini/Rembini'
import Internet from '../components/Internet/Internet'
import Brend from '../components/Brend/Brend'
import Rembynii from '../components/Rembynii/Rembynii'

function Home() {
  return (
    <div className='home' >
      <Banner/>
      <BG/>
      <WhyRembini/>
      <Catalog/>
      <Card/>
      <Rembini/>
      <Internet/>
      <Brend/>
      <Rembynii/>
    </div>
  )}



  export default Home
