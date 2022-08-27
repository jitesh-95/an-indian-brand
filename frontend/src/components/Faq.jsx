import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const faqData = [
  {
    id: 1,
    heading: "I want to track my order",
    body: "Go to My Orders in your AN INDIAN BRAND account to track your package.",
  },
  {
    id: 2,
    heading: "How do I track my AN INDIAN BRAND delivery?",
    body: "You can track the location of your package by entering your tracking ID here.",
  },
  {
    id: 3,
    heading: "How do I find my order details?",
    body: "Go to My Orders in your AN INDIAN BRAND account to find details for all your orders.",
  },
  {
    id: 4,
    heading: "What if I miss my AN INDIAN BRAND order delivery?",
    body: "Do not worry,the delivery agent will try to deliver again on the next working day. You can also call the delivery agent to get the latest delivery update.",
  },
  {
    id: 5,
    heading: "What can I return?",
    body: "You may request returns for most items you buy from the sellers listed on AN INDIAN BRAND. However, you can only return items explicitly identified as ‘returnable’ on the product detail page and/or our policy and within the ‘return window’ period.",
  },
  {
    id: 6,
    heading: "Refund Policy",
    body: "Once we receive your return or the seller notifies us of receipt of return, as the case may be, a refund is issued to the original payment method (in case of pre-paid transactions) or to your bank account.",
  },
];

const Faq = () => {
  return (
    <Box
      w={{ base: "95%", sm: "95%", md: "90%", lg: "85%", xl: "85%" }}
      m={{
        base: "3rem auto",
        sm: "5rem auto",
        md: "5rem auto",
        lg: "7rem auto",
        xl: "8rem auto",
      }}
    >
      <Text fontSize="1.5rem">FAQ's</Text>
      <Accordion allowToggle>
        {faqData.map((item) => (
          <AccordionItem key={item.id}>
            <h2>
              <AccordionButton
                _expanded={{ bg: "BlackAlpha300", color: "black" }}
              >
                <Box flex="1" textAlign="left" color="#4299E1">
                  {item.heading}
                </Box>
                <AccordionIcon color="#38B2AC" fontSize="2xl" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="accorbody">
              {item.body}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faq;
