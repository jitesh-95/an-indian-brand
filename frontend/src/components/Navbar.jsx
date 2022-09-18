import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiHeart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isopen, onopen, onclose } = useDisclosure();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const handleLogin = () => {
    if (isAuth) {
      navigate("/");
      localStorage.removeItem("indianBrandToken");
      return;
    }
    navigate("/login");
    // }
  };

  return (
    <Flex
      justify="space-between"
      position="fixed"
      w="100%"
      zIndex={10}
      bg="white"
      p={{
        base: "0 1rem",
        sm: "0 2rem",
        md: "0 3rem",
        lg: "0 4rem",
        xl: "0 5rem",
        "2xl": "0 5rem",
      }}
      align="center"
    >
      <Flex align="center" gap={[2, 2, 3, 4, 4, 4]}>
        <Link to="/">
          <Image
            h={["3rem", "3rem", "4rem", "4rem", "4rem", "4rem"]}
            src="../.././logo.png"
          />
        </Link>
        <Menu isOpen={isOpen}>
          <MenuButton
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            // _hover={{ borderBottom: "2px solid" }}
            transition="300ms"
            fontSize={{
              base: "0.7rem",
              sm: "0.8rem",
              md: "0.8rem",
              lg: "1rem",
              xl: "1rem",
            }}
          >
            SHOP{" "}
            {
              <HiOutlineArrowSmDown
                style={{ display: "inline-block", marginLeft: "-5px" }}
              />
            }
          </MenuButton>
          <MenuList mt="-10px" onMouseLeave={onClose} onMouseEnter={onOpen}>
            <Link to="/mens">
              <MenuItem
                transition="500ms"
                _hover={{
                  bg: "#A0AEC0",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                MEN
              </MenuItem>
            </Link>
            <Link to="/womens">
              <MenuItem
                transition="500ms"
                _hover={{
                  bg: "#A0AEC0",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                WOMEN
              </MenuItem>
            </Link>
            <Link to="/kids">
              <MenuItem
                transition="500ms"
                _hover={{
                  bg: "#A0AEC0",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                KIDS
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Link to="/aboutus">
          <Text
            _hover={{ borderBottom: "2px solid" }}
            transition="300ms"
            fontSize={{
              base: "0.7rem",
              sm: "0.8rem",
              md: "0.8rem",
              lg: "1rem",
              xl: "1rem",
            }}
          >
            ABOUT
          </Text>
        </Link>
      </Flex>

      <Flex align="center" gap={[2, 2, 3, 4, 4, 4]}>
        <Box cursor="pointer">
          <Menu isOpen={isopen}>
            <MenuButton>
              <Icon as={FiUser} w={[3.5, 4, 5, 5, 6]} h={[3.5, 4, 5, 5, 6]} />
            </MenuButton>
            <MenuList mt="-10px" onMouseLeave={onclose} onMouseEnter={onopen}>
              <Link to="/orders">
                <MenuItem
                  transition="500ms"
                  _hover={{
                    bg: "none",
                    fontWeight: "bold",
                    color: "green",
                    letterSpacing: "1px",
                  }}
                >
                  ORDERS
                </MenuItem>
              </Link>
              <MenuItem
                transition="500ms"
                _hover={{
                  bg: "none",
                  fontWeight: "bold",
                  color: "green",
                  letterSpacing: "1px",
                }}
                onClick={handleLogin}
              >
                {isAuth ? "LOGOUT" : "LOGIN"}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Link to="#">
          <Icon as={FiHeart} w={[3.5, 4, 5, 5, 6]} h={[3.5, 4, 5, 5, 6]} />
        </Link>

        <Link to="/cart">
          <Icon
            as={AiOutlineShoppingCart}
            w={[3.5, 4, 5, 5, 6]}
            h={[3.5, 4, 5, 5, 6]}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
