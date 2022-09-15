import { Box, Heading, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import Cleave from "cleave.js/react";
import "./CSS/Payment.css";

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png",
];

const Payment = () => {
  let total = localStorage.getItem("total");
  const [creditCardNum, setCreditCardNum] = useState("#### #### #### ####");
  const [cardType, setCardType] = useState("");
  const [cardHolder, setCardHolder] = useState("Your Full Name");
  const [expireMonth, setExpireMonth] = useState("MM");
  const [expireYear, setExpireYear] = useState("YYYY");
  const [cvv, setCvv] = useState();
  const toast = useToast();
  const [cardTypeUrl, setCardTypeUrl] = useState(
    "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
  );

  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
  };

  const handleType = (type) => {
    setCardType(type);

    if (type === "visa") {
      setCardTypeUrl(imageUrls[0]);
    } else if (type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
    } else if (type === "discover") {
      setCardTypeUrl(imageUrls[2]);
    } else if (type === "amex") {
      setCardTypeUrl(imageUrls[3]);
    } else if (type === "diners") {
      setCardTypeUrl(imageUrls[4]);
    } else if (type === "jcb") {
      setCardTypeUrl(imageUrls[5]);
    }
  };

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  };

  const handleCvv = (e) => [setCvv(e.target.value)];

  const handlePayment = (e) => {
    e.preventDefault();
    if (
      creditCardNum.length !== 16 ||
      !cardHolder ||
      !expireMonth ||
      !expireYear ||
      cvv.length !== 3
    ) {
      return toast({
        title: "Invalid Credentials!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    console.log(creditCardNum, cardHolder, expireMonth, expireYear, cvv);
  };

  // cleave.js logic

  return (
    <Box position="relative" top="220" mb="20rem">
      <div className="container">
        <form id="form" onSubmit={handlePayment}>
          <div id="card">
            <div className="header">
              <div className="sticker"></div>
              <div>
                <img className="logo" src={cardTypeUrl} alt="Card logo" />
              </div>
            </div>
            <div className="body">
              <h2 id="creditCardNumber">{creditCardNum}</h2>
            </div>
            <div className="footer">
              <div>
                <h5>Card Holder</h5>
                <h3>{cardHolder}</h3>
              </div>
              <div>
                <h5>Expires</h5>
                <h3>
                  {expireMonth} / {expireYear}
                </h3>
              </div>
            </div>
          </div>

          <div className="input-container mt">
            <h4>Enter card number</h4>
            <Cleave
              delimiter="-"
              options={{
                creditCard: true,
                onCreditCardTypeChanged: handleType,
              }}
              onChange={handleNum}
              placeholder="Please enter your credit card number"
            />
          </div>

          <div className="input-container">
            <h4>Card Holder</h4>
            <input
              onChange={handleCardHolder}
              type="text"
              placeholder="Please enter your full name"
              required
            />
          </div>

          <div className="input-grp">
            <div className="input-container">
              <h4>Expiration Year</h4>
              <select value={expireYear} onChange={handleExpYear}>
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="input-container">
              <h4>Month</h4>
              <select value={expireMonth} onChange={handleExpMonth}>
                <option value="">Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
            <div className="input-container">
              <h4>CVV</h4>
              <input
                type="password"
                placeholder="CVV"
                required
                maxLength={3}
                onChange={handleCvv}
              />
            </div>
          </div>
          <Heading
            textAlign="center"
            fontSize="1.5rem"
            fontWeight={600}
            color="blue.600"
            border="2px solid"
            padding="0.5rem"
          >
            Pay: {total}
          </Heading>
          <button>{`Pay by ${cardType}`}</button>
        </form>
      </div>
    </Box>
  );
};

export default Payment;
