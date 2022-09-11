import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Cart = () => {
  const isLoading = useSelector((state) => state.cartReducer.isLoading);

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
        <>
          <Flex top="65" position="relative" mb="8rem">
            <Box>cart</Box>
            <Box
              bg="#fafafa"
              w={{ md: "100%", lg: "30%", xl: "30%" }}
              mt={{ md: "4rem", lg: 0, xl: 0 }}
              textAlign="start"
              p="1.5rem"
            >
              <Heading fontSize="3xl" fontWeight={600} p="2rem 0">
                Summary
              </Heading>
              <Flex justify="space-between" mb="2rem">
                <Text fontWeight={600}>Subtotal</Text>
                <Text>₹1000.00</Text>
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
        </>
      )}
    </>
  );
};

export default Cart;
