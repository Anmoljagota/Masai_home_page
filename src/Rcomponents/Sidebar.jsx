import React, { useEffect, useState } from 'react';
import { Flex, Button, useDisclosure, Box, Center, border } from '@chakra-ui/react';
import { color, motion } from 'framer-motion';
import FirstComponent from './FirstComponent';
export default function Sidebar(){
   
      const { isOpen, onOpen, onClose } = useDisclosure();
      const [isDragging, setIsDragging] = useState(false);
      const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
      const [status,setStatus]=useState(null)
    
      const handleDragStart = (e) => {
        setIsDragging(true);
        setDragPosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
    
      const handleDrag = (e) => {
        if (isDragging) {
          const newX = dragPosition.x - e.clientX;
          const newY = dragPosition.y - e.clientY;
          setDragPosition({
            x: e.clientX,
            y: e.clientY,
          });
          const element = document.getElementById('draggable-container');
          if (element) {
            element.scrollLeft += newX;
            element.scrollTop += newY;
          }
        }
      };
    useEffect(()=>{
      setStatus(1)
    },[])
      const handleDragEnd = () => {
        setIsDragging(false);
      };
      const handleStatus=(a)=>{
        setStatus(a);
        console.log(status);
      }
    //   console.log(status)
      return (
        <Box display={"flex"} 
        height={"600px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        margin={"auto"}
        css={{flexDirection: 'column', // Default direction for small screens
        width: '100%',
        '@media (min-width: 768px)': {
          flexDirection: 'row', // Change direction for large screens
          
        }}}>
        <Flex
          id="draggable-container"
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"white"}
          gap={10}
          css={{

            flexDirection: 'row', // Default direction for small screens
            justifyContent:"space-between",
            width: '100%',
            '@media (min-width: 768px)': {
              flexDirection: 'column', // Change direction for large screens
              width: '20%',
              height:"100%",
                justifyContent:"space-evenly",
                alignItems:"center"
            },
          }}
          borderRadius="md"
          overflow="hidden"
          userSelect="none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          position="relative"
        >
          <Button size={"md"}w={"80%"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status==1?"#ed3d5f":"gray"}  onClick={()=>handleStatus(1)}>
            {/* <Box h={20} w={30}  display={"flex"} justifyContent={"center"} alignItems={"center"} p={8} m={5} borderRadius={5}  >1</Box> */}
            Career Launch
          </Button>
          <Button size={"md"}w={"80%"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status==1?"#ed3d5f":"gray"} onClick={()=>handleStatus(2)}>
            Nurture Ambition
          </Button>
          <Button size={"md"}w={"80%"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status==1?"#ed3d5f":"gray"} onClick={()=>handleStatus(3)}>
            Practice Based
          </Button>
          <Button size={"md"}w={"80%"}  h={"20px"} color={"black"} _hover={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status==1?"#ed3d5f":"gray"} onClick={()=>handleStatus(4)}>
            Industry Readiness
          </Button>
          <Button size={"md"}w={"80%"}  h={"20px"} color={"black"}  _hover={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} _focus={{color:"#ed3d5f",borderColor:
        "#ed3d5f", border:"1px solid #ed3d5f"}} border={0.8} p={10} borderRadius={15} fontSize={"18px"} fontWeight={700} colorScheme={status==1?"#ed3d5f":"gray"} onClick={()=>handleStatus(5)}>
            Holistic Development
          </Button>
          <Box
            position="absolute"
            w="100%"
            h="100%"
            top="0"
            left="0"
            pointerEvents="none"
            zIndex="999"
            display={isDragging ? 'block' : 'none'}
          />
        </Flex>
        <Box width={"70%"} height={"100%"} display={["none","none","none","block"]}>
          <FirstComponent a={status}/>
        </Box>
        </Box>
      );
   
    
}