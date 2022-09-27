import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authReducer/authAction";
import { useEffect } from "react";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(false);
  const [notFilled, setNotFilled] = useState({ email: false, password: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    // page title
    const title = "Signup | AN INDIAN BRAND";
    document.title = title;
  }, []);

  const handleSignup = () => {
    const params = { email, password };
    if (!email) {
      return setNotFilled({ email: true });
    }
    if (!password) {
      return setNotFilled({ password: true });
    }
    dispatch(register(params)).then((r) => {
      if (r.payload.data.message === "Done") {
        toast({
          title: "We've created your account successfully",
          description: "Please login",
          status: "success",
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });
        setExist(false);
        setEmail("");
        setPassword("");
        navigate("/login");
        return;
      }
      if (r.payload.data.message === "Exists") {
        setPassword("");
        setExist(true);
        return;
      }
      return {
        title: "Something went wrong.",
        description: "Please try again later.",
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      };
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} w={"md"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
            textAlign={"center"}
          >
            Register With Us
          </Heading>
          <Text
            fontSize={["md", "md", "md", "lg", "lg", "lg"]}
            color={"gray.600"}
          >
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={6}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                isInvalid={notFilled.email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setExist(false);
                }}
                value={email}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  isInvalid={notFilled.password || exist}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box
              fontSize="0.9rem"
              color="red"
              textAlign="center"
              display={exist ? "block" : "none"}
            >
              <Text>User already exits. Please login!</Text>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                isLoading={isLoading}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" color={"blue"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
