import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CartLayout from "../components/CartLayout";
import { useEffect } from "react";
import {
  deleteCartItem,
  getProductsFromCart,
} from "../redux/appReducer/cartReducer/cartAction";

const Cart = () => {
  const isLoading = useSelector((state) => state.cartReducer.isLoading);
  const allProducts = useSelector((state) => state.cartReducer.cartProducts);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();

  const getProducts = () => {
    dispatch(getProductsFromCart()).then((r) => {
      if (r.payload.cartProducts.length > 0) {
        let sum = r.payload.cartProducts
          .map((item) => item.price * item.quantity)
          .reduce((a, b) => a + b, 0);
        setTotal(sum);
      }
    });
  };
  useEffect(() => {
    if (allProducts.length === 0) {
      getProducts();
    }
  }, []);

  const deleteItem = (id) => {
    dispatch(deleteCartItem(id)).then((r) => {
      if (r.payload.response === true) {
        getProducts();
        return toast({
          title: "Item deleted successfully 🎉",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      toast({
        title: "Item Not Found!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    });
  };

  return (
    <>
      {isLoading ? (
        <Flex w="100%" align="center" justify="center">
          <Dna
            visible={true}
            height="40%"
            width="40%"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </Flex>
      ) : (
        <Box top="65" position="relative" mb="8rem">
          <Flex justify="center" gap={5}>
            <Box
              w={{ md: "100%", lg: "50%", xl: "50%" }}
              bg="blackAlpha.50"
              borderRadius={5}
              p="1rem"
            >
              <Text fontSize={["1rem", "1.5rem"]} mb="0.8rem" fontWeight={600}>
                Bag
              </Text>
              {allProducts.length > 0 ? (
                allProducts.map((item) => (
                  <CartLayout
                    key={item._id}
                    item={item}
                    onClick={() => deleteItem(item._id)}
                    getProducts={getProducts}
                  />
                ))
              ) : (
                <Box>
                  <Image m="auto" w="50%" src="../.././no_data.svg" />
                  <Text
                    fontSize="1.2rem"
                    fontWeight={600}
                    textAlign="center"
                    mt="1rem"
                    color="#6c63ff"
                  >
                    ...No Data, Shop Now...
                  </Text>
                </Box>
              )}
            </Box>
            <Box
              borderRadius={5}
              w={{ md: "100%", lg: "30%", xl: "30%" }}
              textAlign="start"
              p="0 1.5rem"
            >
              <Heading fontSize="3xl" fontWeight={600} p="1rem 0 2rem 0">
                Summary
              </Heading>
              <Flex justify="space-between" mb="2rem">
                <Text fontWeight={600}>Subtotal</Text>
                <Text>₹{total}.00</Text>
              </Flex>
              <Button
                w="100%"
                bg="#ffce61"
                transition="500ms"
                p="1.5rem"
                mt="0.5rem"
                borderRadius={4}
                _hover={{ bg: "#D69E2E", letterSpacing: "1px" }}
              >
                Proceed to Checkout <MdOutlineArrowRightAlt />
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Cart;
