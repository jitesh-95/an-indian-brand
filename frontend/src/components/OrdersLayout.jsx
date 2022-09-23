import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const OrdersLayout = ({ item }) => {
  //   console.log(item);
  return (
    <>
      {item.order.length > 0 &&
        item.order.map((el) => (
          <GridItem
            p="0.6rem 0.6rem 1rem"
            boxShadow="base"
            borderBottomRadius={4}
            transition="500ms"
            bg="RGBA(0, 0, 0, 0.02)"
            key={el.id}
          >
            <Box>
              <Image w="100%" src={el.image} />
            </Box>
            <Box mt="0.5rem">
              <Text
                fontSize={["0.7rem", "0.9rem", "1rem"]}
                color="blackAlpha.700"
              >
                {el.name}
              </Text>
              <Text
                fontSize={["0.7rem", "0.9rem", "1rem"]}
                color="blackAlpha.600"
              >
                ₹ {el.price}
              </Text>
            </Box>
          </GridItem>
        ))}
    </>
  );
};

export default OrdersLayout;
