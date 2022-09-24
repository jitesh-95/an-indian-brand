import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Box position="fixed" bottom={8} right={8}>
      <Icon
        as={FaArrowCircleUp}
        color="blackAlpha.700"
        borderRadius="50%"
        fontSize="2rem"
        cursor="pointer"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Box>
  );
};

export default ScrollToTop;
