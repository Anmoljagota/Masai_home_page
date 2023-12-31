import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, Image, Heading, Divider, ButtonGroup, Button, HStack, Box } from '@chakra-ui/react';
import { BsCheckCircle } from "react-icons/bs";
const Courses = () => {

    return (
        <Box >
            <Box  mt={"90px"} >
                <Heading fontSize={["30px","30px",'45px','45px']}>Our Courses</Heading>
                <Text fontSize={["20px","22px","25px",'25px']} textAlign={"center"} fontWeight={'700'}>
                    <Text textAlign={"center"} > Practice-Based Learning Tracks, <span style={{ color: "#ED0331",fontSize:["20px","22px","25px",'25px'] }}> Supercharged By A.I.</span> </Text>
                    <HStack marginLeft={["40%","60%","60%","55%"]} border={"0px solid black"} width={'20%'}><Image src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg" alt="" /></HStack>
                </Text>
            </Box>
            <Box  display={"flex"} m={"auto"} mt={20} justifyContent={"center"} gap={10} flexDirection={["column","column","row","row"]} alignItems={"center"}>
                <Card maxW='sm' >
                    <CardHeader padding={10} backgroundColor={'#B7B8E5'} align={'center'} borderRadius={'lg'}>
                        <Image
                            src='https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            width={'120px'}
                        />
                    </CardHeader>
                    <CardBody>
                        <Stack mt='6' mb={'4'} spacing='3'>
                            <Heading size='md' fontWeight={'bold'}>Full Stack Web Development</Heading>
                            <p style={{ color: "rgb(84 77 79 )" }}>Become job-ready in 30 weeks</p>
                            <Divider />
                        </Stack>
                        <Stack textAlign={"left"}>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>Opportunities: Full Stack Developer,Software Engineer</Text> </HStack>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>100% live learning with expert instructors.</Text> </HStack>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>Pay After Placement</Text> </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button bg='#ED0331' color={'white'} p={6} width={"100%"}>
                            VIEW DETAILS
                        </Button>
                    </CardFooter>
                </Card>
                <Card maxW='sm'>
                    <CardHeader padding={10} backgroundColor={'#E5C9B7'} align={'center'} borderRadius={'lg'}>
                        <Image
                            src='https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png'
                            alt='Backend Course'
                            borderRadius='lg'
                            width={'120px'}
                        />
                    </CardHeader>
                    <CardBody>
                        <Stack mt='6' mb={'4'} spacing='3'>
                            <Heading size='md' fontWeight={'bold'}>Backend Development</Heading>
                            <p style={{ color: "rgb(84 77 79 )" }}>Become job-ready in 35 weeks</p>
                            <Divider />
                        </Stack>
                        <Stack textAlign={"left"}>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>Opportunities-Backend Web Developer,API developer</Text> </HStack>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>100% live learning with expert instructors.</Text> </HStack>
                            <HStack><BsCheckCircle color='green' /><Text fontSize={'15px'} fontWeight={'600'}>Pay After Placement</Text> </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button bg='#ED0331' color={'white'} p={6} width={"100%"}>
                            VIEW DETAILS
                        </Button>
                    </CardFooter>
                </Card>,
            </Box>
            <div style={{margin:"10px"}}>
                <Button bg='#ED0331' color={'white'} p={6}>VIEW ALL COURSES</Button>
            </div>

        </Box>
    )
}

export default Courses