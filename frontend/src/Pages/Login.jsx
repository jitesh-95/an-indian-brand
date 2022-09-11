import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  InputGroup,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer/authAction";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [exist, setExist] = useState(false);
  const [notFilled, setNotFilled] = useState({ email: false, password: false });
  const { state } = useLocation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setExist(false);
    setNotFilled({ email: false, password: false });
  };

  const handleSubmit = () => {
    if (!form.email) {
      return setNotFilled({ email: true });
    }
    if (!form.password) {
      return setNotFilled({ password: true });
    }
    dispatch(login(form)).then((r) => {
      if (r.payload.data.response === true) {
        const comingFrom = state?.from || "/";
        navigate(comingFrom, { replace: true });
        return setExist(false);
      } else {
        setExist(true);
        return setNotFilled({ email: true, password: true });
      }
    });
  };

  return (
    <Box
      position="relative"
      top="65"
      bg={useColorModeValue("gray.50", "gray.800")}
      pb="10rem"
    >
      <Flex>
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
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  isInvalid={notFilled.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    isInvalid={notFilled.password}
                    onChange={handleChange}
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
                <Text>*Invalid Credentials!</Text>
              </Box>
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
                  isLoading={isLoading}
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
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
