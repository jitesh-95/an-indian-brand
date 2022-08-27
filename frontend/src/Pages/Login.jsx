import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import LoginButtons from "../components/LoginButtons";

export default function Login() {
  const [form, setForm] = useState({});
  // const { login } = useContext(AuthContext);
  const toast = useToast();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    if (form.email && form.password) {
      // login();
    } else {
      toast({
        title: "Something Went Wrong.",
        description: "Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Flex bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy seamless <Link color={"blue.400"}>delivery</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <span>
                    New User ? Click{" "}
                    <NavLink
                      to="/signup"
                      style={{
                        color: "blue",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Here{" "}
                    </NavLink>
                  </span>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <LoginButtons />
    </div>
  );
}
