import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <div className="leftnav">
        <Link to="/">
          <img className="logo" src="logo.png" />
        </Link>
        <Menu isLazy>
          <MenuButton>Shop</MenuButton>
          <MenuList>
            <Link to="/mens">
              <MenuItem>For Men</MenuItem>
            </Link>
            <Link to="/womens">
              <MenuItem>For Women</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link to="/aboutus">About us</Link>
      </div>
      <div className="rightnav">
        <button className="login" onClick={handleLogin}>
          <Icon as={MdAccountCircle} w={6} h={6} />
          <span>{isAuth ? "SignOut" : "SignIn"}</span>
        </button>
        <Link to="/cart" className="cart">
          <Icon as={AiOutlineShoppingCart} w={6} h={6} />
        </Link>
        <Button
          onClick={toggleColorMode}
          p="5px"
          bg="#A0AEC0"
          borderRadius="50%"
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon color="black" />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
