import { Box } from "@chakra-ui/react";
import React from "react";
import MiniHeader from "../../Components/MiniHeader";

const Requests = () => {
  return (
    <Box h={"100%"} p={6}>
      <MiniHeader
        title={"My Requests"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      />
    </Box>
  );
};

export default Requests;
