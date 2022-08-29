import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const CardsAdd = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
        "2xl": "repeat(3, 1fr)",
      }}
      gap={4}
      p={{
        base: "1rem 1rem 15rem 1rem",
        sm: "1rem 1rem 15rem 1rem",
        md: "1rem 0.5rem 15rem 0.5rem",
        lg: "1rem 6rem 15rem 6rem",
        xl: "1rem 8rem 15rem 8rem",
        "2xl": "1rem 8rem 15rem 8rem",
      }}
    >
      <GridItem>
        <Image src="../.././assets/card1.jpg" alt="" />
      </GridItem>
      <GridItem>
        <Image src="../.././assets/card2.jpg" alt="" />
      </GridItem>
      <GridItem>
        <Image src="../.././assets/card3.jpg" alt="" />
      </GridItem>
      <GridItem>
        <Image src="../.././assets/card4.jpg" alt="" />
      </GridItem>
      <GridItem>
        <Image src="../.././assets/card5.jpg" alt="" />
      </GridItem>
      <GridItem>
        <Image src="../.././assets/card6.jpg" alt="" />
      </GridItem>
    </Grid>
  );
};

export default CardsAdd;
