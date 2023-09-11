import React from "react";
import Styles from "../TechCommunity/Community.module.css";
import { Center, Image } from "@chakra-ui/react";
import Crousel from "../Crousel";
const Partners = () => {
    const images=[
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg"},
        {image:'https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg'},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_9dc276a187.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/byjus_e7b97a9c80.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/dream11_d6c8d97a52.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ibm_795b5429ee.svg"},
        
    ]
  return (
    <div style={{marginTop:"50px"}}>
      <p className={Styles.p1}>
        Meet Our <span style={{ color: "#ED0331" }}>4000+</span> Hiring Partners
      </p>
      <Center>
        <Image
          src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
          width="110px"
          height="21px"
        />
      </Center>

      <Crousel images={images} view={8} space={0}/>
    </div>
  );
};

export default Partners;
