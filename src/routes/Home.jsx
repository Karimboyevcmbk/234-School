import React from 'react'
import Banner from '../components/banner/Banner'
import AboutUs from '../components/aboutUs/AboutUs'
import News from '../components/news/News'
import Films from '../components/films/Films'
import Guest from '../components/guest/Guest'
const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutUs/>
        <News/>
        <Films/>
        <Guest/>
    </div>
  )
}

export default Home