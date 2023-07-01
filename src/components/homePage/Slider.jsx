import React from 'react'
import { Navigation, Pagination,  A11y } from 'swiper';
import{Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
function Slider(){
    return(
        <Swiper     
        modules={[Navigation, Pagination,  A11y]}
        navigation
        pagination={{ clickable: true }}
       
        spaceBetween={50}
        slidesPerView={1}
      
        >
      
          
        <SwiperSlide><img src='public/1st picture.png' style={{width:'100%',height:'100vh'}}/></SwiperSlide>
        <SwiperSlide><img src='public/2nd picture.png' style={{width:'100%',height:'100vh'}}/></SwiperSlide>
        <SwiperSlide><img src='public/1st picture.png' style={{width:'100%',height:'100vh'}}/></SwiperSlide>
        <SwiperSlide><img src='public/1st picture.png' style={{width:'100%',height:'100vh'}}/></SwiperSlide>
        
      </Swiper>
    )

}
export default Slider