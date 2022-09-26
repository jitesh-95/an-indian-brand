import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "address":
      return {
        ...state,
        address: action.payload,
      };
    case "city":
      return {
        ...state,
        city: action.payload,
      };
    case "pincode":
      return {
        ...state,
        pincode: action.payload,
      };
    case "phone":
      return {
        ...state,
        phone: action.payload,
      };
    case "alternateMobile":
      return {
        ...state,
        alternateMobile: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    default: {
      return state;
    }
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  pincode: "",
  phone: "",
  alternateMobile: "",
  email: "",
};

const Checkout = () => {
  const [form, setForm] = useReducer(reducer, initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  let cart = JSON.parse(localStorage.getItem("cart"));
  const subtotal =
    cart &&
    cart.length > 0 &&
    cart?.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

  const discount = Math.abs((subtotal * 10) / 100).toFixed(0);

  const handlePayment = () => {
    if (
      !form.firstName ||
      !form.address ||
      !form.city ||
      !form.pincode ||
      form.phone.length !== 10 ||
      !form.email
    ) {
      return toast({
        title: "Please fill all details",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    onOpen();
  };

  const handleProceed = () => {
    onClose();
    navigate("/payment");
    localStorage.setItem("total", subtotal - discount);
  };

  return (
    <Box position="relative" top="81" minH="95vh">
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
          <Flex gap={5} mt="1rem">
            <FormControl isRequired>
              <Box w="100%">
                <FormLabel fontSize="xs" fontWeight={600}>
                  FIRST NAME
                </FormLabel>
                <Input
                  bg="white"
                  id="name"
                  name="name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ type: "firstName", payload: e.target.value })
                  }
                />
              </Box>
            </FormControl>
            <Box w="100%">
              <FormLabel fontSize="xs" fontWeight={600}>
                LAST NAME
              </FormLabel>
              <Input
                bg="white"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ type: "lastName", payload: e.target.value })
                }
              />
            </Box>
          </Flex>

          <FormControl isRequired>
            <FormLabel fontSize="xs" mt="1rem" fontWeight={600}>
              ADDRESS
            </FormLabel>
            <Input
              bg="white"
              id="address"
              name="address"
              value={form.address}
              onChange={(e) =>
                setForm({ type: "address", payload: e.target.value })
              }
            />

            <Box w="100%" mt="1rem">
              <FormLabel fontSize="xs" fontWeight={600}>
                TOWN / CITY
              </FormLabel>
              <Input
                bg="white"
                id="town"
                name="town"
                value={form.city}
                onChange={(e) =>
                  setForm({ type: "city", payload: e.target.value })
                }
              />
            </Box>

            <Flex gap={5} mt="1rem">
              <Box w="100%">
                <FormLabel fontSize="xs" fontWeight={600}>
                  PINCODE
                </FormLabel>
                <Input
                  bg="white"
                  id="pincode"
                  name="pincode"
                  maxLength={6}
                  value={form.pincode}
                  onChange={(e) =>
                    setForm({ type: "pincode", payload: e.target.value })
                  }
                />
              </Box>
              <Box w="100%">
                <FormLabel fontSize="xs" fontWeight={600}>
                  PHONE
                </FormLabel>
                <Input
                  bg="white"
                  id="phone"
                  name="phone"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ type: "phone", payload: e.target.value })
                  }
                />
              </Box>
            </Flex>
          </FormControl>

          <Flex gap={5} mt="1rem" mb="1rem">
            <Box w="100%">
              <FormLabel fontSize="xs" fontWeight={600}>
                ALTERNAME PHONE (OPTIONAL)
              </FormLabel>
              <Input
                bg="white"
                id="alternateMobile"
                name="alternateMobile"
                maxLength={10}
                value={form.alternateMobile}
                onChange={(e) =>
                  setForm({ type: "alternateMobile", payload: e.target.value })
                }
              />
            </Box>
            <Box w="100%">
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight={600}>
                  EMAIL ADDRESS
                </FormLabel>
                <Input
                  bg="white"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
          </Flex>
        </Box>

        {/* confirming by modal  */}

        <Modal size="xs" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent>
            <ModalHeader>Do you want to proceed ?</ModalHeader>
            <ModalBody>This will take you to the payment page.</ModalBody>

            <ModalFooter>
              <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="facebook" onClick={handleProceed}>
                Proceed
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

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
            <Text fontSize="xs" fontWeight={600} color="red.400">
              DISCOUNT (10% APPLIED)
            </Text>
            <Text color="red.400">₹{discount}.00</Text>
          </Flex>

          <hr />
          <Flex justify="space-between" p="1rem" fontWeight={500}>
            <Text fontSize="xs" fontWeight={600}>
              TOTAL
            </Text>
            <Text>₹{subtotal - discount}.00</Text>
          </Flex>

          <Button
            w="100%"
            bg="blackAlpha.800"
            color="white"
            transition="500ms"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
            _focus={{
              outline: "none",
              bg: "blackAlpha.900",
            }}
            _active={{ transform: "scale(0.9)" }}
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
