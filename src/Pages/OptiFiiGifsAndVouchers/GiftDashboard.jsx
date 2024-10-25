import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { BsArrowsAngleExpand, BsFilterRight } from "react-icons/bs";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import womenpfp from "../../assets/womenpfp1.png";
import NormalTable from "../../Components/DataTable/NormalTable";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import info from "../../assets/info.png";
import redinfo from "../../assets/redinfo.png";
import { Link, NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import ReactApexChart from "react-apexcharts";
import { GoDotFill } from "react-icons/go";
import GC from "../../assets/GC.svg";
import GPR from "../../assets/GPR.svg";
import BV from "../../assets/BV.svg";

const GiftDashboard = () => {
  const { digital } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setusers] = useState(50);
  const [searchTerm, setSearchTerm] = useState("");

  const [chartData, setChartData] = useState({
    series: [78, 68, 87], // Ensure these are numeric values, not strings
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "50%",
            background: "transparent",
            image: undefined,
          },
          track: {
            show: true,
            background: "#f2f2f2", // Light background for the track
            strokeWidth: "80%", // Thinner track for the bars
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: "12px",
            formatter: function (seriesName, opts) {
              return (
                seriesName +
                ": " +
                opts.w.globals.series[opts.seriesIndex] +
                "%"
              );
            },
          },
        },
      },
      colors: ["#C33FAD", "#3725EA", "#6311CB"],
      labels: ["540", "300", "230"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

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
    "Order ID",
    "Load Status",
    "Date & time",
    "Total employees",
    "Total valuation",
    "Activation Status",
  ];

  const physicaltableHeadRow = [
    "Sr. no",
    "Vouchers",
    "Valuation",
    "Type",
    "Style",
    "Status",
  ];

  const instantTableHeadRow = [
    "Sr. no",
    "Order ID",
    "Load Status",
    "Date & time",
    "Quantity",
    "Total employees",
    "Total valuation",
    "Activation Status",
  ];

  // Voucher tab

  const voucherTableHeadRow = [
    "Sr. no",
    "Vouchers",
    "Valuation",
    "Type",
    "Style",
    "Status",
  ];

  const physicalCardArr = digital.map((item, index) => ({
    "Sr. no": (
      <Checkbox colorScheme="purple">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
        >
          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Order ID": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
        color="#3725EA"
      >
        {item?.orderid}
      </Text>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="1.2rem" />
        <Image src={asian} h={"30px"} position="absolute" left="2.3rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="3.4rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#ECFDF3"
            borderRadius="13.75px"
            color="#027A48"
            p={1}
            px={3}
            border="1px solid #007E23"
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="transparent"
            borderRadius="13.75px"
            color="#6311CB"
            p={1}
            px={3}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Image h="14px" src={redinfo} />
            <TagLabel textDecoration="underline">
              {" "}
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
    "Card delivery status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.CardDeliveryStatus === "Delivered" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#ECFDF3"
            borderRadius="13.75px"
            color="#027A48"
            p={1}
            px={3}
            border="1px solid #007E23"
          >
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
          </Tag>
        ) : item?.CardDeliveryStatus === "Partially Delivered" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.CardDeliveryStatus === "Not Delivered" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#FFD9D8"
            borderRadius="13.75px"
            color="#CC4E4B"
            p={1}
            px={3}
            border="1px solid #FFACAA"
          >
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
  }));

  const extractedArray = digital.map((item, index) => ({
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      <Checkbox colorScheme="purple">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
        >
          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Order ID": (
      <NavLink to="/gift-card/digital-application-status">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
          color="#3725EA"
        >
          {item?.orderid}
        </Text>
      </NavLink>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="1.2rem" />
        <Image src={asian} h={"30px"} position="absolute" left="2.3rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="3.4rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#ECFDF3"
            borderRadius="13.75px"
            color="#027A48"
            p={1}
            px={3}
            border="1px solid #007E23"
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="transparent"
            borderRadius="13.75px"
            color="#6311CB"
            p={1}
            px={3}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Image h="14px" src={redinfo} />
            <TagLabel textDecoration="underline">
              {" "}
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
  }));

  const instaCardArr = digital.map((item, index) => ({
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      <Checkbox colorScheme="purple">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
        >
          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Order ID": (
      <NavLink to={"/gift-card/application-status"}>
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
          color="#3725EA"
        >
          {item?.orderid}
        </Text>
      </NavLink>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Quantity: item?.quantity,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="1.2rem" />
        <Image src={asian} h={"30px"} position="absolute" left="2.3rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="3.4rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#ECFDF3"
            borderRadius="13.75px"
            color="#027A48"
            p={1}
            px={3}
            border="1px solid #007E23"
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="transparent"
            borderRadius="13.75px"
            color="#6311CB"
            p={1}
            px={3}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Image h="14px" src={redinfo} />
            <TagLabel textDecoration="underline">
              {" "}
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
  }));

  const voucherCardArr = digital.map((item, index) => ({
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      <Checkbox colorScheme="purple">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
        >
          {item?.id}
        </Text>
      </Checkbox>
    ),

    Vouchers: (
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
    Valuation: <Text mb={0}>₹ 20,000</Text>,
    Type: <Text mb={0}>Admin</Text>,
    Style: <Text mb={0}>Admin</Text>,
    Status: (
      <Tag
        size={"sm"}
        py={1.5}
        rounded="full"
        fontSize={"xs"}
        color={
          item?.status === "Distributed"
            ? "#00A438"
            : item?.status === "Pending"
            ? "#EAB600"
            : "red"
        }
        border={`1px solid ${
          item?.status === "Distributed"
            ? "#00A438"
            : item?.status === "Pending"
            ? "#EAB600"
            : "red"
        }`}
        bg={
          item?.status === "Distributed"
            ? "#ebf8ef"
            : item?.status === "Pending"
            ? "#fdf9eb"
            : "#ffe5e5"
        }
      >
        <Text mb={0}>{item?.status || "N/A"}</Text>
      </Tag>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} overflowX={"scroll"} p={4}>
      <Box>
        <HStack align="center" wrap="wrap" gap={4} mb={6}>
          {/* Gift Card */}
          <NavLink
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              cursor: "pointer",
              flex: 1,
            }}
            to="/optifii-gifts-dashboard/apply-for-giftcards"
          >
            <Box
              h="20"
              borderRadius="md"
              bgGradient="linear(94.7deg, #C33FAD -20.49%, #3725EA -10.28%, #6311CB 39.15%)"
              px={4}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              shadow="md"
              flex={1}
              position={"relative"}
              overflow={"hidden"}
            >
              <Flex alignItems="center" gap={4}>
                <Box
                  bgGradient={
                    "linear-gradient(180deg, #FFFFFF -3.85%, #6311CB 210.58%)"
                  }
                  p={2}
                  rounded={"md"}
                >
                  <Image src={GC} w={10} h={6}></Image>
                </Box>

                <Text fontWeight="500" fontSize="sm" mb={0}>
                  Apply for gift card
                </Text>

                <Box
                  bg="#8241d5"
                  w="6"
                  h="6"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                >
                  <ArrowForwardIcon boxSize={5} color="white" />
                </Box>
              </Flex>
              <Box position={"absolute"} right={-2}>
                <Image
                  src={GC}
                  w={16}
                  mixBlendMode={"screen"}
                  opacity={0.7}
                ></Image>
              </Box>
            </Box>
          </NavLink>

          {/* Brand Voucher */}
          <Link
            style={{
              flex: 1,
              display:"flex",
              flexDirection:"row",
              alignItems:"center"
            }}
            to="/brand-voucher/buy-voucher"
          >
            <Box
              h="20"
              borderRadius="md"
              bgGradient="linear(94.7deg, #C33FAD -20.49%, #6311CB -10.28%, #3725EA 39.15%)"
              px={4}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              shadow="md"
              flex={1}
              position={"relative"}
            >
              <Flex alignItems="center" gap={4}>
                <Box
                  bgGradient={
                    "linear-gradient(180deg, #FFFFFF -3.85%, #6311CB 210.58%)"
                  }
                  p={2}
                  rounded={"md"}
                >
                  <Image src={BV} w={10} h={6}></Image>
                </Box>
                <Text fontWeight="500" fontSize="sm" mb={0}>
                  Apply for brand voucher
                </Text>
                <Box
                  bg="#5f51ee"
                  w="6"
                  h="6"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                >
                  <ArrowForwardIcon boxSize={5} color="white" />
                </Box>
              </Flex>
              <Box position={"absolute"} right={-2}>
                <Image
                  src={BV}
                  w={16}
                  mixBlendMode={"screen"}
                  opacity={0.7}
                ></Image>
              </Box>
            </Box>
          </Link>

          {/* GPR Card */}
          <Box
            h="20"
            borderRadius="md"
            bgGradient="linear(94.7deg, #C33FAD -20.49%, #6311CB -10.28%, #C942AB 39.15%)"
            px={4}
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            shadow="md"
            flex={1}
            position={"relative"}
          >
            <Flex alignItems="center" gap={4}>
              <Box
                bgGradient={
                  "linear-gradient(180deg, #FFFFFF -3.85%, #6311CB 210.58%)"
                }
                p={2}
                rounded={"md"}
              >
                <Image src={GPR} w={10} h={6}></Image>
              </Box>
              <Text fontWeight="500" fontSize="sm" mb={0}>
                Apply for GPR card
              </Text>
              <Box
                bg="#d468bc"
                w="6"
                h="6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <ArrowForwardIcon boxSize={5} color="white" />
              </Box>
            </Flex>
            <Box position={"absolute"} right={-2}>
              <Image
                src={GPR}
                w={16}
                mixBlendMode={"screen"}
                opacity={0.7}
              ></Image>
            </Box>
          </Box>
        </HStack>
      </Box>

      {/*Application status */}

      <HStack alignItems={"start"} spacing={6}>
        <Box flex={1} w={700}>
          {/* table 1 */}
          <Box
            bg={"#fff"}
            shadow={"md"}
            rounded={"md"}
            p={4}
            mb={4}
            h={507}
            overflowY={"auto"}
          >
            <HStack justifyContent={"space-between"} mb={2}>
              <Heading fontSize={"md"} fontWeight={500} mb={0}>
                Application status
              </Heading>
              <HStack>
                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<LuListFilter fontSize={"16px"} />}
                    rightIcon={<ChevronDownIcon />}
                    fontSize={"xs"}
                    color={"gray.700"}
                    variant="outline"
                    size={"sm"}
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
                <BsArrowsAngleExpand
                  // onClick={() => navigate("")}
                  as={Button}
                  color={"#6311CB"}
                  size={18}
                  cursor={"pointer"}
                />
              </HStack>
            </HStack>

            <Tabs position="relative" variant="unstyled">
              <Box borderBottom={"1px solid #D4D4D4"}>
                <TabList>
                  <Tab
                    color={"#B0B0B0"}
                    fontSize={"xs"}
                    fontWeight={500}
                    _selected={{
                      color: "#5E0FCD",
                    }}
                  >
                    Digital card
                  </Tab>
                  <Tab
                    color={"#B0B0B0"}
                    fontSize={"xs"}
                    fontWeight={500}
                    _selected={{
                      color: "#5E0FCD",
                    }}
                  >
                    Physical card
                  </Tab>
                  <Tab
                    color={"#B0B0B0"}
                    fontSize={"xs"}
                    fontWeight={500}
                    _selected={{
                      color: "#5E0FCD",
                    }}
                  >
                    Insta card
                  </Tab>
                  <Tab
                    color={"#B0B0B0"}
                    fontSize={"xs"}
                    fontWeight={500}
                    _selected={{
                      color: "#5E0FCD",
                    }}
                  >
                    GPR card
                  </Tab>
                </TabList>

                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="#5E0FCD"
                  borderRadius="1px"
                />
              </Box>

              <TabPanels>
                <TabPanel px={0}>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={tableHeadRow}
                    data={extractedArray}
                    isLoading={isLoading}
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={physicaltableHeadRow}
                    data={physicalCardArr}
                    isLoading={isLoading}
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={instantTableHeadRow}
                    data={instaCardArr}
                    isLoading={isLoading}
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={instantTableHeadRow}
                    data={physicalCardArr}
                    isLoading={isLoading}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        {/* box 2 */}

        <Box rounded={"md"} boxShadow="md" p={4} bg="white" w={350}>
          <HStack justifyContent={"space-between"} mb={4}>
            <Box>
              <Text fontSize={"sm"} fontWeight={500} mb={0}>
                Card distributions
              </Text>
            </Box>
            <Box fontSize={"xs"} bg={"#F2EEF8"} p={2} rounded={"md"}>
              <Text
                as={"span"}
                display={"flex"}
                alignItems={"center"}
                color={"#6311CB"}
              >
                <CiCalendar size={16} />
                <Text as={"span"} fontSize={"xs"} fontWeight={500} mx={1}>
                  Jan, 2024{" "}
                </Text>
                <IoMdArrowDropdown />
              </Text>
            </Box>
          </HStack>

          {/* chart  */}

          <Flex justify="center" align="center" p={5}>
            <Box>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="radialBar"
                height={390}
              />
            </Box>
          </Flex>
          <Box>
            <HStack
              justifyContent={"space-between"}
              borderBottom={"1px solid #f2f2f2"}
              pb={4}
            >
              <HStack spacing={2}>
                <GoDotFill color="#C33FAD" />
                <Text fontSize={"sm"} fontWeight={500} mb={0}>
                  Gift Cards
                </Text>
              </HStack>
              <Box>
                <Text fontSize={"sm"} fontWeight={500} mb={0} color={"#4B5359"}>
                  20%
                </Text>
              </Box>
            </HStack>

            <HStack
              justifyContent={"space-between"}
              borderBottom={"1px solid #f2f2f2"}
              py={4}
            >
              <HStack spacing={2}>
                <GoDotFill color="#3725EA" />
                <Text fontSize={"sm"} fontWeight={500} mb={0}>
                  Gift Voucher
                </Text>
              </HStack>
              <Box>
                <Text fontSize={"sm"} fontWeight={500} mb={0} color={"#4B5359"}>
                  50%
                </Text>
              </Box>
            </HStack>

            <HStack
              justifyContent={"space-between"}
              borderBottom={"1px solid #f2f2f2"}
              py={4}
            >
              <HStack spacing={2}>
                <GoDotFill color="#6311CB" />
                <Text fontSize={"sm"} fontWeight={500} mb={0}>
                  GPR Cards
                </Text>
              </HStack>
              <Box>
                <Text fontSize={"sm"} fontWeight={500} mb={0} color={"#4B5359"}>
                  30%
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </HStack>

      {/* last table  */}

      <Box bg={"#fff"} shadow={"md"} py={4} rounded={"md"}>
        <Box px={4} mb={4}>
          <Heading fontSize={"md"} fontWeight={500} mb={0}>
            My vouchers
          </Heading>
          <HStack mt={4} justifyContent={"space-between"}>
            <Box>
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
            </Box>
            <HStack>
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
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<LuListFilter fontSize={"16px"} />}
                  rightIcon={<ChevronDownIcon />}
                  fontSize={"xs"}
                  color={"gray.700"}
                  variant="outline"
                  size={"sm"}
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
          </HStack>
        </Box>

        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={voucherTableHeadRow}
          data={voucherCardArr}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default GiftDashboard;
