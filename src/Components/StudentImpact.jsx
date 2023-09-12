import { Box, Flex, HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import ManualClose from "./Modal";
import { SimpleGrid } from "@chakra-ui/react";
const StudentImpact = () => {
  const commentsdata = [
    {
      text: "Masai does a great job of attracting ambitious folk and it shows in the hunger with which the grads chase their own improvement and career advancement. The curriculum is shaped such that its graduates come into the job with with an understanding of workplace and technology practices that is simply missing from freshers hired from colleges. They continuously look for feedback for their curriculum and ensure that it is up to date with the pulse of the ecosystem. All of these have translated into a very smooth hiring experience for us with Masai. Our experience with Masai so far has led me to believe that its graduates would be good fits in startup culture.",
      name: "Arya Adarsha Gautam",
      work: "CTO and Co-Founder-Pagarbook",
      profile:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Arya_Adarsha_Gautam_a72b51d7b3.jpeg",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_rect_adcdc345e4.svg",
    },
    {
      text: "There are many platforms that bolster an individual's knowledge to show up to work and just do their tasks. But with Masai, it is quite evident that the individuals are given a well-rounded education into the different aspects besides programming that go into software engineering. The college curriculum while focusing on the theoretical aspects of programming hasn't really evolved to keep pace with the practical aspects of software engineering. Companies too can benefit significantly by sourcing developers from Masai as they have good familiarity with the tools and processes that go into building software solutions. The dominant trait amongst Masai graduates has mostly been to focus on gaining more knowledge.",
      name: "Anirban Majumdar",
      work: "CTO and Co-Founder-Urban Piper",
      profile:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Anirban_Majumdar_e001629fcc.jpeg",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_rect_37c839e35e.svg",
    },
    {
      text: "We were looking to hire entry-level developers and Masai more than delivered. Our selection rate from Masai's candidates is higher than other avenues of hiring and the process was completed in two days flat. The offer to joining ratio with Masai candidates was 100% which is awesome! The developers had a good foundation of the technologies they need to work with and could hit the ground running. We wholeheartedly recommend Masai to companies looking to hire entry-level developers quickly.",
      name: "Vamsee Mohan Kamabathula",
      work: "CTO and Co-Founder of Cupita Fintech",
      profile:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Vamsee_Mohan_Kamabathula_e196f3ab55.jpeg",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Qapita_13fe2db4fb.png",
    },
    {
      text: "Hiring experience with Masai is a wow. All the candidates we interviewed were equally talented, selection wasn't easy. Masai training has made college and background irrelevant because once any student goes through the training the outcome is always good. We have also found that the students are trained even on soft skills, this covers the 360 degree needs of today's corporates or startups. In addition, Masai's one offer per candidate policy ensures students join once the offer is rolled out. Overall, we are confident that Masai is the new destination for quality and timely hiring.",
      name: "Pradeep Sreeram",
      work: "Engineering Lead-Eat.Fit",
      profile:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Pradeep_Sreeram_494522711e.jpeg",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_rect_02ec413e66.svg",
    },
    {
      text: "We would like to extend our heartfelt appreciation to Masai for the exceptional talent we have had the privilege of working with. The hires from Masai have consistently showcased their strong work ethic and professionalism. Their technical expertise and commitment to excellence have been invaluable to our projects. They have seamlessly integrated into our teams, collaborating with colleagues and bringing fresh perspectives to the table. Notably, these individuals have demonstrated a remarkable ability to identify and implement innovative solutions using the latest technologies. Their contribution to enhancing efficiency and streamlining processes has been remarkable. The dedication and passion they exhibit in their work are truly commendable. Overall, our experience with the Masai hires has been exceptionally positive. Their enthusiasm, technical competence, and willingness to go the extra mile have exceeded our expectations. We wholeheartedly recommend Masai as a reliable partner for organizations seeking top-tier talent. Thank you once again for the opportunity to work with such talented individuals. We look forward to continuing our partnership with Masai in the future.",
      name: "Arshdeep Singh",
      work: "Director of technology-Kapiva",
      profile:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Arshdeep_Singh_0d44120445.jpeg",
      image: "",
    },
  ];
  return (
    <Box mt="8%" p="15px" height="90vh" background="#f9f9f9">
      <Heading mt="10px">
        <Heading>
          {" "}
          Our Students are
          <span style={{ color: "#ED0331" }}> Creating Impact</span>
        </Heading>
        <HStack margin={"auto"} border={"0px solid black"} width={"20%"}>
          <Image
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt=""
          />
        </HStack>
      </Heading>
      <br />
      <br />
      <br />
      <br />
      <Box
        display={{ lg: "flex" }}
        style={{ margin: "auto" }}
        float={{ lg: "left", width: "95%" }}
        justifyContent="space-between"
      >
        <Box
          borderRadius="24px"
          width={{ lg: "45%", md: "100%", sm: "100%" }}
          padding="10px"
          border="1px solid #CFD0EE"
        >
          <ReactPlayer
            url="https://youtu.be/tSlit0vgB20?si=01NLGxSQxC2sx55m"
            width="100%"
            height="50vh"
          />
        </Box>
        <SimpleGrid
          w={{ lg: "50%", md: "100%", sm: "100%", base: "100%" }}
          columns={[1, 2, 2]}
          spacing="40px"
          mt={{ md: "20px", sm: "20px", base: "20px" }}
        >
          {commentsdata.map(
            (ele, index) => index <= 1 && <ManualClose key={index} {...ele} />
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StudentImpact;
