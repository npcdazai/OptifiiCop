import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
//   import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Sales from "./Sales";

const RequestModal = () => {
 

  const transactionLimits = [
    { period: "Daily", amount: "₹ 5000" },
    { period: "Weekly", amount: "₹ 25000" },
    { period: "Monthly", amount: "₹ 50000" },
  ];

  const Submission = [
    { receipt: "Required for all transaction", natureofreceipt: "Printed" },
  ];

  const departmentBudget = [
    { name: "Reethik thota", amt: "₹ 25000" },
    { name: "Pooja patade", amt: "₹ 25000 " },
  ];

  const approvers1 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];
  const approvers2 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];
  return (
    <Box>
      <VStack w="100%" bgColor="#FFFFFF" p={4} alignItems="flex-start" gap={3}>
        <Text as="span" color="#3725EA" fontWeight={500} fontSize="medium">
          Food wallet policy
        </Text>
        <Text as="span" color="#667085" fontSize="xs" fontWeight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </Text>

        <HStack w="100%" justifyContent="space-between">
          <HStack>
            <Text as="span" color="#565D6C" fontSize="small" fontWeight={500}>
              Wallet type
            </Text>
            <Text as="span" fontWeight={600} color="#121212" fontSize="small">
              Prepaid
            </Text>
          </HStack>
          <HStack>
            <Text as="span" color="#565D6C" fontSize="small" fontWeight={500}>
              Transaction type
            </Text>
            <Text as="span" fontWeight={600} color="#121212" fontSize="small">
              ATM, Contactless
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack w="100%" bgColor="#FFFFFF" p={4} alignItems="flex-start">
        <Text as="span" color="#1A1A1A" fontWeight={600} fontSize="small">
          Transaction limit
        </Text>
        <HStack w="100%" alignItems="flex-start" gap={3}>
          {transactionLimits.map((limit, index) => (
            <HStack key={index}>
              <Text as="span" color="#565D6C" fontSize="small" fontWeight={500}>
                {limit.period}
              </Text>
              <Text as="span" fontWeight={600} color="#121212" fontSize="small">
                {limit.amount}
              </Text>
            </HStack>
          ))}
        </HStack>
      </VStack>

      <VStack p={4} bgColor="#FFFFFF" alignItems="flex-start">
        <Text color="#1A1A1A" fontSize="small" fontWeight={600}>
          Approver flow 1
        </Text>
        <HStack>
          <Text fontSize="small" color="#565D6C">
            Amount
          </Text>
          <Text fontSize="small" fontWeight={600} color="#565D6C">
            ₹ 500
          </Text>
        </HStack>

        <Tabs variant="soft-rounded" colorScheme="purple">
          <HStack>
            <Text as="span" fontSize="small">
              Department
            </Text>
            <TabList>
              <Tab bgColor="#EFE3FF">Sales</Tab>
              <Tab bgColor="#EFE3FF">Design</Tab>
              <Tab bgColor="#EFE3FF">Finance</Tab>
            </TabList>
          </HStack>

          <TabPanels>
            <TabPanel>
              <Sales />
            </TabPanel>
            <TabPanel>
              <Text>Design</Text>
            </TabPanel>
            <TabPanel>
              <Text>Finance</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
      <VStack p={4} bgColor="#FFFFFF" alignItems="flex-start">
        <Text color="#1A1A1A" fontSize="small" fontWeight={600}>
          Submission policy
        </Text>
        {Submission.map((val) => (
          <HStack
            key={val.receipt}
            w="100%"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <HStack bgColor="#FFFFFF">
              <Text as="span" fontSize="small" fontWeight={400}>
                Receipt
              </Text>
              <Text fontSize="small" fontWeight={600} color="#121212" as="span">
                {val.receipt}
              </Text>
            </HStack>
            <HStack bgColor="#FFFFFF">
              <Text as="span" fontSize="small" fontWeight={400}>
                Nature of receipt
              </Text>
              <Text fontSize="small" fontWeight={600} color="#121212" as="span">
                {val.natureofreceipt}
              </Text>
            </HStack>
          </HStack>
        ))}
      </VStack>
      <VStack p={4} bgColor="#FFFFFF" gap={4} alignItems="flex-start">
        <Text fontSize="small" fontWeight={600}>
          Department budget
        </Text>
        <HStack>
          <Text as="span" color="#565D6C" fontWeight={500} fontSize="small">
            Sales
          </Text>
          <Text as="span" color="#121212" fontWeight={600} fontSize="small">
            ₹ 50000
          </Text>
        </HStack>
        <HStack alignItems="flex-start">
          <Text as="span" fontSize="small" fontWeight={600} color="#565D6C">
            Sr. accountant
          </Text>

          <VStack>
            {departmentBudget.map((approver, index) => (
              <HStack key={index} alignItems="flex-start">
                <Text
                  as="span"
                  fontSize="small"
                  fontWeight={700}
                  color="#1E1E1E"
                >
                  {approver.name}
                </Text>
                <Text as="span" fontSize="small" color="#565D6C">
                  {"( " + approver.amt + " )"}
                </Text>
              </HStack>
            ))}
          </VStack>
        </HStack>{" "}
        <HStack>
          <Text as="span" color="#565D6C" fontWeight={500} fontSize="small">
            Design
          </Text>
          <Text as="span" color="#121212" fontWeight={600} fontSize="small">
            ₹ 50000
          </Text>
        </HStack>
        <HStack alignItems="flex-start">
          <Text as="span" fontSize="small" fontWeight={600} color="#565D6C">
            Sr. accountant
          </Text>

          <VStack>
            {departmentBudget.map((approver, index) => (
              <HStack key={index} alignItems="flex-start">
                <Text
                  as="span"
                  fontSize="small"
                  fontWeight={700}
                  color="#1E1E1E"
                >
                  {approver.name}
                </Text>
                <Text as="span" fontSize="small" color="#565D6C">
                  {"( " + approver.amt + " )"}
                </Text>
              </HStack>
            ))}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RequestModal;
