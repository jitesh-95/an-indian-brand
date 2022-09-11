import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getItemSession } from "../utils/sessionStorage";
import { Dna } from "react-loader-spinner";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addProductsToCart } from "../redux/appReducer/cartReducer/cartAction";
// import { setItemLocal } from "../utils/localStorage";

const Description = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isLoading = useSelector((state) => state.cartReducer.isLoading);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const product = getItemSession("singleProduct");
  const { code, name, image, price, _id, sizes, category } = product;
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState();
  const [toggle, setToggle] = useState(false);

  // adding to cart
  const handleCart = () => {
    if (!isAuth) {
      toast({
        title: "Please login first!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/login", { state: { from: location.pathname } });
      return;
    }
    if (!size || !quantity) {
      toast({
        title: "Please select the details first!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const item = {
      name: name,
      image: image,
      price: price,
      size: size,
      quantity: +quantity,
      category: category,
    };
    dispatch(addProductsToCart(item)).then((r) => {
      if (r.payload.response === false) {
        return toast({
          title: "Item is already added!",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      }
      toast({
        title: "Congratulations 🎉",
        description: "Item added successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      setToggle(true);
      setTimeout(() => {
        setToggle(false);
      }, 2000);
    });
  };

  return (
    <>
      {!product ? (
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
          <Flex
            justify="center"
            align={["center", "center", "start"]}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            p={{
              base: "1rem 1rem 5rem 1rem",
              sm: "1rem 1rem 5rem 1rem",
              md: "1rem 0.5rem 5rem 0.5rem",
              lg: "1rem 6rem 5rem 6rem",
              xl: "1rem 8rem 5rem 8rem",
              "2xl": "1rem 8rem 5rem 8rem",
            }}
            gap={10}
          >
            <Box w={["100%", "90%", "40%"]}>
              <Image w="100%" src={image} />
            </Box>
            <Box w={["100%", "90%", "55%"]}>
              <Heading
                fontSize={["1.5rem", "1.7rem", "2rem"]}
                fontWeight={600}
                mb="1rem"
                maxW="max-content"
                className="singleProductName"
                textTransform="uppercase"
              >
                {name}
              </Heading>
              <Text display="inline-block" mr="0.5rem" fontWeight={600}>
                Price:{" "}
                <span
                  style={{
                    color: "#E53E3E",
                    fontSize: "1.1rem",
                    marginLeft: "2rem",
                  }}
                >
                  ₹{price}
                </span>
              </Text>
              <Text display="inline-block" fontSize="0.9rem">
                (Inclusive of all taxes)
              </Text>
              <Text
                p="0.2rem 0.5rem"
                fontWeight={600}
                fontSize="0.8rem"
                m="0.5rem 0"
                bg="#4299E1"
                color="white"
                w={["70%", "50%", "50%", "40%", "35%"]}
                clipPath="polygon(92% 0, 100% 50%, 92% 100%, 0 100%, 2% 50%, 0 0)"
              >
                Fulfilled by <i>AN INDIAN BRAND</i>
              </Text>
              <Text fontSize="1.3rem" fontWeight={700}>
                Size:
              </Text>
              <Select
                placeholder="Select Size"
                size="sm"
                maxW="10rem"
                mb="1.5rem"
                onChange={(e) => setSize(e.target.value)}
              >
                {sizes.length > 0 &&
                  sizes.map((item, index) => (
                    <option key={index} value={item.filterCode}>
                      {item.filterCode}
                    </option>
                  ))}
              </Select>
              <Text fontSize="1.3rem" fontWeight={700}>
                Quantity:
              </Text>
              <Select
                placeholder="Select Quantity"
                size="sm"
                maxW="10rem"
                mb="1.5rem"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>

              <Flex
                direction="column"
                maxW={["100%", "95%", "70%", "60%", "55%", "50%"]}
                gap={4}
              >
                <Button
                  isLoading={isLoading}
                  size="lg"
                  bg="#ECC94B"
                  transition="500ms"
                  _hover={{ bg: "#D69E2E", letterSpacing: "1px" }}
                  borderRadius={0}
                  onClick={handleCart}
                >
                  {toggle ? "Added" : "Add to Cart"}
                  <Icon
                    as={toggle ? MdDone : AiOutlineShoppingCart}
                    ml="0.6rem"
                  />
                </Button>
                <Button
                  size="lg"
                  bg="#FEB2B2"
                  transition="500ms"
                  _hover={{ bg: "#F56565", letterSpacing: "1px" }}
                  borderRadius={0}
                >
                  Add to Wish List{" "}
                  <Icon as={FiHeart} ml="0.6rem" fontSize="1.3rem" />
                </Button>
              </Flex>
              <Heading fontSize="1.4rem" fontWeight={600} mt="1.5rem">
                Description:
              </Heading>
              <Text maxW={["100%", "95%", "90%", "70%", "65%", "60%"]}>
                {name} in cotton twill with a collar in soft corduroy. Relaxed
                fit with a zip down the front, flap chest pockets and a yoke at
                the back. Long sleeves with buttoned cuffs, and a straight-cut
                hem.
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Description;
