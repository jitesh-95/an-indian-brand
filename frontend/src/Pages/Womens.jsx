import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";

import ProductsLayout from "../components/ProductsLayout";
import { getProductsWomen } from "../redux/appReducer/womenReducer/womenAction";
import { setItemSession } from "../utils/sessionStorage";
import FilterSort from "../components/FilterSort";

const Womens = () => {
  const allProducts = useSelector((state) => state.womenReducer.womenProducts);

  const isLoading = useSelector((state) => state.womenReducer.isLoading);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlPage = searchParams.get("page");
  const urlSort = searchParams.get("sortBy");
  const [page, setPage] = useState(+urlPage || 1);
  const [totalResults, setTotalResults] = useState();

  const dispatch = useDispatch();

  // calling one time
  useEffect(() => {
    dispatch(getProductsWomen(page, urlSort))
      .then((r) => {
        if (r.type === "GET_PRODUCTS_SUCCESS_WOMEN") {
          setTotalResults(r.payload.total);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, urlSort]);

  // setting params
  useEffect(() => {
    const params = {};
    page && (params.page = page);
    urlSort && (params.sortBy = urlSort);

    setSearchParams(params);
  }, [urlSort, page]);

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

  return (
    <Box position="relative" top="65" mb="10rem">
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
          >
            ALL WOMEN'S PRODUCTS
            <Text
              display="inline-block"
              fontSize="1.1rem"
              ml="0.5rem"
              fontWeight={400}
            >
              /{totalResults} Products
            </Text>
          </Heading>
          <FilterSort />
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
              base: "1rem 1rem 5rem 1rem",
              sm: "1rem 1rem 5rem 1rem",
              md: "1rem 0.5rem 5rem 0.5rem",
              lg: "1rem 6rem 5rem 6rem",
              xl: "1rem 8rem 5rem 8rem",
              "2xl": "1rem 8rem 5rem 8rem",
            }}
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
        </>
      )}
      <Box>
        <Image w="100%" src="../.././assets/freedelivery.jpg" alt="" />
      </Box>
    </Box>
  );
};

export default Womens;
