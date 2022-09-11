import { Box, Button, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductsLayout = ({ image, name, price, _id, onClick }) => {
  return (
    <>
      <Link to={`/description/${_id}`} onClick={onClick}>
        <GridItem
          p="0.6rem 0.6rem 1rem"
          boxShadow="md"
          borderBottomRadius={4}
          transition="500ms"
          bg="RGBA(0, 0, 0, 0.02)"
          _hover={{ transform: `scale(1.02)`, boxShadow: "xl" }}
        >
          <Box>
            <Image w="100%" src={image} />
          </Box>
          <Text
            fontSize={["1rem", "1.1rem", "1rem", "1.1rem", "1.2rem"]}
            fontWeight={600}
            whiteSpace="nowrap"
            w="17rem"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {name}
          </Text>
          <Text
            pl="0.5rem"
            fontWeight={600}
            fontSize="0.7rem"
            mt="0.1rem"
            bg="#4299E1"
            color="white"
            w="70%"
            clipPath="polygon(92% 0, 100% 50%, 92% 100%, 0 100%, 2% 50%, 0 0)"
          >
            Fulfilled by <i>AN INDIAN BRAND</i>
          </Text>
          <Flex justify="space-between" align="center" pt="0.5rem">
            <Text color="#2C5282">
              ₹{price}{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "black",
                  marginLeft: "0.2rem",
                  fontSize: "0.8rem",
                }}
              >
                ₹{price + 100}
              </span>
            </Text>
          </Flex>
        </GridItem>
      </Link>
    </>
  );
};

export default ProductsLayout;
