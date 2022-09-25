import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {
  getProductsFromCart,
  updateCartItem,
} from "../redux/appReducer/cartReducer/cartAction";

const CartLayout = ({ item, onClick }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const isLoading = useSelector((state) => state.cartReducer.isLoading);
  const dispatch = useDispatch();
  const toast = useToast();

  const incItemQuantity = () => {
    setItemQuantity(itemQuantity + 1);
    dispatch(updateCartItem(item._id, { quantity: itemQuantity + 1 })).then(
      (r) => {
        if (r.payload.response === true) {
          dispatch(getProductsFromCart());
          toast({
            title: "Quantity Updated successfully 🎉",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          return;
        }
        toast({
          title: "Something went wrong 😢",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    );
  };

  const decItemQuantity = () => {
    setItemQuantity(itemQuantity - 1);
    dispatch(updateCartItem(item._id, { quantity: itemQuantity - 1 })).then(
      (r) => {
        if (r.payload.response === true) {
          dispatch(getProductsFromCart());
          toast({
            title: "Quantity Updated successfully 🎉",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          return;
        }
        toast({
          title: "Something went wrong 😢",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    );
  };

  return (
    <Flex
      gap={5}
      align="center"
      boxShadow="sm"
      p="0.5rem"
      bg="whiteAlpha.800"
      mb="0.8rem"
      direction={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "row",
        xl: "row",
      }}
    >
      <Box w={["60%", "25%", "21%", "18%", "17%"]} h="180px">
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
              variant="ghost"
              _hover={{ bg: "black", color: "white" }}
              transition="500ms"
              size="sm"
              fontSize="1.2rem"
              disabled={itemQuantity === 1}
              isLoading={isLoading}
              onClick={decItemQuantity}
            >
              <Icon as={AiOutlineMinusCircle} />
            </Button>
            <Text
              bg="gray.500"
              p="0.1rem 0.5rem"
              color="white"
              borderRadius={5}
            >
              {itemQuantity}
            </Text>
            <Button
              variant="ghost"
              size="sm"
              _hover={{ bg: "black", color: "white" }}
              transition="500ms"
              disabled={itemQuantity === 5}
              fontSize="1.2rem"
              isLoading={isLoading}
              onClick={incItemQuantity}
            >
              <Icon as={AiOutlinePlusCircle} />
            </Button>
          </Flex>
        </Box>
        <Flex direction="column" gap={2}>
          <Icon
            as={MdOutlineDeleteForever}
            _hover={{ color: "#F56565" }}
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
