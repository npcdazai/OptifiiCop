import {
    Box,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { Radio, RadioGroup } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { MdCurrencyRupee } from "react-icons/md";
  
  const SubmissionPolicy = () => {
    const [receiptRequirement, setReceiptRequirement] = useState("1");
    const [transactionRequirement, setTransactionRequirement] = useState("1");
    const [nature, setNature] = useState("1");
  
    const receiptOptions = [
      { value: "1", label: "Required" },
      { value: "2", label: "Not required" },
    ];
  
    const transactionOptions = [
      { value: "1", label: "All transactions" },
      { value: "2", label: "Transactions above" },
    ];
  
    const natureOptions = [
      { value: "1", label: "Printed" },
      { value: "2", label: "Hand written" },
      { value: "3", label: "Both" },
    ];
  
    return (
      <Box p={0} display="flex" flexDirection="column" gap={4}>
        <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={0}>
          Create submission policy
        </Text>
  
        <VStack gap={4} alignItems="flex-start">
          <HStack mt={5}>
            <Text as="span" color="#383838" fontSize="small" fontWeight={600}>
              1.{" "}
            </Text>
            <Text as="span" color="#383838" fontSize="small" fontWeight={600}>
              Requirement of receipt
            </Text>
          </HStack>
          <RadioGroup
            colorScheme="purple"
            onChange={setReceiptRequirement}
            value={receiptRequirement}
          >
            <Stack display="flex" flexDirection="column">
              {receiptOptions.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </VStack>
  
        <VStack gap={4} alignItems="flex-start">
          <Text as="span" color="#535963" fontSize="small" fontWeight={400}>
            Required for
          </Text>
          <RadioGroup
            colorScheme="purple"
            onChange={setTransactionRequirement}
            value={transactionRequirement}
          >
            <Stack display="flex" flexDirection="column">
              {transactionOptions.map((option) =>
                option.value === "2" ? (
                  <HStack key={option.value} justifyContent="space-between" w="100%" alignItems="center">
                    <Radio w="50%" value={option.value}>
                      {option.label}
                    </Radio>
                    <InputGroup w="70%">
                      <InputLeftElement pointerEvents="none">
                        <MdCurrencyRupee color="#636F83" size={12} />
                      </InputLeftElement>
                      <Input type="tel" />
                    </InputGroup>
                  </HStack>
                ) : (
                  <Radio key={option.value} value={option.value}>
                    {option.label}
                  </Radio>
                )
              )}
            </Stack>
          </RadioGroup>
        </VStack>
  
        {/* Nature of Receipt/Memo */}
        <VStack gap={4} alignItems="flex-start">
          <HStack mt={5}>
            <Text as="span" color="#383838" fontSize="small" fontWeight={600}>
              2.{" "}
            </Text>
            <Text as="span" color="#383838" fontSize="small" fontWeight={600}>
              What nature of receipt/memo
            </Text>
          </HStack>
          <RadioGroup colorScheme="purple" onChange={setNature} value={nature}>
            <Stack display="flex" flexDirection="column">
              {natureOptions.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </VStack>
      </Box>
    );
  };
  
  export default SubmissionPolicy;
  