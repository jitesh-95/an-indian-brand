import { Flex, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const urlPage = searchParams.get("page");
  const [sortBy, setSortBy] = useState(urlSort || "");

  useEffect(() => {
    const params = {};
    urlPage && (params.page = urlPage);
    sortBy && (params.sortBy = sortBy);

    setSearchParams(params);
  }, [sortBy, urlPage]);
  //   console.log(urlPage);
  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
  };
  return (
    <Flex
      mt="1rem"
      p={{
        base: "0.2rem 1rem",
        sm: "0.2rem 1rem",
        md: "0.3rem 0.5rem",
        lg: "0.3rem 6rem",
        xl: "0.3rem 8rem",
        "2xl": "0.3rem 8rem",
      }}
    >
      <Select
        placeholder="Sort By"
        w={["100%", "50%", "30%", "30%", "20%"]}
        variant="filled"
        value={sortBy}
        onChange={handleSort}
      >
        <option value="HighToLow">Price High To Low</option>
        <option value="LowToHigh">Price Low To High</option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
      </Select>
    </Flex>
  );
};

export default FilterSort;
