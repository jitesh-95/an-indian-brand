import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <Box
      position="relative"
      top="81"
      mb="10rem"
      color="#3182CE"
      p={{
        base: "0.2rem 1rem",
        sm: "0.2rem 1rem",
        md: "0.3rem 1rem",
        lg: "0.3rem 5rem",
        xl: "0.3rem 8rem",
        "2xl": "0.3rem 8rem",
      }}
    >
      <Heading
        textAlign="center"
        m="1rem 0"
        color="#2C5282"
        fontSize={["1.6rem", "1.8rem", "1.9rem"]}
      >
        WHAT WE DO 😊
      </Heading>
      {/* 1st box  */}
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <Flex
          mt="5rem"
          mb="5rem"
          gap={5}
          align="center"
          direction={["column", "column", "row"]}
        >
          <Box w={["100%", "100%", "50%"]}>
            <Heading
              fontStyle="italic"
              mb="1rem"
              fontSize={["1.6rem", "1.8rem", "1.9rem"]}
            >
              AN INDIAN BRAND powers millions of businesses worldwide
            </Heading>
            <Text color="black" fontWeight={600}>
              The all-in-one commerce platform to start, run, and grow a
              business.
            </Text>
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Image src="../.././assets/about1.webp" alt="" />
          </Box>
        </Flex>
      </motion.div>

      {/* 2nd box  */}
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <Flex
          gap={5}
          mb="5rem"
          align="center"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Box w={["100%", "100%", "50%"]}>
            <Image src="../.././assets/about2.webp" alt="" />
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Heading
              fontStyle="italic"
              mb="1rem"
              fontSize={["1.6rem", "1.8rem", "1.9rem"]}
            >
              The first AN INDIAN BRAND store was our own
            </Heading>
            <Text color="black" fontWeight={600}>
              Over a decade ago, we started a store to sell snowboards online.
              None of the ecommerce solutions at the time gave us the control we
              needed to be successful—so we built our own. Today, businesses of
              all sizes use AN INDIAN BRAND, whether they’re selling online, in
              retail stores, or on-the-go.
            </Text>
          </Box>
        </Flex>
      </motion.div>

      {/* 3rd box */}
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <Box mb="8rem">
          <Heading
            as="h4"
            size="lg"
            fontStyle="italic"
            mb="1rem"
            fontSize={["1.6rem", "1.8rem", "1.9rem"]}
          >
            OUR MISSION
          </Heading>
          <Heading mb="1rem">Making commerce better for everyone</Heading>
          <Text color="black" fontWeight={600} maxW={["100%", "80%", "60%"]}>
            We help people achieve independence by making it easier to start,
            run, and grow a business. We believe the future of commerce has more
            voices, not fewer, so we’re reducing the barriers to business
            ownership to make commerce better for everyone.
          </Text>
        </Box>
      </motion.div>

      {/* 4th box  */}
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <Flex
          gap={8}
          mb="5rem"
          align="center"
          direction={["column", "column", "row"]}
        >
          <Box w={["100%", "100%", "50%"]}>
            <Heading
              fontStyle="italic"
              mb="1rem"
              fontSize={["1.6rem", "1.8rem", "1.9rem"]}
            >
              We’re building a 100-year company
            </Heading>
            <Text color="black" fontWeight={600}>
              AN INDIAN BRAND builds for the long term, and that means investing
              in our planet, our communities, and our people. Our Sustainability
              Fund and Social Impact initiatives include choosing renewable
              energy, reducing and offsetting our carbon emissions, and enabling
              an equitable and sustainable future by building products and
              programs to support our team and merchants.
            </Text>
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Image src="../.././assets/about3.webp" alt="" />
          </Box>
        </Flex>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <Box
          border="1px solid"
          textAlign="center"
          bg="blackAlpha.700"
          color="white"
          letterSpacing="2px"
          p="0.8rem"
          fontSize="1.3rem"
          fontWeight={600}
          transition="500ms"
          _hover={{ bg: "black", transform: "translateY(-10px)" }}
        >
          <Link to="/">Explore The Website Now</Link>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
