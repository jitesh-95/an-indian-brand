import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

const Mens = () => {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3002/mens?_page=${page}&_limit=12`)
      .then((r) => {
        setProducts(r.data);
        setTotal(r.headers["x-total-count"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleNext = () => {
    if (total > page * 12) {
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="category_banner">
        <img src="../.././assets/mens_banner.jpg" alt="" />
      </div>
      <div className="cardImages">
        <img src="../.././assets/card1.jpg" alt="" />
        <img src="../.././assets/card2.jpg" alt="" />
        <img src="../.././assets/card3.jpg" alt="" />
        <img src="../.././assets/card4.jpg" alt="" />
        <img src="../.././assets/card5.jpg" alt="" />
        <img src="../.././assets/card6.jpg" alt="" />
      </div>
      <div>
        <img src="../.././assets/freedelivery.jpg" alt="" />
      </div>
      <div className="totalCount">
        <p>
          {" "}
          Over {total} results for <span>Men</span>
        </p>
      </div>
      <div className="allproducts">
        {products
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.image} alt="" />
                <p className="bestSeller">Best seller</p>
                <h2 className="heading">{item.name}</h2>
                <p className="brand mensSeller">
                  Seller: <span>{item.brand}</span>
                </p>
                <div className="priceDiv">
                  <p className="price">
                    <span>₹ </span>
                    {item.price}
                  </p>
                  <button className="cartButton" onClick={handleCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="page">
        <button onClick={handlePrev} className={page === 1 ? "disable" : ""}>
          <ArrowLeftIcon w={6} h={6} />
        </button>
        <button
          onClick={handleNext}
          className={total <= page * 12 ? "disable" : ""}
        >
          <ArrowRightIcon w={6} h={6} />
        </button>
      </div>
    </div>
  );
};

export default Mens;
