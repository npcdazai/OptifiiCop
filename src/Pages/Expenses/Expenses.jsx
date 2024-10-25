import { Box } from "@chakra-ui/react";
import React from "react";
import MiniHeader from "../../Components/MiniHeader";

const Expenses = () => {
  return (
    <Box h={"100%"} p={6}>
      <MiniHeader
        title={"Manage Expenses"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </Box>
  );
};

export default Expenses;
