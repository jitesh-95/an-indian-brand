import React from "react";
import { Link } from "react-router-dom";
import {
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
import { useDispatch, useSelector } from "react-redux";
import { ImMan, ImWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../redux/authReducer/authAction";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoginOpen, onLoginOpen, onLoginClose } = useDisclosure();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isAuth) {
      dispatch(logout());
      return navigate("/");
    }
    navigate("/login");
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
            fontWeight={600}
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
                fontWeight={600}
                icon={<ImMan fontSize="1.2rem" />}
                transition="300ms"
                _hover={{
                  fontWeight: "bold",
                  color: "#2B6CB0",
                  letterSpacing: "1px",
                }}
              >
                MEN
              </MenuItem>
            </Link>
            <Link to="/womens">
              <MenuItem
                fontWeight={600}
                icon={<ImWoman fontSize="1.2rem" />}
                transition="300ms"
                _hover={{
                  fontWeight: "bold",
                  color: "#2B6CB0",
                  letterSpacing: "1px",
                }}
              >
                WOMEN
              </MenuItem>
            </Link>
            <Link to="/kids">
              <MenuItem
                fontWeight={600}
                icon={<FaChild fontSize="1rem" />}
                transition="300ms"
                _hover={{
                  fontWeight: "bold",
                  color: "#2B6CB0",
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
            fontWeight={600}
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
        <Menu isOpen={isLoginOpen}>
          <MenuButton>
            <Icon
              as={FiUser}
              w={[3.5, 4, 5, 5, 6]}
              h={[3.5, 4, 5, 5, 6]}
              cursor="pointer"
            />
          </MenuButton>
          <MenuList onMouseLeave={onLoginClose} onMouseEnter={onLoginOpen}>
            <Link to="/orders">
              <MenuItem
                fontWeight={600}
                icon={<BsBagCheck fontSize="1rem" />}
                transition="300ms"
                _hover={{
                  bg: "none",
                  fontWeight: "bold",
                  color: "#2B6CB0",
                  letterSpacing: "1px",
                }}
              >
                ORDERS
              </MenuItem>
            </Link>
            <MenuItem
              fontWeight={600}
              icon={<AiOutlineLogout fontSize="1rem" />}
              transition="300ms"
              _hover={{
                bg: "none",
                fontWeight: "bold",
                color: "#2B6CB0",
                letterSpacing: "1px",
              }}
              onClick={handleLogin}
            >
              {isAuth ? "LOGOUT" : "LOGIN"}
            </MenuItem>
          </MenuList>
        </Menu>

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
