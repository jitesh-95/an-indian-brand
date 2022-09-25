import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { Dna } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../redux/appReducer/ordersReducer/ordersAction";
import OrdersLayout from "../components/OrdersLayout";

const Orders = () => {
  const isLoading = useSelector((state) => state.orderReducer.isLoading);
  const ordersData = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ordersData.length === 0) {
      dispatch(getOrders());
    }
  }, []);

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
            YOUR ORDERS
          </Heading>

          {ordersData.length > 0 ? (
            ordersData.map((item) => (
              <Box
                key={item._id}
                mt="2rem"
                p={{
                  base: "1rem 0.5rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: "1rem 6rem",
                  xl: "1rem 8rem",
                  "2xl": "1rem 8rem",
                }}
              >
                <Text
                  mb="0.8rem"
                  borderBottom="2px solid #2B6CB0"
                  maxW="max-content"
                  fontWeight={600}
                >
                  Orders On: {item.date}
                </Text>
                <Grid
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
                  <OrdersLayout item={item} />
                </Grid>
              </Box>
            ))
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
                ...No Data, Shop Now...
              </Text>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Orders;
