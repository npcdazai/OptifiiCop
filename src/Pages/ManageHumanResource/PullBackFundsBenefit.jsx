import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { LuEye, LuListFilter } from "react-icons/lu";
import AccordianTable from "../../Components/DataTable/AccordianTable";

const PullBackFundsBenefit = () => {
  const { employees } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRadio, setSelectedRadio] = useState([]);

  useEffect(() => {
    // Set isLoading to true
    setIsLoading(true);

    // Simulate a 3-second delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 3 seconds
    }, 500);

    // Cleanup the timer when the component unmounts or when the useEffect re-runs
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once after the component mounts

  // ===============================[ Table Header ]
  const tableHeadRow = [
    "Emp ID",
    "Name",
    "Email Address",
    // "Mobile number",
    "Wallet",
    "Wallet balance",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = employees.map((item, index) => ({
    id: item.id,
    "Emp ID": (
    //   <Checkbox colorScheme="purple" value="1">
        <HStack spacing={1}>
          <Text as={"span"} fontSize={"xs"}>
            {item?.EmpID}
          </Text>
        </HStack>
    ),
    Name: (
      <HStack>
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Text mb={0}>{item?.Name}</Text>
      </HStack>
    ),
    "Email Address": item?.emailAddress,
    "Mobile number": item?.mobileNumber,
    Wallet: (
      <HStack>
        <Text
          fontSize={"xs"}
          mb={0}
          fontWeight={500}
          bg={"#EFE3FF"}
          px={2}
          py={1}
          color={"#6311CB"}
          textAlign={"center"}
          rounded={"md"}
        >
          Food
        </Text>
        <Text
          fontSize={"xs"}
          mb={0}
          fontWeight={500}
          bg={"#EFE3FF"}
          px={2}
          py={1}
          color={"#6311CB"}
          textAlign={"center"}
          rounded={"md"}
        >
          Fuel
        </Text>
        <Text
          fontSize={"xs"}
          mb={0}
          fontWeight={500}
          bg={"#EFE3FF"}
          px={2}
          py={1}
          color={"#6311CB"}
          textAlign={"center"}
          rounded={"md"}
        >
          Travel
        </Text>
      </HStack>
    ),
    "Wallet balance": <Text fontSize={"xs"}>₹ 5000</Text>,
    subMenu: item.subMenu,
  }));

  return (
    <Box {...OPACITY_ON_LOAD} overflowX={"scroll"}>
      <Box
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
        <VStack mb={0} p={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <InputGroup width={300} size="sm">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Type to search..."
                rounded="md"
                focusBorderColor="#3725EA"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<LuListFilter fontSize={"16px"} />}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
                  me={2}
                >
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                  <MenuItem fontSize={"sm"}>Descending</MenuItem>
                  <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                  <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </VStack>
        <AccordianTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          showRadioButton={true}
        />
      </Box>
    </Box>
  );
};

export default PullBackFundsBenefit;
