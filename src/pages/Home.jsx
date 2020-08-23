import React from 'react'
import Hero from './../components/sections/Hero'
import WePresent from './../components/sections/WePresent'
import OurExpertises from './../components/sections/OurExpertises'
import WhoWeAre from './../components/sections/WhoWeAre'
import Motivation from './../components/sections/Motivation'
import OurWork from './../components/sections/OurWork'
import Fade from 'react-reveal/Fade'
function Home(props){
    return (
        <div>
            <Hero/>
            <WePresent/>
            <OurExpertises/>
            <OurWork/>
            <WhoWeAre/>
            <Motivation/>
        </div>
    )
}

export default Home ;