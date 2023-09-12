import React from 'react'
// import { Autoplay, Navigation } from "swiper";
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import "swiper/css/autoplay";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import {  Box, Image } from '@chakra-ui/react';
const Crousel = ({images,view,space}) => {
  return (
    <div style={{marginTop:"30px"}}>
    <Swiper
        slidesPerView={view}
        spaceBetween={space}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
            {images.map((item,index)=>(
              <SwiperSlide
              style={{
                height: "170px",
                width: "260px",
               position: "relative",
              }}
              key={index}
            >
                {view===4 ?
                   <Image src={item.image} width="100%" height="100%"/>:<Box p="10px" borderRight="24px"  width="75%" borderRadius="10px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px">
                         <Image src={item.image} width="100%" height="100%"/>
                    </Box>
                }
                    </SwiperSlide>
                
            ))}
        </Swiper>
    </div>
  )
}

export default Crousel
