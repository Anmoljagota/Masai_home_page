import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = ({profile,name,work}) => {
    console.log(profile,"profile")
  return (
    <Flex  height="55px" mt="30px">
      <Image src={profile} alt="error" height="48px" borderRadius="8px" />
      <Box height="100%" fontWeight="600">
        <Text pl="8px" textAlign="left">{name}</Text>
        <Text fontSize="12px" paddingLeft="8px">{work}</Text>
      </Box>
    </Flex>
  )
}

export default Profile
