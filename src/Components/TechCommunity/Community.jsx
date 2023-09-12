import React from "react";
import Styles from "./Community.module.css";
import { Center, Image } from "@chakra-ui/react";
import Crousel from "../Crousel";
const Community = () => {
  const images = [
    {
      image:
        "https://th.bing.com/th/id/OIP.kJgcmSrwh0rp0yGSMm2O3QHaFj?pid=ImgDet&rs=1",
    },
    {
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
    },
    {
      image:
        "https://media.glassdoor.com/lst2x/0a/d1/0c/29/docker-and-amp-kubernetes-meetup.jpg",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.cWfk5lI5N321km9J7MxMQAAAAA?pid=ImgDet&rs=1",
    },
    {
        image:
          "https://th.bing.com/th/id/OIP.kJgcmSrwh0rp0yGSMm2O3QHaFj?pid=ImgDet&rs=1",
      },
      {
        image:
          "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      },
      {
        image:
          "https://media.glassdoor.com/lst2x/0a/d1/0c/29/docker-and-amp-kubernetes-meetup.jpg",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.cWfk5lI5N321km9J7MxMQAAAAA?pid=ImgDet&rs=1",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.kJgcmSrwh0rp0yGSMm2O3QHaFj?pid=ImgDet&rs=1",
      },
      {
        image:
          "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp",
      },
      {
        image:
          "https://media.glassdoor.com/lst2x/0a/d1/0c/29/docker-and-amp-kubernetes-meetup.jpg",
      },
      {
        image:
          "https://th.bing.com/th/id/OIP.cWfk5lI5N321km9J7MxMQAAAAA?pid=ImgDet&rs=1",
      },
  ];
  return (
    <div style={{ background: "#f9f9f9", padding: "20px", marginTop: "8%" }}>
      <p className={Styles.p1}>Be A Part of Our Thriving</p>

      <span className={Styles.p1} style={{ color: "#ED0331" }}>
        Tech Community
        <Center>
          <Image
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            width="210px"
            height="21px"
          />
        </Center>
      </span>
      <Crousel images={images} view={4} space={30} />
      <Button text={"JOIN OUR COMMUNITY"} size={"14px"} padding={"12px 16px"} radius={"8px"} margin={"80px"}/>
    </div>
  );
};

export default Community;
