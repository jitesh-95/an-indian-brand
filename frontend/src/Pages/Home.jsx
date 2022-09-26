import React from "react";
import { useNavigate } from "react-router-dom";
import Faq from "../components/Faq";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
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
      <Slider {...settings}>
        <Box>
          <Image w="100%" src="../.././assets/heroBanner1copy.png" />
        </Box>
        <Box>
          <Image w="100%" src="../.././assets/heroBanner2.png" />
        </Box>
        <Box>
          <Image w="100%" src="../.././assets/heroBanner3.jpg" />
        </Box>
      </Slider>

      <Box
        mt={{ base: "3rem", sm: "5rem", md: "5rem", lg: "8rem", xl: "10rem" }}
        textAlign="center"
        fontSize={["1.1rem", "2rem"]}
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
          md: "row",
          lg: "row",
          xl: "row",
        }}
        p={{
          base: "0 1rem",
          sm: "0 2rem",
          md: "0 1.5rem",
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
            fontSize={["1.2rem", "1.4rem", "1.3rem", "1.5rem"]}
            letterSpacing={1}
            onClick={mensPage}
            position="absolute"
            bottom="0"
            borderRadius={0}
            w="100%"
            color="telegram.900"
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
            fontSize={["1.2rem", "1.4rem", "1.3rem", "1.5rem"]}
            letterSpacing={1}
            position="absolute"
            onClick={womensPage}
            bottom="0"
            borderRadius={0}
            w="100%"
            color="telegram.900"
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
            src="kids.jpg"
            alt="kids"
          />
          <Button
            fontSize={["1.2rem", "1.4rem", "1.3rem", "1.5rem"]}
            letterSpacing={1}
            onClick={kidsPage}
            position="absolute"
            bottom="0"
            borderRadius={0}
            w="100%"
            color="telegram.900"
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
        bgGradient={[
          "radial-gradient(circle, rgba(2,1,29,0.9727241238292192) 0%, rgba(17,94,133,0.8690826672465861) 63%, rgba(222,217,219,0.9643207624846813) 100%)",
          "radial-gradient(circle, rgba(2,1,29,0.9727241238292192) 0%, rgba(17,94,133,0.8690826672465861) 53%, rgba(222,217,219,0.9643207624846813) 100%)",
          "radial-gradient(circle, rgba(2,1,29,0.9727241238292192) 0%, rgba(17,94,133,0.8690826672465861) 34%, rgba(222,217,219,0.9643207624846813) 100%)",
        ]}
        bgClip="border-box"
        textAlign="center"
        color="white"
        m="4rem 0"
        p="2rem 0"
      >
        <Box mb="1.5rem">
          <Text
            fontWeight={700}
            fontSize={["1.1rem", "1.5rem"]}
            letterSpacing={1}
          >
            An Indian Brand <span style={{ fontWeight: 500 }}>UNLOCKED</span>
          </Text>
        </Box>
        <Heading
          maxW={["18rem", "20rem"]}
          m="auto"
          mb="1rem"
          fontSize={["1.3rem", "1.5rem", "2rem"]}
        >
          FREE SHIPPING, EXCLUSIVES & MORE
        </Heading>
        <Text
          w={["18rem", "25rem", "30rem"]}
          m="auto"
          fontSize={["1rem", "1.2rem"]}
          lineHeight={1.5}
          fontStyle="italic"
        >
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
