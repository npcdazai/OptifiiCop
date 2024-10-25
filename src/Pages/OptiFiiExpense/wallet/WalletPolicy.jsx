import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import OutOfPoket from "./OutOfPoket";
const WalletPolicy = ({ register }) => {
  const [selectedValue, setSelectedValue] = useState("1");

  const renderContent = () => {
    switch (selectedValue) {
      case "1":
        return <OutOfPoket register={register} />;
      case "2":
        return <Box>Add department content</Box>;
      default:
        return null;
    }
  };

  return (
    <>
      <RadioGroup onChange={setSelectedValue} value={selectedValue}>
        <Stack spacing={4} direction="row">
          <Box
            p={1}
            display="flex"
            flexDirection="row"
            borderRadius="5px"
            bgColor="#F4F4F4"
            border={selectedValue === "1" && "1px solid #3725EA"}
          >
            <Radio size="sm" colorScheme="blue" value="1">
              Out of pocket/cash
            </Radio>
          </Box>
          <Box
            p={2}
            display="flex"
            flexDirection="row"
            borderRadius="5px"
            bgColor="#F4F4F4"
            border={selectedValue === "2" && "1px solid #3725EA"}
          >
            <Radio size="sm" colorScheme="blue" value="2">
              Mileage
            </Radio>
          </Box>
        </Stack>
      </RadioGroup>
      <Box mt={4}>{renderContent()}</Box>
    </>
  );
};

export default WalletPolicy;
