import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ToastBox = ({ message, status }) => {
  return (
    <Box
      className="web-text-large d-flex gap-2 align-items-center"
      p={3}
      color={status === "error" ? "red.500" : status === "warn" ?  "blue.500" : "green.500"}
      bg={"#fff"}
      boxShadow={'md'}
      rounded={'sm'}
    >

      {status === "error" || status === "warn" ? <WarningIcon/> : <CheckCircleIcon /> }
      <Text fontWeight={600} as={"span"}>{message}</Text>
    </Box>
  );
};

export default ToastBox;
