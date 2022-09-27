import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import WishlistLayout from "../components/WishlistLayout";
import {
  deleteWishlistItem,
  getWishlistProducts,
} from "../redux/appReducer/wishlistReducer/wishlistAction";

const WishList = () => {
  const isLoading = useSelector((state) => state.wishlistReducer.isLoading);
  const { wishlistProducts, totalQuantity } = useSelector(
    (state) => state.wishlistReducer
  );
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    // page title
    const title = "WishList | AN INDIAN BRAND";
    document.title = title;

    if (wishlistProducts.length === 0) {
      dispatch(getWishlistProducts());
    }
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteWishlistItem(id)).then((r) => {
      if (r.payload.response === true) {
        dispatch(getWishlistProducts());
        return toast({
          title: "Item removed successfully 🎉",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      toast({
        title: "Something went wrong!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    });
  };

  return (
    <Box position="relative" top="65" mb="10rem" minH="80vh">
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
          <Heading
            fontWeight={600}
            bg="blackAlpha.300"
            color="gray.800"
            fontSize={["1.2rem", "1.5rem", "2rem", "2rem"]}
            p={{
              base: "0.2rem 1rem",
              sm: "0.2rem 1rem",
              md: "0.3rem 0.5rem",
              lg: "0.3rem 6rem",
              xl: "0.3rem 8rem",
              "2xl": "0.3rem 8rem",
            }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 15px 20px"
          >
            YOUR WISHLIST{" "}
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#2B6CB0",
              }}
            >
              / {totalQuantity} prodcuts
            </span>
          </Heading>

          {wishlistProducts.length > 0 ? (
            <Grid
              mt="1rem"
              p={{
                base: "1rem 0.5rem",
                sm: "1rem",
                md: "1rem",
                lg: "1rem 6rem",
                xl: "1rem 8rem",
                "2xl": "1rem 8rem",
              }}
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
                "2xl": "repeat(5, 1fr)",
              }}
              gap={[2, 4]}
              position="relative"
            >
              {wishlistProducts.map((item) => (
                <WishlistLayout
                  key={item._id}
                  item={item}
                  onClick={() => handleDelete(item._id)}
                />
              ))}
            </Grid>
          ) : (
            <Box mt="2rem">
              <Image m="auto" w="50%" src="../.././no_data.svg" />
              <Text
                fontSize="1.2rem"
                fontWeight={600}
                textAlign="center"
                mt="1rem"
                color="#6c63ff"
              >
                ...No Data, WishList Now...
              </Text>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default WishList;
