import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Sales = () => {
  const approvers1 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];
  const approvers2 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];

  const transactionLimits = [
    { period: "Daily", amount: "₹ 5000" },
    { period: "Weekly", amount: "₹ 25000" },
    { period: "Monthly", amount: "₹ 50000" },
  ];


  return (
    <VStack alignItems="flex-start" gap={8}>
      <HStack alignItems="flex-start">
        <Text as="span" fontSize="small" fontWeight={600} color="#565D6C">
          Approver level 1 -
        </Text>

        <VStack>
          {approvers1.map((approver, index) => (
            <HStack key={index} alignItems="flex-start">
              <Text as="span" fontSize="small" fontWeight={700} color="#1E1E1E">
                {approver.name}
              </Text>
              <Text as="span" fontSize="small" color="#565D6C">
                {"( " + approver.role + " )"}
              </Text>
            </HStack>
          ))}
        </VStack>
      </HStack>
      <HStack alignItems="flex-start">
        <Text as="span" fontSize="small" fontWeight={600} color="#565D6C">
          Approver level 1 -
        </Text>

        <VStack>
          {approvers2.map((approver, index) => (
            <HStack key={index} alignItems="flex-start">
              <Text as="span" fontSize="small" fontWeight={700} color="#1E1E1E">
                {approver.name}
              </Text>
              <Text as="span" fontSize="small" color="#565D6C">
                {"( " + approver.role + " )"}
              </Text>
            </HStack>
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Sales;
