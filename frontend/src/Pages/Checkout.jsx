import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Checkout = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const navigate = useNavigate();

  const subtotal =
    cart &&
    cart.length > 0 &&
    cart?.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

  const discount = Math.abs(subtotal - (subtotal * 10) / 100).toFixed(0);

  const handlePayment = () => {};

  return (
    <Box position="relative" top="81">
      <Flex
        gap={10}
        justify="center"
        p={{
          base: "1rem 1rem",
          sm: "1rem 5rem",
          md: "1rem 3rem",
          lg: "1rem 5rem",
          xl: "1rem 10rem",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        mb="10rem"
      >
        <Box w="100%" bg="rgba(0, 0, 0, 0.06)" p="1rem" borderRadius={5}>
          <Heading mb="1rem" fontSize="2xl">
            Billing details
          </Heading>
          <form>
            <FormControl isRequired>
              <Flex gap={5} mt="1rem">
                <Box w="100%">
                  <FormLabel fontSize="xs">FIRST NAME</FormLabel>
                  <Input bg="white" id="name" name="name" />
                </Box>
                <Box w="100%">
                  <FormLabel fontSize="xs">LAST NAME</FormLabel>
                  <Input bg="white" id="lastName" name="lastName" />
                </Box>
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="xs" mt="1rem">
                ADDRESS
              </FormLabel>
              <Input bg="white" id="address" name="address" />

              <Box w="100%" mt="1rem">
                <FormLabel fontSize="xs">TOWN / CITY</FormLabel>
                <Input bg="white" id="town" name="town" />
              </Box>

              <Flex gap={5} mt="1rem">
                <Box w="100%">
                  <FormLabel fontSize="xs">PINCODE</FormLabel>
                  <Input bg="white" id="postcode" name="postcode" />
                </Box>
                <Box w="100%">
                  <FormLabel fontSize="xs">PHONE</FormLabel>
                  <Input bg="white" id="phone" name="phone" />
                </Box>
              </Flex>
            </FormControl>

            <Flex gap={5} mt="1rem">
              <Box w="100%">
                <FormLabel fontSize="xs">ALTERNAME PHONE (OPTIONAL)</FormLabel>
                <Input bg="white" id="alternatePhone" name="alternatePhone" />
              </Box>
              <Box w="100%">
                <FormControl isRequired>
                  <FormLabel fontSize="xs">EMAIL ADDRESS</FormLabel>
                  <Input bg="white" id="email" name="email" />
                </FormControl>
              </Box>
            </Flex>
          </form>
        </Box>

        {/* cart details section  */}

        <Box w={{ base: "100%", sm: "100%", md: "60%", lg: "60%", xl: "60%" }}>
          <Flex
            justify="space-between"
            fontWeight={500}
            borderBottom="1px solid gray"
            m="0.5rem 1rem"
            pb="0.5rem"
          >
            <Text>PRODUCT</Text>
            <Text>SUBTOTAL</Text>
          </Flex>
          {cart &&
            cart.length > 0 &&
            cart.map((item) => (
              <Flex
                key={item._id}
                justify="space-between"
                p="1rem"
                fontWeight={500}
              >
                <Text fontSize="xs" w="70%" fontWeight={600}>
                  {item.name} x {item.quantity}
                </Text>
                <Text w="90px">
                  ₹{item.price * item.quantity}.00 (inclusive all taxes)
                </Text>
              </Flex>
            ))}

          <hr />
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              SUBTOTAL
            </Text>
            <Text>₹{subtotal}.00</Text>
          </Flex>
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              DISCOUNT (10% APPLIED)
            </Text>
            <Text>₹{discount}.00</Text>
          </Flex>

          <hr />
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              TOTAL
            </Text>
            <Text>₹{discount}.00</Text>
          </Flex>

          <Button
            w="100%"
            bg="blackAlpha.800"
            color="white"
            transition="500ms"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
            _hover={{ bg: "blackAlpha.900", letterSpacing: "1px" }}
            onClick={handlePayment}
          >
            PROCEED TO PAYMENT <MdOutlineArrowRightAlt />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
