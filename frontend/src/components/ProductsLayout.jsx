import { Box, Button, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductsLayout = (item) => {
  return (
    <>
      <Link to="#">
        <GridItem
          p="0.6rem 0.6rem 1rem"
          boxShadow="md"
          borderBottomRadius={4}
          transition="500ms"
          bg="RGBA(0, 0, 0, 0.02)"
          _hover={{ transform: `scale(1.02)`, boxShadow: "xl" }}
        >
          <Box>
            <Image w="100%" src={item.images[0].url} />
          </Box>
          <Text
            fontSize={["1rem", "1.1rem", "1rem", "1.1rem", "1.2rem"]}
            fontWeight={600}
            whiteSpace="nowrap"
            w="17rem"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {item.name}
          </Text>
          <Flex justify="space-between" align="center" pt="0.5rem">
            <Text color="#2C5282">{item.price.formattedValue}</Text>
            <Flex gap={2}>
              <Button _hover={{ bg: "none" }} variant="ghost">
                {<FiHeart fontSize="1.2rem" />}
              </Button>
              <Button _hover={{ bg: "#D69E2E" }} variant="outline" bg="#ECC94B">
                {<FiShoppingCart fontSize="1.2rem" />}
              </Button>
            </Flex>
          </Flex>
          <Text
            textAlign="center"
            fontWeight={600}
            fontSize="0.7rem"
            mt="0.6rem"
            color="#2B6CB0"
          >
            Fulfilled by <i>AN INDIAN BRAND</i>
          </Text>
        </GridItem>
      </Link>
    </>
  );
};

export default ProductsLayout;
