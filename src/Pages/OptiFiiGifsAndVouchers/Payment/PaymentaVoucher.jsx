import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import Amazonlogo from "../../../assets/amazon.png";
import { useToast } from "@chakra-ui/react";

// Mock Data
const bankDetails = [
  { label: "Name at the bank", value: "Reethik thota" },
  { label: "Account number", value: "458754215787441" },
  { label: "Bank name", value: "Bank of India" },
  { label: "IFSC code", value: "TGY4875845" },
];

const vouchers = [
  {
    id: 1,
    logo: Amazonlogo,
    name: "Amazon voucher",
    validity: "20 June",
    amount: "₹ 25000",
    count: 3,
  },
];


const PaymentVoucher = () => {
  const [selectedDate, setSelectedDate] = useState("");
 
  const toast = useToast();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  return (
    <Box {...OPACITY_ON_LOAD} p={3}>
      <Text color="#111729" fontWeight={600}>
        Payment
      </Text>
      <VStack>
        <Accordion w="100%" allowToggle>
          <AccordionItem border="none" w="100%">
            <h2>
              <AccordionButton
                display="flex"
                flexDirection="row"
                alignItems="flex-start"
                gap={8}
                w="100%"
              >
                <Box as="span" flex="1" textAlign="left">
                  Show Order Summary
                </Box>
                <AccordionIcon />
                <Text fontWeight={600} fontSize="medium" color="#111729">
                  ₹ 50,000
                </Text>
              </AccordionButton>
            </h2>
            <AccordionPanel w="100%">
              <Box>
                {vouchers.map((voucher) => (
                  <HStack
                    key={voucher.id}
                    bgColor={"#F8FAFC"}
                    w="100%"
                    position="relative"
                    alignItems="center"
                    border=" 1px solid #E3E8EF"
                  >
                    <HStack
                      bgColor={"#FFFFFF05"}
                      justifyContent="space-between"
                      w="30%"
                      p={3}
                    >
                      <Box
                        bgColor="#FFFFFF"
                        boxShadow="0px 2px 4px rgba(17, 27, 35, 0.1)"
                        borderRadius="8px"
                        p={2}
                      >
                        <Image src={voucher.logo} h="44px" />
                      </Box>
                      <Box
                        h="16px"
                        w="16px"
                        borderRadius="50%"
                        position="absolute"
                        bgColor="#FFFFFF"
                        bottom="4.1rem"
                        left="3.5rem"
                        border="1px solid #E3E8EF"
                        boxShadow="0px 2px 4px rgba(175, 187, 195, 0.2)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="small"
                        fontWeight={600}
                      >
                        {voucher.count}
                      </Box>
                    </HStack>

                    <VStack alignItems="flex-start" w="40%">
                      <Text color="#111729" fontWeight={600} fontSize="small">
                        {voucher.name}
                      </Text>
                      <HStack alignItems="flex-start">
                        <Text color="#111729" fontWeight={400} fontSize="small">
                          Validity:
                        </Text>
                        <Text color="#111729" fontWeight={600} fontSize="small">
                          {voucher.validity}
                        </Text>
                      </HStack>
                    </VStack>

                    <Text fontSize="small" fontWeight={600} color="#111729">
                      {voucher.amount}
                    </Text>
                  </HStack>
                ))}
                <Box w="100%" mt={6} borderBottom="1px solid #E3E8EF" />
                <HStack w="100%" mt={2} justifyContent="space-between">
                  <Text fontSize="small" fontWeight={600} color="#111729">
                    Total
                  </Text>
                  <Text fontSize="small" fontWeight={600} color="#111729">
                    ₹ 50000
                  </Text>
                </HStack>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Text color="#000000" fontSize={"medium"} fontWeight={600}>
          Make the payment on the below bank account details:
        </Text>
        <VStack alignItems="flex-start" w="100%">
          {bankDetails.map((detail, index) => (
            <HStack w="100%" justifyContent="space-between" key={index}>
              <Text color="#677489" fontWeight={600} fontSize="small">
                {detail.label}
              </Text>
              <Text color="#111729" fontWeight={600} fontSize="small">
                {detail.value}
              </Text>
            </HStack>
          ))}
        </VStack>

        <VStack alignItems="flex-start" w="100%" mt="1rem">
          <Text color="#000000" fontSize="medium" fontWeight={500}>
            Schedule order
          </Text>
          <FormControl>
            <FormLabel>Schedule order</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CalendarIcon color="purple.500" />
              </InputLeftElement>

              <Input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                maxWidth="100%"
                border="1px solid"
                borderColor="purple.500"
                borderRadius="md"
                _hover={{ borderColor: "purple.600" }}
                _focus={{ borderColor: "purple.700", outline: "none" }}
              />
            </InputGroup>
          </FormControl>
          <Text color="#E81515" fontSize="medium" fontWeight={600}>
            *Once Payment is done kindly share the UTR Code
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default PaymentVoucher;
