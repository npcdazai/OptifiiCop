import {
  Box,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Tag,
  AccordionPanel,
  Checkbox,
  AccordionButton,
  AccordionItem,
  HStack,
  Accordion,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import BlueCard from "../../Components/Cards/BlueCard";

import { LuListFilter } from "react-icons/lu";
import NormalTable from "../../Components/DataTable/NormalTable";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowsAngleExpand, BsFilterRight } from "react-icons/bs";
import { ChevronDownIcon, ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useNavigate } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";

const Approvers = () => {
  const { reimbursementStatus } = useContext(GlobalStateContext);
  const { advanceStatus } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    "Report name",
    "Report by",
    "Report amount",
    "Date & time",
    "Order Status",
    "Approver",
    "Disburser",
  ];

  const tableHeadRowAdvance = [
    "Report name",
    "Report by",
    "Report amount",
    "Date & time",
    "Order Status",
    "Approver",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = reimbursementStatus.map((item, index) => ({
    "Report name": item?.reportName,
    "Report by": item?.reportBy,
    "Report amount": item?.reportAmount,
    "Date & time": item?.dateTime,
    "Order Status": (
      <Tag
        my={1}
        size={"sm"}
        borderRadius="full"
        color={
          item?.orderStatus === "Approved"
            ? "#027A48"
            : item?.orderStatus === "Fully reimbursed"
            ? "#3725EA"
            : "red"
        }
      >
        {item?.orderStatus}
      </Tag>
    ),
    Approver: item?.approver,
    Disburser: item?.disburser,
  }));

  const extractedArrayAdvance = advanceStatus.map((item, index) => ({
    "Report name": item?.reportName,
    "Report by": item?.reportBy,
    "Report amount": item?.reportAmount,
    "Date & time": item?.dateTime,
    "Order Status": (
      <Tag
        my={1}
        size={"sm"}
        borderRadius="full"
        color={
          item?.orderStatus === "Approved"
            ? "#027A48"
            : item?.orderStatus === "Fully reimbursed"
            ? "#3725EA"
            : "red"
        }
      >
        {item?.orderStatus}
      </Tag>
    ),
    Approver: item?.approver,
  }));

  const requestItems = [
    {
      backgroundColor: "#3725EA",
      title: "REIMBURSEMENT REQUEST",
      count: 200,
      linkText: "View Requests",
    },
    {
      backgroundColor: "#C33FAD",
      title: "ADVANCE EXPENSE REQUEST",
      count: 200,
      linkText: "View Requests",
    },
    {
      backgroundColor: "#3725EA",
      title: "WALLET APPROVAL REQUEST",
      count: 200,
      linkText: "View Requests",
    },
  ];

  const gridItemsData = [
    {
      backgroundColor: "#218F001A",
      iconColor: "#00A438",
      title: "Bills for approval",
      count: 50,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "Pending requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
    {
      backgroundColor: "#218F001A",
      iconColor: "#00A438",
      title: "Bills for pending",
      count: 50,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "Pending requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
    {
      backgroundColor: "#218F001A",
      iconColor: "#00A438",
      title: "Active expense wallets",
      count: 50,
      buttonBg: "#3725EA1A",
      buttonBorder: "#3725EA",
      buttonText: "View",
      viewTextColor: "#6311CB",
      hideBadge: true,
    },
  ];

  const blueCardData = [
    {
      backgroundColor: "#6311CB",
      iconColor: "#00A438",
      title: "Pending reimbursement request",
      count: 200,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "View requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
    {
      backgroundColor: "#C33FAD",
      iconColor: "#00A438",
      title: "Pending wallet  requests ",
      count: 50,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "View requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
  ];

  return (
    <Box {...OPACITY_ON_LOAD} overflowX={"scroll"} p={4}>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4}>
          {blueCardData.map((item, index) => (
            <BlueCard key={index} blueCardData={item} />
          ))}
        </Grid>
      </Box>

      {/* dhbfdbf */}

      <Box
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        mb={5}
      >
        <VStack px={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Heading fontSize={"md"} fontWeight={500}>
              Reimbursement status
            </Heading>
            <Box display={"flex"} alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<FaArrowUpFromBracket />}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  colorScheme="gray"
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
                  me={2}
                >
                  Export
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>
                    <Image src={pdfIcon} me={2} /> Export as PDF
                  </MenuItem>
                  <MenuItem fontSize={"sm"}>
                    <Image src={ExcelIcon} me={2} /> Export as Excel
                  </MenuItem>
                </MenuList>
              </Menu>
              <Box
                fontSize={"sm"}
                display={"flex"}
                alignItems={"center"}
                bg={"#F2EEF8"}
                p={"6px 10px"}
                rounded={"md"}
              >
                <Text
                  as={"span"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  <AiOutlineCalendar fontSize={"16px"} /> Time Period :
                </Text>
                <Text
                  as={"span"}
                  display={"flex"}
                  alignItems={"center"}
                  color={"#6311CB"}
                  fontWeight={500}
                  mx={2}
                >
                  <Text as={"span"} me={5}>
                    Feb 20 - Jan 30, 2024{" "}
                  </Text>
                  <IoMdArrowDropdown />
                </Text>
              </Box>
            </Box>
          </Box>
        </VStack>
        <hr />
        <VStack mb={3} px={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<BsFilterRight fontSize={"16px"} />}
                rightIcon={<ChevronDownIcon />}
                fontSize={"xs"}
                color={"gray.700"}
                variant="outline"
                size={"sm"}
                me={2}
              >
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                <MenuItem fontSize={"sm"}>Descending</MenuItem>
                <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
              </MenuList>
            </Menu>

            <Box display={"flex"} gap={2} alignItems={"center"}>
              <InputGroup width={300} size="sm" ml={5}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search"
                  rounded="md"
                  focusBorderColor="#3725EA"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
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
                <MenuList w="350px" h="300px" overflowY="scroll">
                  <VStack p={2} alignItems="flex-start">
                    <HStack alignItems="center">
                      <IoFilterSharp fontSize="small" />{" "}
                      <Text as="span" fontSize="small" fontWeight={600}>
                        Filter
                      </Text>
                    </HStack>
                    <Box w="100%" borderBottom="1px solid #D8D8D8" />
                    <Box w="100%">
                      <Accordion allowMultiple border="0px solid white">
                        {/* Department Section */}
                        <AccordionItem>
                          {({ isExpanded }) => (
                            <>
                              <AccordionButton>
                                {isExpanded ? (
                                  <ChevronDownIcon fontSize="24px" />
                                ) : (
                                  <ChevronRightIcon fontSize="24px" />
                                )}
                                <Box flex="1" textAlign="left" ml={2}>
                                  Department
                                </Box>
                              </AccordionButton>
                              <AccordionPanel pb={2}>
                                <VStack align="start">
                                  <Checkbox defaultChecked>Design</Checkbox>
                                  <Checkbox>Finance</Checkbox>
                                  <Checkbox defaultChecked>IT</Checkbox>
                                  <Checkbox>Development</Checkbox>
                                  <Checkbox>Sales</Checkbox>
                                  <Checkbox>QA</Checkbox>
                                </VStack>
                              </AccordionPanel>
                            </>
                          )}
                        </AccordionItem>

                        {/* Status Section */}
                        <AccordionItem>
                          {({ isExpanded }) => (
                            <>
                              <AccordionButton>
                                {isExpanded ? (
                                  <ChevronDownIcon fontSize="24px" />
                                ) : (
                                  <ChevronRightIcon fontSize="24px" />
                                )}
                                <Box flex="1" textAlign="left" ml={4}>
                                  Status
                                </Box>
                              </AccordionButton>
                              <AccordionPanel pb={4}>
                                <VStack align="start">
                                  <Checkbox>Active</Checkbox>
                                  <Checkbox>Inactive</Checkbox>
                                </VStack>
                              </AccordionPanel>
                            </>
                          )}
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </VStack>
                </MenuList>
              </Menu>

              <BsArrowsAngleExpand
                onClick={() => navigate("/reimbursement-request")}
                as={Button}
                color={"#6311CB"}
                size={18}
                cursor={"pointer"}
              />
            </Box>
          </Box>
        </VStack>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>

      <Box
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
      >
        <VStack px={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Heading fontSize={"md"} fontWeight={500}>
              Advance expense status
            </Heading>
            <Box display={"flex"} alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<FaArrowUpFromBracket />}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  colorScheme="gray"
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
                  me={2}
                >
                  Export
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>
                    <Image src={pdfIcon} me={2} /> Export as PDF
                  </MenuItem>
                  <MenuItem fontSize={"sm"}>
                    <Image src={ExcelIcon} me={2} /> Export as Excel
                  </MenuItem>
                </MenuList>
              </Menu>
              <Box
                fontSize={"sm"}
                display={"flex"}
                alignItems={"center"}
                bg={"#F2EEF8"}
                p={"6px 10px"}
                rounded={"md"}
              >
                <Text
                  as={"span"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                >
                  <AiOutlineCalendar fontSize={"16px"} /> Time Period :
                </Text>
                <Text
                  as={"span"}
                  display={"flex"}
                  alignItems={"center"}
                  color={"#6311CB"}
                  fontWeight={500}
                  mx={2}
                >
                  <Text as={"span"} me={5}>
                    Feb 20 - Jan 30, 2024{" "}
                  </Text>
                  <IoMdArrowDropdown />
                </Text>
              </Box>
            </Box>
          </Box>
        </VStack>
        <hr />
        <VStack mb={3} px={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<BsFilterRight fontSize={"16px"} />}
                rightIcon={<ChevronDownIcon />}
                fontSize={"xs"}
                color={"gray.700"}
                variant="outline"
                size={"sm"}
                me={2}
              >
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                <MenuItem fontSize={"sm"}>Descending</MenuItem>
                <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
              </MenuList>
            </Menu>

            <Box display={"flex"} gap={2} alignItems={"center"}>
              <InputGroup width={300} size="sm" ml={5}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search"
                  rounded="md"
                  focusBorderColor="#3725EA"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
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
              <BsArrowsAngleExpand
                onClick={() => navigate("/reimbursement-request")}
                as={Button}
                color={"#6311CB"}
                size={18}
                cursor={"pointer"}
              />
            </Box>
          </Box>
        </VStack>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRowAdvance}
          data={extractedArrayAdvance}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default Approvers;
