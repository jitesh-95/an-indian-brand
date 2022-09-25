import { Box, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { setItemSession } from "../utils/sessionStorage";

const WishlistLayout = ({ item, onClick }) => {
  return (
    <GridItem
      position="relative"
      p="0.6rem 0.6rem 1rem"
      boxShadow="base"
      borderBottomRadius={4}
      transition="500ms"
      bg="#2B6CB0"
    >
      <Box>
        <Image w="100%" src={item.image} />
      </Box>
      <Box mt="0.5rem">
        <Link
          to={`/description/${item._id}`}
          onClick={() => setItemSession("singleProduct", item)}
        >
          <Text
            fontSize={["0.7rem", "0.9rem", "1rem"]}
            color="white"
            whiteSpace="nowrap"
            w="13rem"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {item.name}
          </Text>
        </Link>
      </Box>
      <Box position="absolute" top={2} right={2}>
        <Icon
          onClick={onClick}
          _hover={{ color: "#F56565" }}
          fontSize="1.5rem"
          cursor="pointer"
          as={MdOutlineDeleteForever}
        />
      </Box>
    </GridItem>
  );
};

export default WishlistLayout;
