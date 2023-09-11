import React from "react";
import { Box, Button, HStack, Image, Stack } from "@chakra-ui/react";
import Styles from "./Navbar.module.css";
const Navbar = () => {
  const links = [
    { title: "COURSES" },
    { title: "FEES" },
    { title: "EVENTS" },
    { title: "LEARN" },
    { title: "SUCCESS STORIES" },
    { title: "HIRE FROM US" },
  ];
  return (
    <nav className={Styles.parent}>
      <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png" />
      <ul
        style={{
          width: "60%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
        }}
      >
        {links.map((ele, i) => (
          <li key={i} className={Styles.links}>
            {ele.title}
          </li>
        ))}
      </ul>
      <HStack spacing="20px" fontSize="14px" fontWeight="600">
        <button className={Styles.btn1}>REFER & EARN</button>
        <Button
          colorScheme="red"
          variant="outline"
          padding="25px 10px 25px 10px"
          className={Styles.btn2}
          letterSpacing="1.2px"
        >
          SIGN UP
        </Button>
      </HStack>
    </nav>
  );
};

export default Navbar;
