import { Box, Button, Center, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/appReducer/appAction";
import CardsAdd from "../components/CardsAdd";

const Mens = () => {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResults] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts()).then((r) => {
        setProducts(r.payload.results);
        setTotalResults(r.payload.pagination.totalNumberOfResults);
        setTotalPage(r.payload.pagination.numberOfPages);
        console.log(r.payload.results);
      });
    }
  }, []);
  // setProducts(r.payload.results);
  // setTotal(r.headers["x-total-count"]);

  const handleNext = () => {
    // if (total > page * 12) {
    //   setPage(page + 1);
    // }
  };
  const handlePrev = () => {
    // if (page > 1) {
    //   setPage(page - 1);
    // }
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <Box position="relative" top="65" pb="10rem">
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

      <Box>
        <Image src="../.././assets/freedelivery.jpg" alt="" />
      </Box>
      <Box>
        <Button onClick={handlePrev}>
          <ArrowLeftIcon w={6} h={6} />
        </Button>
        <Button
          onClick={handleNext}
          // className={total <= page * 12 ? "disable" : ""}
        >
          <ArrowRightIcon w={6} h={6} />
        </Button>
      </Box>
    </Box>
  );
};

export default Mens;
