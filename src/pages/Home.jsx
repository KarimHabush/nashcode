import React from 'react'
import Hero from './../components/sections/Hero'
import WePresent from './../components/sections/WePresent'
import OurExpertises from './../components/sections/OurExpertises'
import WhoWeAre from './../components/sections/WhoWeAre'
import Motivation from './../components/sections/Motivation'
import OurWork from './../components/sections/OurWork'
import Footer from './../components/sections/Footer'
function Home(props){
    return (
        <div>
            <Hero/>
            <WePresent/>
            <OurExpertises/>
            <OurWork/>
            <WhoWeAre/>
            <Motivation/>
            <Footer/>
        </div>
    )
}

export default Home ;