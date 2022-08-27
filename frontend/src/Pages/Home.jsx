import React from "react";
import { useNavigate } from "react-router-dom";
import Faq from "../components/Faq";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
// import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mensPage = () => {
    navigate("/mens");
  };
  const womensPage = () => {
    navigate("/womens");
  };

  const shopPage = () => {
    navigate("/shop");
  };

  return (
    <Box w="100%" position="relative" top="65" pb="4rem">
      <Box>
        <Image w="100%" src="../.././assets/heroBanner1.webp" />
      </Box>

      <Flex
        mt={{ base: "3rem", sm: "5rem", md: "5rem", lg: "8rem", xl: "10rem" }}
        align="center"
        justify="center"
        gap={[10, 10, 8, 8, 10]}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        p={{ base: "0 1rem", sm: "0 2rem", md: "0", lg: "0 2rem", xl: "0" }}
      >
        <Box overflow="hidden" position="relative" boxShadow="sm">
          <Image
            transition="2000ms"
            _hover={{ transform: `scale(1.2)` }}
            src="mens.jpg"
            alt="mens"
          />
          <Button
            fontSize={{
              base: "1rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            onClick={mensPage}
            position="absolute"
            bottom="0"
            w="100%"
            bg="#1A202C"
            color="white"
            _hover={{ bg: "black" }}
          >
            View All
          </Button>
        </Box>
        <Box overflow="hidden" position="relative" boxShadow="sm">
          <Image
            transition="2000ms"
            _hover={{ transform: `scale(1.2)` }}
            src="womens.jpg"
            alt="womens"
          />
          <Button
            fontSize={{
              base: "1rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            position="absolute"
            onClick={womensPage}
            bottom="0"
            w="100%"
            bg="#1A202C "
            color="white"
            _hover={{ bg: "black" }}
          >
            View All
          </Button>
        </Box>
      </Flex>

      {/* faq */}
      <Faq />
    </Box>
  );
};

export default Home;
