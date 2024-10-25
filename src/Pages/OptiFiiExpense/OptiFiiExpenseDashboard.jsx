import {
  Badge,
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { LuListFilter } from "react-icons/lu";
import NormalTable from "../../Components/DataTable/NormalTable";
import { MdOutlineEdit } from "react-icons/md";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiBarChart2 } from "react-icons/fi";
import { WiTime4 } from "react-icons/wi";
import { MdArrowForward } from "react-icons/md";
import BarChart from "../../Components/Doughnut/BarCharts";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFilterRight } from "react-icons/bs";
import BlueCard from "../../Components/Cards/BlueCard";

const OptiFiiExpenseDashboard = () => {
  const { reimbursementStatus } = useContext(GlobalStateContext);
  const { advanceStatus } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);

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
      backgroundColor: "#C33FAD",
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
  ]


  return (
    <Box {...OPACITY_ON_LOAD} overflowX={"scroll"} p={4}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={4}>
        {blueCardData.map((item, index) => (
          <BlueCard key={index} blueCardData={item}  />
        ))}
      </Grid>


      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4}>
        {gridItemsData.map((item, index) => (
          <GridItem key={index} backgroundColor="#fff" borderRadius="xl">
            <Box bg="#fff" borderRadius="xl" p={4}>
              <Stack direction={["column", "row"]}>
                <Box
                  backgroundColor={item.backgroundColor}
                  h="50px"
                  w="50px"
                  rounded="50px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FiBarChart2 color={item.iconColor} fontSize="25px" />
                </Box>
                <Box fontSize="sm" mb={0} fontWeight={500}>
                  <Text mb={0} color="#A3AED0">
                    {item.title}
                  </Text>
                  <Text fontSize="xl">{item.count}</Text>
                </Box>
              </Stack>
              <Button
                fontSize="xl"
                fontWeight={500}
                mt={2}
                w="100%"
                display="flex"
                justifyContent="space-between"
                backgroundColor={item.buttonBg}
                border={`1px solid ${item.buttonBorder}`}
              >
                {!item.hideBadge && (
                  <Text
                    display="flex"
                    alignItems="center"
                    color="#FCA100"
                    mb={0}
                  >
                    <WiTime4 />
                    <Text fontSize="xs" as="span" mx={2}>
                      {item.buttonText}
                    </Text>
                    <Badge
                      bg={item.badgeColor}
                      fontSize="8px"
                      color="white"
                      fontWeight={400}
                      p={1}
                      rounded="5px"
                    >
                      {item.badgeText}
                    </Badge>
                  </Text>
                )}
                <Text
                  as="span"
                  display="flex"
                  alignItems="center"
                  color={item.viewTextColor}
                  fontSize="sm"
                  gap={1}
                >
                  View <MdArrowForward />
                </Text>
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Box w={"100%"} rounded={"xl"} mb={4} p={3} bg={"#fff"}>
        <Box display={"flex"} justifyContent={"space-between"} pt={4}>
          <Text as={"span"} fontSize={"sm"} color={"#474279"} fontWeight={500}>
            Spend by categories
          </Text>
          <Box display={"flex"} gap={3}>
            <Select placeholder="Travel" size={"sm"} rounded={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Monthly" size={"sm"} rounded={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <BarChart />
        {/* </Box> */}
      </Box>
      <Box
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
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

            <Box display={"flex"} gap={2}>
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
        minH={"100%"}
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

            <Box display={"flex"} gap={2}>
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

export default OptiFiiExpenseDashboard;
