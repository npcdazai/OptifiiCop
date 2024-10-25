import {
  Badge,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  color,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import BlueCard from "../../Components/Cards/BlueCard";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { HStack, Text, VStack, Icon } from "@chakra-ui/react";

import {
  BsArrowsAngleExpand,
  BsBarChartFill,
  BsFillBarChartFill,
} from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { WiTime4 } from "react-icons/wi";
import { MdArrowForward, MdNoFood } from "react-icons/md";
import PlatiniumGift from "../../Components/PlatiniumGift";
import { PiUsersThreeFill } from "react-icons/pi";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import blackmen from "../../assets/blackmen.png";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import goth from "../../assets/goth.png";
import womenpfp from "../../assets/womenpfp1.png";
import NormalTable from "../../Components/DataTable/NormalTable";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdAddCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { GoDotFill } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import LoadMoneyModal from "./LoadMoneyModal";

const Dashbaord = () => {
  const { dash } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setusers] = useState(50);
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  const zoomIn = () => setScale((prev) => (prev < 2 ? prev + 0.1 : prev));
  const zoomOut = () => setScale((prev) => (prev > 0.5 ? prev - 0.1 : prev));

  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsOpen(true); // Function to open the modal
  const closeModal = () => setIsOpen(false); // Function to close the modal

  const blueCardData = [
    {
      backgroundColor: "#6311CB",
      iconColor: "#00A438",
      title: "Total EMPLOYEES",
      count: 100,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "Invite/Add Employee",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
    {
      backgroundColor: "#C33FAD",
      iconColor: "#00A438",
      title: "WALLET REQUEST",
      count: 100,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "View Requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
    },
  ];

  const gridItemsData = [
    {
      cardType: "Expense card",
      backgroundColor: "#218F001A",
      iconColor: "#00A438",
      title: "Active expense wallets",
      count: 50,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "Pending requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
      manageWallet: "Manage expense wallets",
    },
    {
      cardType: "Benefit card",
      backgroundColor: "#218F001A",
      iconColor: "#00A438",
      title: "Active benefit wallets",
      count: 50,
      buttonBg: "#FCA1001A",
      buttonBorder: "#FCA100",
      buttonText: "Pending requests",
      badgeText: "20 New",
      badgeColor: "#3725EA",
      viewTextColor: "#6311CB",
      manageWallet: "Manage benefit wallets",
    },
  ];

  // ===============================[ Table Header ]
  const dashHeadRow = [
    "Wallet Name",
    "Total employees",
    "Amount in card",
    "Pending request",
    "Pending amount",
  ];

  const dashHeadSecRow = [
    "Wallet Name",
    "Total employees",
    "Benefit limit",
    "Remaining amount",
    "Status",
  ];
  const dashHeadThirdRow = [
    "Employee Name",
    "Email",
    "Wallet",
    "Amount",
    "Date & time",
  ];

  // first

  const dashArr = dash.map((item, index) => ({
    "Wallet Name": (
      <HStack key={`wallet-${index}`}>
        {/* <Box p={2} bg="#ebe0f8" rounded="full">
          <MdNoFood color="#6311CB" />
        </Box> */}
        <Image src={item.icon} h="20px" />
        <Text mb={0} fontSize="xs">
          {item.wallet || "Food"}
        </Text>
      </HStack>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={blackmen} h={"30px"} position="absolute" left="1.4rem" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="2.7rem" />
        <Image src={asian} h={"30px"} position="absolute" left="3.9rem" />
        <Image src={goth} h={"30px"} position="absolute" left="4.9rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="5.9rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Amount in card": (
      <Text key={`walletAmount-${index}`} mb={0} fontSize="xs">
        {item.walletAmount || 5000}
      </Text>
    ),
    "Pending request": (
      <HStack>
        <Text key={`balance-${index}`} mb={0} fontSize="xs" color={"#007E23"}>
          +4 new
        </Text>
        <Text
          mb={0}
          size="xs"
          bg="#6311CB"
          rounded="md"
          py={1.5}
          px={4}
          fontWeight={400}
          color="#fff"
        >
          View
        </Text>
      </HStack>
    ),
    "Pending amount": (
      <Text key={`balance-${index}`} mb={0} fontSize="xs">
        {item.balanceRemaining || "₹ 2000"}
      </Text>
    ),
  }));

  // Second

  const dashSecArr = dash.map((item, index) => ({
    "Wallet Name": (
      <HStack key={`wallet-${index}`}>
        {/* <Box p={2} bg="#ebe0f8" rounded="full">
          <MdNoFood color="#6311CB" />
        </Box> */}
        <Image src={item.icon} h="20px" />
        <Text mb={0} fontSize="xs">
          {item.wallet || "Food"}
        </Text>
      </HStack>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={blackmen} h={"30px"} position="absolute" left="1.4rem" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="2.7rem" />
        <Image src={asian} h={"30px"} position="absolute" left="3.9rem" />
        <Image src={goth} h={"30px"} position="absolute" left="4.9rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="5.9rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Benefit limit": (
      <Text key={`walletAmount-${index}`} mb={0} fontSize="xs">
        {item.walletAmount || 5000}
      </Text>
    ),
    "Remaining amount": (
      <Text key={`balance-${index}`} mb={0} fontSize="xs">
        {item.balanceRemaining || "₹ 2000"}
      </Text>
    ),
    Status: (
      <Tag
        size={"sm"}
        py={2}
        rounded="full"
        color={
          item?.status === "Approved"
            ? "#00A438"
            : item?.status === "Pending"
            ? "#EAB600"
            : "red"
        }
        border={`1px solid ${
          item?.status === "Approved"
            ? "#00A438"
            : item?.status === "Pending"
            ? "#EAB600"
            : "red"
        }`}
        bg={
          item?.status === "Approved"
            ? "#ebf8ef"
            : item?.status === "Pending"
            ? "#fdf9eb"
            : "#ffe5e5"
        }
      >
        <HStack>
          <GoDotFill size={10} />
          <Text mb={0}>{item?.status || "N/A"}</Text>
        </HStack>
      </Tag>
    ),
  }));

  // Third

  const dashThirdArr = dash.map((item, index) => ({
    "Employee Name": (
      <HStack key={`wallet-${index}`}>
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Box>
          <Text mb={0} fontSize="xs" fontWeight={600}>
            Olivia Rhye
          </Text>
          <Text mb={0} fontSize="10px" color={"#667085"}>
            WD-887
          </Text>
        </Box>
      </HStack>
    ),

    Email: (
      <Text key={`walletAmount-${index}`} mb={0} fontSize="xs">
        olivia@gmail.com
      </Text>
    ),
    Wallet: (
      <Text key={`walletAmount-${index}`} mb={0} fontSize="xs">
        Food
      </Text>
    ),
    Amount: (
      <Text key={`balance-${index}`} mb={0} fontSize="xs" color={"#00A438"}>
        {item.balanceRemaining || "₹ 2000"}
      </Text>
    ),
    "Date & time": (
      <Text key={`balance-${index}`} mb={0} fontSize="xs">
        2 June 2024, 10 am
      </Text>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} overflowX={"scroll"} p={4}>
      <Grid h={150} templateColumns="repeat(4, 1fr)" gap={6}>
        {blueCardData.map((item, index) => (
          <BlueCard key={index} blueCardData={item} />
        ))}
        {/* <EmployeeKYCStatus/> */}
        <Box bgColor="#FFFFFF" borderRadius="8.22px">
          <Text color="#474279" fontSize="small" p={2} fontWeight={600}>
            Employee KYC Status
          </Text>
          <HStack alignItems="center">
            <Box h="100px" w="100px"></Box>
          </HStack>
        </Box>
        <Box bgColor="#FFFFFF" borderRadius="8.22px">
          <Text color="#474279" fontSize="small" p={2} fontWeight={600}>
            Payment Status
          </Text>
          <HStack alignItems="center">
            <Box h="100px" w="100px"></Box>
          </HStack>
        </Box>
      </Grid>

      {/* EXP card  */}

      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4} mt={6}>
        {gridItemsData.map((item, index) => (
          <GridItem
            key={index}
            backgroundColor="#fff"
            h="100%"
            borderRadius="10px"
            p={4}
          >
            <HStack w={"100%"} justifyContent={"space-between"} mb={0}>
              <Text fontSize={"sm"} as={"span"} fontWeight={500}>
                {/* Expense card */}
                {item.cardType}
              </Text>
              <HStack spacing={1}>
                <Text
                  fontSize={"sm"}
                  as={"span"}
                  fontWeight={500}
                  color={"#6311CB"}
                >
                  {/* Manage expense wallets */}
                  {item.manageWallet}
                </Text>
                <MdArrowForward size={14} color="#6311CB" />
              </HStack>
            </HStack>
            <Divider borderStyle="dashed" />
            <HStack spacing={4} alignItems={"start"} mt={6}>
              <Box
                backgroundColor={item.backgroundColor}
                h="56px"
                w="56px"
                rounded="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FiBarChart2
                  color={item.iconColor}
                  fontSize="22px"
                  fontWeight={900}
                />
              </Box>

              <Box fontSize="md" fontWeight={500}>
                <Text mb={0} color="#A3AED0">
                  {item.title}
                </Text>
                <Text fontSize="2xl" fontWeight={600} color={"#2B3674"}>
                  {item.count}
                </Text>
              </Box>
            </HStack>
            <Box mt={16}>
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

        {/* Add PlatiniumGift as the third box in the same row */}
        <GridItem colSpan={1}>
          <Box bg="#fff" borderRadius="xl" p={4} pe={2}>
            <HStack spacing={2} alignItems={"start"}>
              <Box>
                <PlatiniumGift />
              </Box>
              <Box flex={1} pt={4}>
                <Text
                  color={"#474279"}
                  fontWeight={600}
                  fontSize={"md"}
                  mb={1.5}
                >
                  OptiFii Gift cards
                </Text>
                <Text color={"#A3AED0"} fontWeight={500} fontSize={"xs"} mb={6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                </Text>
                <NavLink to="/optifii-gifts-dashboard/apply-for-giftcards">
                  <PrimaryButton
                    title={" Issue gift cards"}
                    px={4}
                    leftIcon={<PiUsersThreeFill color={"#fff"} />}
                  />
                </NavLink>
              </Box>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
      {/* EXP overview */}
      <HStack alignItems={"start"} spacing={6}>
        <Box flex={1}>
          {/* table 1 */}
          <Box bg={"#fff"} shadow={"md"} rounded={"md"} p={4} mb={4}>
            <HStack justifyContent={"space-between"} mb={2}>
              <Heading
                fontSize={"md"}
                fontWeight={500}
                mb={0}
                color={"#474279"}
              >
                Expense Overview
              </Heading>
            </HStack>

            <Tabs position="relative" variant="unstyled">
              <HStack
                justifyContent={"space-between"}
                alignItems={"start"}
                borderBottom={"1px solid #D4D4D4"}
              >
                <Box>
                  <TabList>
                    <Tab
                      color={"#B0B0B0"}
                      fontSize={"xs"}
                      fontWeight={500}
                      _selected={{
                        color: "#5E0FCD",
                      }}
                    >
                      Reimbursement request
                    </Tab>
                    <Tab
                      color={"#B0B0B0"}
                      fontSize={"xs"}
                      fontWeight={500}
                      _selected={{
                        color: "#5E0FCD",
                      }}
                    >
                      Advance Expense request
                    </Tab>
                  </TabList>

                  <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="#5E0FCD"
                    borderRadius="1px"
                  />
                </Box>
                <Box
                  fontSize={"xs"}
                  display={"flex"}
                  alignItems={"center"}
                  bg={"#F2EEF8"}
                  p={"7px 10px"}
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
              </HStack>

              <TabPanels>
                <TabPanel px={0}>
                  <HStack justifyContent={"space-between"} mb={4}>
                    <HStack bg={"#F2EEF8"} p={2} rounded={"md"}>
                      <Text fontSize={"xs"} color={"#888888"} mb={0}>
                        Total report amount
                      </Text>
                      <Text
                        fontSize={"sm"}
                        color={"#6311CB"}
                        mb={0}
                        fontWeight={500}
                      >
                        ₹ 50,000
                      </Text>
                    </HStack>
                    <HStack alignItems="center">
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
                      <NavLink
                        style={{
                          float: "right",
                          marginRight: "4px",
                        }}
                        to="/reimbursement-request"
                      >
                        <BsArrowsAngleExpand
                          as={Button}
                          color={"#6311CB"}
                          size={18}
                          cursor={"pointer"}

                          // onClick={zoomIn}
                        />
                      </NavLink>
                    </HStack>
                  </HStack>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={dashHeadRow}
                    data={dashArr}
                    isLoading={isLoading}
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <HStack justifyContent={"space-between"} mb={4}>
                    <HStack bg={"#F2EEF8"} p={2} rounded={"md"}>
                      <Text fontSize={"xs"} color={"#888888"} mb={0}>
                        Total report amount
                      </Text>
                      <Text
                        fontSize={"sm"}
                        color={"#6311CB"}
                        mb={0}
                        fontWeight={500}
                      >
                        ₹ 50,000
                      </Text>
                    </HStack>
                    <HStack alignItems="center">
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
                      <NavLink
                        style={{
                          float: "right",
                          marginRight: "4px",
                        }}
                        to="/advance-expense-request"
                      >
                        <BsArrowsAngleExpand
                          as={Button}
                          color={"#6311CB"}
                          size={18}
                          cursor={"pointer"}

                          // onClick={zoomIn}
                        />
                      </NavLink>
                    </HStack>
                  </HStack>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={dashHeadRow}
                    data={dashArr}
                    isLoading={isLoading}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/* table 2 */}

          <Box bg={"#fff"} shadow={"md"} rounded={"md"} p={4}>
            <HStack justifyContent={"space-between"} mb={2}>
              <Heading
                fontSize={"md"}
                fontWeight={500}
                mb={0}
                color={"#474279"}
              >
                Benefit Overview
              </Heading>
              <HStack>
                <Box
                  fontSize={"xs"}
                  display={"flex"}
                  alignItems={"center"}
                  bg={"#F2EEF8"}
                  p={"7px 10px"}
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
                <NavLink to="/dashboard/beinefit-overview">
                  <BsArrowsAngleExpand
                    // onClick={() => navigate("")}
                    as={Button}
                    color={"#6311CB"}
                    size={18}
                    cursor={"pointer"}
                  />
                </NavLink>
              </HStack>
              vis
            </HStack>

            <HStack justifyContent={"space-between"} mt={2}>
              <HStack bg={"#F2EEF8"} p={2} rounded={"md"}>
                <Text fontSize={"xs"} color={"#888888"} mb={0}>
                  Total report amount
                </Text>
                <Text fontSize={"sm"} color={"#6311CB"} mb={0} fontWeight={500}>
                  ₹ 50,000
                </Text>
              </HStack>
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
            </HStack>

            <Box mt={4}>
              <NormalTable
                emptyMessage={`We don't have any Sponers `}
                tableHeadRow={dashHeadSecRow}
                data={dashSecArr}
                isLoading={isLoading}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          {/* box 1 */}
          <Box bg={"#fff"} shadow={"md"} rounded={"md"} p={4} mb={6}>
            <Box>
              <Text color={"#474279"} fontSize={"sm"} fontWeight={500} mb={3}>
                Your Balance
              </Text>
              <Box>
                <Text
                  color={"#1A202C"}
                  fontSize={"xl"}
                  as={"span"}
                  fontWeight={600}
                >
                  ₹ 120,435.00
                </Text>
                <Text color={"#90A3BF"} fontSize={"xs"} as={"span"} ml={1}>
                  ( INR )
                </Text>
              </Box>
              <Text color={"#90A3BF"} fontSize={"xs"}>
                Last uploaded on Jan 31, 2024
              </Text>
            </Box>
            <HStack mt={10} mb={6}>
              <PrimaryButton
                onClick={openModal}
                px={"4"}
                leftIcon={<IoMdAddCircleOutline size={14} color="#fff" />}
                title={"Load Money"}
              />
              <SecondaryButton px={"4"} title={"Transaction statement"} />
            </HStack>
          </Box>

          {/* box 2 */}
          <Box rounded={"md"} boxShadow="md" p={4} bg="white">
            <Text color={"#474279"} fontSize={"sm"} fontWeight={500} mb={3}>
              Monthly Expense
            </Text>
            <HStack justifyContent={"space-between"} mb={4}>
              <Box
                fontSize={"xs"}
                display={"flex"}
                alignItems={"center"}
                bg={"#F2EEF8"}
                p={2}
                rounded={"md"}
              >
                <Text
                  as={"span"}
                  display={"flex"}
                  alignItems={"center"}
                  color={"#6311CB"}
                  fontWeight={500}
                  mx={2}
                >
                  <Text as={"span"} me={2}>
                    Feb 20 - Jan 30, 2024{" "}
                  </Text>
                  <IoMdArrowDropdown />
                </Text>
              </Box>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
                >
                  Expense
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>Expense</MenuItem>
                  <MenuItem fontSize={"sm"}>Benefit</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            {/* Progress Bar */}
            <Progress
              value={100} // Full bar, but custom background for segments
              size="md"
              rounded="md"
              hasStripe={false} // No stripes for a clean look
              colorScheme="gray" // Neutral base color
              mb={8}
              sx={{
                "& > div": {
                  background: `linear-gradient(to right, 
            #6211CB 0% 15%, 
            #59C36A 15% 40%, 
            #EBB805 40% 60%, 
            rgba(201, 66, 171, 0.52) 60% 75%, 
            rgba(8, 181, 212, 1) 75% 90%, 
            #D9D9D9 90% 100%)`, // Define specific percentage for each color
                },
              }}
            />

            <VStack align="stretch" spacing={10}>
              {/* Individual items */}
              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Fuel
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 20,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    40%
                  </Text>
                </Flex>
              </Flex>

              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Food
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 15,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    35%
                  </Text>
                </Flex>
              </Flex>

              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Travel
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 10,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    20%
                  </Text>
                </Flex>
              </Flex>

              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Travel
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 10,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    10%
                  </Text>
                </Flex>
              </Flex>

              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Voucher
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 5,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    10%
                  </Text>
                </Flex>
              </Flex>

              <Flex justify="space-between" fontSize="sm">
                <Text mb={"2"} color={"#4F6487"} fontWeight={500}>
                  Voucher
                </Text>
                <Flex align="center">
                  <Text mb={"2"} mr={2} fontWeight={600}>
                    ₹ 5,000
                  </Text>
                  <Text mb={"2"} fontSize="xs" color="gray.500">
                    10%
                  </Text>
                </Flex>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </HStack>

      {/* Total spending's */}

      <HStack alignItems={"start"} spacing={6} mt={6}>
        {/* box */}
        <Box rounded={"md"} boxShadow="md" p={4} bg="white" w={350} minH={395}>
          <HStack justifyContent={"space-between"} mb={4} alignItems={"start"}>
            <Text color={"#474279"} fontSize={"sm"} fontWeight={500} mb={0}>
              Total spending's
            </Text>

            <Box
              fontSize={"xs"}
              display={"flex"}
              alignItems={"center"}
              bg={"#F2EEF8"}
              py={2}
              px={2}
              rounded={"md"}
            >
              <Text
                as={"span"}
                display={"flex"}
                alignItems={"center"}
                color={"#6311CB"}
                fontWeight={500}
                fontSize={"10px"}
              >
                <Text as={"span"} me={1}>
                  Feb 20 - Jan 30, 2024{" "}
                </Text>
                <IoMdArrowDropdown />
              </Text>
            </Box>
          </HStack>

          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px dashed rgba(99, 17, 203, 0.3)"}
            pb={"4"}
            mb={"4"}
          >
            <Box>
              <Text fontSize={"sm"} fontWeight={500} mb={1}>
                Expense
              </Text>
              <Text fontSize={"xs"} color={"#878787"} fontWeight={500}>
                ₹ 50,000
              </Text>
            </Box>
            <Box>
              <CircularProgress value={40} color="#C33FAD" size={16}>
                <CircularProgressLabel fontWeight={500} fontSize={"sm"}>
                  40%
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </HStack>
          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px dashed rgba(99, 17, 203, 0.3)"}
            pb={"4"}
            mb={"4"}
          >
            <Box>
              <Text fontSize={"sm"} fontWeight={500} mb={1}>
                Benefit
              </Text>
              <Text fontSize={"xs"} color={"#878787"} fontWeight={500}>
                ₹ 50,000
              </Text>
            </Box>
            <Box>
              <CircularProgress value={60} color="#C33FAD" size={16}>
                <CircularProgressLabel fontWeight={500} fontSize={"sm"}>
                  60%
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </HStack>
          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px dashed rgba(99, 17, 203, 0.3)"}
            pb={"4"}
            mb={"4"}
          >
            <Box>
              <Text fontSize={"sm"} fontWeight={500} mb={1}>
                Gifts & voucher
              </Text>
              <Text fontSize={"xs"} color={"#878787"} fontWeight={500}>
                ₹ 50,000
              </Text>
            </Box>
            <Box>
              <CircularProgress value={80} color="#C33FAD" size={16}>
                <CircularProgressLabel fontWeight={500} fontSize={"sm"}>
                  80%
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </HStack>
        </Box>

        {/* table  */}
        <Box bg={"#fff"} shadow={"md"} rounded={"md"} p={4} flex={1}>
          <HStack justifyContent={"space-between"} mb={2}>
            <Heading fontSize={"md"} fontWeight={500} mb={0} color={"#474279"}>
              Employee Transaction
            </Heading>

            <HStack>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
                >
                  Expense
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                  <MenuItem fontSize={"sm"}>Descending</MenuItem>
                  <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                  <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
                </MenuList>
              </Menu>
              <Box
                fontSize={"xs"}
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
              <BsArrowsAngleExpand
                onClick={() => navigate("/dashboard/employees-transaction")}
                as={Button}
                color={"#6311CB"}
                size={18}
                cursor={"pointer"}
              />
            </HStack>
          </HStack>

          <HStack justifyContent={"space-between"} mt={2}>
            <HStack bg={"#F2EEF8"} p={2} rounded={"md"}>
              <Text fontSize={"xs"} color={"#888888"} mb={0}>
                Total report amount
              </Text>
              <Text fontSize={"sm"} color={"#6311CB"} mb={0} fontWeight={500}>
                ₹ 50,000
              </Text>
            </HStack>
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
          </HStack>

          <Box mt={4}>
            <NormalTable
              emptyMessage={`We don't have any Sponers `}
              tableHeadRow={dashHeadThirdRow}
              data={dashThirdArr}
              isLoading={isLoading}
            />
          </Box>
        </Box>
      </HStack>
      <LoadMoneyModal isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
};

export default Dashbaord;
