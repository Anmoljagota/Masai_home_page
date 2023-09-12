import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import Profile from "./Profile";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
export default function ManualClose({ text, name, work, profile, image }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <Box height="30vh" border="1px solid red"> */}

      {/* <Slider
        // onClick={onOpen}
      >
      
        Open Modal
      </Slider > */}
      {/* </Box> */}
<button onClick={onOpen} style={{background:"#fff",border:"1px solid #CFD0EE",position:"relative",height:"45vh",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",width:"98%",padding:"24px",borderRadius:"24px"}}>
    <Box position="absolute" top="0" right="0" padding="25px">

    <Image src="https://www.masaischool.com/images/linkedin.svg"/>
    </Box>
    <Text  height="32%" fontWeight="400" lineHeight="24px" overflow="hidden" color="#000000" margin="0px 0px 0px 8px" fontSize="14px">{text}</Text>
<Profile profile={profile} name={name} work={work}/>
<Image src={image} width="93px" position="absolute" button="0"  mt="20px"/>
</button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxWidth="50%">
          <ModalHeader fontWeight="400" width="95%" margin="auto" fontSize="16px" mt="20px" padding="10px">{text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Profile profile={profile} name={name} work={work}/>
            </ModalBody>
  
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
