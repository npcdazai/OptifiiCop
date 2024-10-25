import { Box, Divider, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SingleAddress from "./SingleAddress";
import MultipleAddress from "./MultipleAddress";

const WhereToShare = ({ register }) => {
  const [selectedValue, setSelectedValue] = useState("1");

  const renderContent = () => {
    switch (selectedValue) {
      case "1":
        return <SingleAddress />;
      case "2":
        return <MultipleAddress/>;
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
          >
            <Radio size="sm" colorScheme="purple" value="1">
              <Text color={"#3F4754"} mb={0} fontWeight={500} fontSize={"xs"}>
                Single address
              </Text>
            </Radio>
          </Box>
          <Box
            p={2}
            display="flex"
            flexDirection="row"
            borderRadius="5px"
          >
            <Radio size="sm" colorScheme="purple" value="2">
              <Text color={"#3F4754"} mb={0} fontWeight={500} fontSize={"xs"}>
                Multiple address
              </Text>
            </Radio>
          </Box>
        </Stack>
      </RadioGroup>
      <Divider/>
      <Box mt={4}>{renderContent()}</Box>
    </>
  );
};

export default WhereToShare;
