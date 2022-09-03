import { Box, Button, Center, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardsAdd from "../components/CardsAdd";
import ProductsLayout from "../components/ProductsLayout";
import { Dna } from "react-loader-spinner";
import { getProductsWomen } from "../redux/appReducer/womenReducer/womenAction";
import { setItemSession } from "../utils/sessionStorage";

const Womens = () => {
  const allProducts = useSelector((state) => state.womenReducer.womenProducts);

  const isLoading = useSelector((state) => state.womenReducer.isLoading);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlPage = searchParams.get("page");
  const [page, setPage] = useState(+urlPage || 1);
  const [totalResults, setTotalResults] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // calling one time
  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getProductsWomen(page))
        .then((r) => {
          if (r.type === "GET_PRODUCTS_SUCCESS_WOMEN") {
            setTotalResults(r.payload.total);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // setting params
  useEffect(() => {
    setSearchParams({ page: page });
    dispatch(getProductsWomen(page));
  }, [page]);

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(page + 1);
  };

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(page - 1);
  };

  const handleSingleProduct = (item) => {
    setItemSession("singleProduct", item);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <Box position="relative" top="65" mb="10rem">
      <Box>
        <Center>
          <Image
            w={["80%", "75%", "70%", "65%", "60%"]}
            src="../.././assets/mens_banner.jpg"
            alt=""
          />
        </Center>
      </Box>
      <CardsAdd />
      {isLoading && (
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
      )}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap={4}
        p={{
          base: "1rem 1rem 10rem 1rem",
          sm: "1rem 1rem 10rem 1rem",
          md: "1rem 0.5rem 10rem 0.5rem",
          lg: "1rem 6rem 10rem 6rem",
          xl: "1rem 8rem 10rem 8rem",
          "2xl": "1rem 8rem 10rem 8rem",
        }}
        top={70}
        position="relative"
      >
        {allProducts.length > 0 &&
          allProducts.map((item) => (
            <ProductsLayout
              key={item._id}
              {...item}
              onClick={() => handleSingleProduct(item)}
            />
          ))}
      </Grid>
      <Flex
        justify="space-between"
        p={{
          base: "0 1rem",
          sm: "0 1rem",
          md: "0 0.5rem",
          lg: "0 6rem",
          xl: "0 8rem",
          "2xl": "0 8rem",
        }}
      >
        <Button onClick={handlePrev} disabled={page === 1}>
          <HiArrowNarrowLeft fontSize="1.3rem" />
        </Button>
        <Button onClick={handleNext} disabled={totalResults <= page * 20}>
          <HiArrowNarrowRight fontSize="1.3rem" />
        </Button>
      </Flex>
      <Box>
        <Image w="100%" src="../.././assets/freedelivery.jpg" alt="" />
      </Box>
    </Box>
  );
};

export default Womens;
