import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Food from "../../../assets/icons/Food.png";
import Fuel from "../../../assets/icons/Fuel.png";
import Gift from "../../../assets/icons/gift.png";
import Telecom from "../../../assets/icons/telecom.png";
import { SlOptionsVertical } from "react-icons/sl";

const data = [
  {
    icon: Food,
    name: "Food",
    subtitle: "Created on 12 June 2024",
    walletType: "Prefilled",
    department: "Sales",
    walletamount: "₹ 50,000",
    CreatedBy: "Kartikey Gautam",
    ApprovedBy: "Manav Sain",
    Status: "Active",
  },
  {
    icon: Fuel,
    name: "Fuel",
    subtitle: "Created on 12 June 2024",
    walletType: "Prefilled",
    department: "Sales",
    walletamount: "₹ 50,000",
    CreatedBy: "Kartikey Gautam",
    ApprovedBy: "Manav Sain",
    Status: "Active",
  },
  {
    icon: Gift,
    name: "Gift",
    subtitle: "Created on 12 June 2024",
    walletType: "Prefilled",
    department: "Sales",
    walletamount: "₹ 50,000",
    CreatedBy: "Kartikey Gautam",
    ApprovedBy: "Manav Sain",
    Status: "Active",
  },
  {
    icon: Telecom,
    name: "Telecom",
    subtitle: "Created on 12 June 2024",
    walletType: "Prefilled",
    department: "Sales",
    walletamount: "₹ 50,000",
    CreatedBy: "Kartikey Gautam",
    ApprovedBy: "Manav Sain",
    Status: "Active",
  },
];

const ActiveCards = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      {data.map((item) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            key={item.name}
            p={2}
            bg="white"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor="#3725EA0D"
            boxShadow="md"
            gap={2}
            w="100%"
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              gap={2}
              justifyContent="space-between"
              w="100%"
            >
              <Image src={item?.icon} h="50.75px" />
              <Text
                // h="28.75px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                fontSize="small"
                w="100%"
                fontWeight="bold"
              >
                {item?.name}
                <Text fontSize="x-small" fontWeight={400}>
                  {item?.subtitle}
                </Text>
                <Button
                  fontSize="xx-small"
                  color="#00A438"
                  bgColor="#00A43814"
                  border="0.5px solid #00A438"
                  h="23px"
                >
                  {item?.Status}
                </Button>
              </Text>

              <Button bgColor="#3725EA0D" borderRadius="50%">
                <SlOptionsVertical color="#3725EA" />
              </Button>
            </Box>

            <Box w="100%" border={"0.5px solid #3725EA"} />
            <Box w="100%" px={3}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
                w="100%"
              >
                <Box display="flex" flexDirection="column">
                  <Text fontSize="x-small" color="#848B99">
                    Wallet type
                  </Text>
                  <Text fontSize="x-small" fontWeight="bold">
                    {item?.walletType}
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="x-small" color="#848B99">
                    Department
                  </Text>
                  <Text fontSize="x-small" fontWeight="bold">
                    {item?.department}
                  </Text>
                </Box>
              </Box>
              <Box w="100%" display="flex" flexDirection="column">
                <Text fontSize="x-small" color="#848B99">
                  Wallet amount
                </Text>
                <Text fontSize="x-small" fontWeight="bold">
                  {item?.walletamount}
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
                w="100%"
              >
                <Box display="flex" flexDirection="column">
                  <Text fontSize="x-small" color="#848B99">
                    Created by
                  </Text>
                  <Text fontSize="x-small" fontWeight="bold">
                    {item?.CreatedBy}
                  </Text>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Text fontSize="x-small" color="#848B99">
                    Approved by
                  </Text>
                  <Text fontSize="x-small" fontWeight="bold">
                    {item?.ApprovedBy}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ActiveCards;
