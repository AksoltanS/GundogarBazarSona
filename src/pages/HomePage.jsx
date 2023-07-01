import React from 'react'
import Hero from '../components/homePage/Hero'
import Slider from '../components/homePage/Slider'
import BazarNews from '../components/homePage/BazarNews'
import FormPart from '../components/homePage/FormPart'





const HomePage=()=>{
    return (
      <>
       <div>
       
        <Slider/>
        <Hero/>                  
        <BazarNews/>
        <FormPart/>
       

       
       </div>
      </>
    )
  }
  
  export default HomePage