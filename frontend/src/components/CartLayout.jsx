import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../redux/appReducer/cartReducer/cartAction";

const CartLayout = ({ item, onClick, getProducts }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const isLoading = useSelector((state) => state.cartReducer.isLoading);

  return (
    <Flex
      gap={5}
      align="center"
      boxShadow="sm"
      p="0.5rem"
      bg="whiteAlpha.800"
      mb="0.8rem"
    >
      <Box w="17%" h="150px">
        <Image w="100%" h="100%" src={item.image} />
      </Box>
      <Flex justify="space-between" w="80%">
        <Box>
          <Text fontSize={["1.3rem"]} fontWeight={600}>
            {item.name}
          </Text>
          <Text fontSize="1.1rem" color="gray">
            ₹ {item.price}.00
          </Text>
          <Text fontSize="1.1rem" color="gray" textTransform="capitalize">
            {item.category}'s clothing
          </Text>
          <Text fontSize="1.1rem" color="gray">
            Size: {item.size}
          </Text>
          <Flex mt="0.5rem" align="center" gap={1}>
            <Text fontSize="1.1rem" color="gray" mr="1rem">
              Quantity:
            </Text>
            <Button
              variant="outline"
              size="sm"
              fontSize="1.2rem"
              disabled={itemQuantity === 1}
              isLoading={isLoading}
            >
              -
            </Button>
            <Text bg="blue.100" borderRadius="50%" p="0.1rem 0.5rem">
              {itemQuantity}
            </Text>
            <Button
              variant="outline"
              size="sm"
              disabled={itemQuantity === 5}
              fontSize="1.2rem"
              isLoading={isLoading}
            >
              +
            </Button>
          </Flex>
        </Box>
        <Flex direction="column" gap={2}>
          <Icon as={FiHeart} fontSize="1.4rem" cursor="pointer" />
          <Icon
            as={MdOutlineDeleteForever}
            fontSize="1.5rem"
            cursor="pointer"
            onClick={onClick}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartLayout;
