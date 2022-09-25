import React from "react";
import { useNavigate } from "react-router-dom";
import Faq from "../components/Faq";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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

  const kidsPage = () => {
    navigate("/kids");
  };

  return (
    <Box w="100%" position="relative" top="65" pb="4rem">
      <Box>
        <Image w="100%" src="../.././assets/heroBanner1.png" />
        <Image w="100%" src="../.././assets/heroBanner2.png" />
        <Image w="100%" src="../.././assets/heroBanner3.jpg" />
      </Box>

      <Box
        mt={{ base: "3rem", sm: "5rem", md: "5rem", lg: "8rem", xl: "10rem" }}
        textAlign="center"
        fontSize="2rem"
        fontWeight={700}
        letterSpacing={2}
        fontStyle="italic"
        color="telegram.900"
      >
        <Text>POPULAR RIGHT NOW</Text>
      </Box>
      <Flex
        mt="3rem"
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
        p={{
          base: "0 1rem",
          sm: "0 2rem",
          md: "0",
          lg: "0 2rem",
          xl: "0 2rem",
        }}
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
              base: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            onClick={mensPage}
            position="absolute"
            bottom="0"
            borderRadius={0}
            w="100%"
            bg="rgba(255,255,255,0.01)"
            backdropFilter="blur(10px)"
            variant="outline"
            transition="500ms"
            _hover={{ bg: "telegram.900", color: "white", border: "none" }}
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
              base: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            position="absolute"
            onClick={womensPage}
            bottom="0"
            borderRadius={0}
            w="100%"
            bg="rgba(255,255,255,0.01)"
            backdropFilter="blur(10px)"
            variant="outline"
            transition="500ms"
            _hover={{ bg: "telegram.900", color: "white", border: "none" }}
          >
            View All
          </Button>
        </Box>
      </Flex>

      {/* kids  */}
      <Flex
        mt="3rem"
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
        p={{
          base: "0 1rem",
          sm: "0 2rem",
          md: "0",
          lg: "0 2rem",
          xl: "0 2rem",
        }}
      >
        <Box overflow="hidden" position="relative" boxShadow="sm">
          <Image
            transition="2000ms"
            _hover={{ transform: `scale(1.2)` }}
            src="boyKid.jpg"
            alt="kids"
          />
          <Button
            fontSize={{
              base: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            onClick={kidsPage}
            position="absolute"
            bottom="0"
            borderRadius={0}
            w="100%"
            bg="rgba(255,255,255,0.01)"
            backdropFilter="blur(10px)"
            variant="outline"
            transition="500ms"
            _hover={{ bg: "telegram.900", color: "white", border: "none" }}
          >
            View All
          </Button>
        </Box>
        <Box overflow="hidden" position="relative" boxShadow="sm">
          <Image
            transition="2000ms"
            _hover={{ transform: `scale(1.2)` }}
            src="girlKid.jpg"
            alt="kids"
          />
          <Button
            fontSize={{
              base: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            letterSpacing={1}
            position="absolute"
            onClick={kidsPage}
            bottom="0"
            borderRadius={0}
            w="100%"
            bg="rgba(255,255,255,0.01)"
            backdropFilter="blur(10px)"
            variant="outline"
            transition="500ms"
            _hover={{ bg: "telegram.900", color: "white", border: "none" }}
          >
            View All
          </Button>
        </Box>
      </Flex>

      {/* free shipping  */}
      <Box
        bgGradient="radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(121,9,38,0.7934524151457458) 35%, rgba(0,212,255,1) 100%)"
        bgClip="border-box"
        textAlign="center"
        color="white"
        m="4rem 0"
        p="2rem 0"
      >
        <Box mb="1.5rem">
          <Text
            fontWeight={700}
            fontSize="1.5rem"
            letterSpacing={1}
            display="inline-block"
            mr="0.5rem"
          >
            An Indian Brand{" "}
          </Text>
          <Text fontSize="1.5rem" display="inline-block">
            UNLOCKED
          </Text>
        </Box>
        <Heading w="20rem" m="auto" mb="1rem">
          FREE SHIPPING, EXCLUSIVES & MORE
        </Heading>
        <Text w="30rem" m="auto" fontSize="1.2rem" lineHeight={1.5}>
          You kick it hard with style and fitness. Now get rewarded for it with
          a loyalty program that gets you.
        </Text>
      </Box>
      {/* faq */}
      <Faq />
    </Box>
  );
};

export default Home;
