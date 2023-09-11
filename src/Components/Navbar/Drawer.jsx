import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Hamburger from "hamburger-react";
export default function PlacementExample({ links }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");

  return (
    <Box >
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          {/* <Radio value='top'>Top</Radio> */}
        </Stack>
      </RadioGroup>
      <Box  onClick={onOpen}>
      <Hamburger color="black"/>
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            {links.map((Items, index) => (
              <Box key={index} mt="20px" padding="10px">
                {Items.title}
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
