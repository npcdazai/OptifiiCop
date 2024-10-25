// import React from "react";
// import { OPACITY_ON_LOAD } from "../../../Layout/animations";
// import { Box, Tag, TagLabel, Text } from "@chakra-ui/react";

// const ApplicationStatus = () => {
//   return (
//     <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>

//     </Box>
//   );
// };

// export default ApplicationStatus;
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
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../../Components/MiniHeader";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
import NormalTable from "../../../Components/DataTable/NormalTable";
import {
  AddIcon,
  CalendarIcon,
  ChevronDownIcon,
  EmailIcon,
  SearchIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  MdFilterList,
  MdNotificationsNone,
  MdOutlineHeadsetMic,
} from "react-icons/md";
import { RiDeleteBin5Line, RiWallet3Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import { Link } from "react-router-dom";
import backFund from "../../../assets/backfund.svg";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../../assets/pdfIcon.svg";
import ExcelIcon from "../../../assets/ExcelIcon.svg";
import redinfo from "../../../assets/redinfo.png";
import pooja from "../../../assets/poojaShah.png";

const Employees = () => {
  const { ApplicationStatus } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    "Mobile number",
    "Department",
    "Load Status",
    "Active Status",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = ApplicationStatus.map((item, index) => ({
    "Emp ID": (
      //   <Radio colorScheme="purple" value="1">
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
      >
        {/* <Icon
          as={PiReceipt}
          boxSize={8}
          p={1.5}
          bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
          rounded={"full"}
        /> */}
        {item?.EmpID}
      </Text>
      //   </Radio>
    ),
    Name: (
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Image src={pooja} h="40px" />
        <Text pt={4} fontSize="xs" fontWeight={400}>
          {item?.Name}
        </Text>
      </Box>
    ),
    "Email Address": item?.emailAddress,
    "Mobile number": item?.mobileNumber,
    Grade: item?.Grade,
    Department: item?.Department,
    Role: item?.Role,
    "Load Status": (
      <Box display="flex" flexDirection="column" alignItems="center">
        {item?.LoadStatus === "10,000" ? (
          <Text>{item?.LoadStatus}</Text>
        ) : item?.LoadStatus === "load Card" ? (
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
            <TagLabel textDecoration="underline"> {item?.LoadStatus}</TagLabel>
          </Tag>
        ) : null}
      </Box>
      //   <Tag
      //     my={1}
      //     size={"sm"}
      //     borderRadius="full"
      //     colorScheme={
      //       item?.status === "Active"
      //         ? "green"
      //         : item?.status === "Inactive"
      //         ? "red"
      //         : "gray"
      //     }
      //     border={`1px solid ${
      //       item?.status === "Active"
      //         ? "green"
      //         : item?.status === "Inactive"
      //         ? "red"
      //         : "gray" // default border color if status doesn't match any condition
      //     }`}
      //     p={1}
      //     px={3}
      //   >
      //     <TagLabel>{item?.status}</TagLabel>
      //   </Tag>
    ),
    "Active Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.ActiveStatus === "Active" ? (
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
            <TagLabel> {item?.ActiveStatus}</TagLabel>
          </Tag>
        ) : item?.ActiveStatus === "Activate" ? (
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
              {item?.ActiveStatus}
            </TagLabel>
          </Tag>
        ) : null}
      </Box>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <Box
      x
        rounded={"xl"}
        py={3}
        // pb={0}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={3}
        >
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Text color="#6311CB" fontWeight={400} fontSize="medium">
              #45152487
            </Text>
            <Text color="#8C9198" fontWeight={400} fontSize="small">
              Order ID
            </Text>
          </Box>
          <Tag
            my={1}
            size={"sm"}
            bgColor="#3725EA26"
            borderRadius="13.75px"
            color="#3725EA"
            p={2}
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight={500}
          >
            <TagLabel>Order accepted</TagLabel>
          </Tag>
        </Box>
        <VStack mb={0} px={3} alignItems={"start"} gap={0}>
          <Divider />
          <HStack w={"100%"} justifyContent={"space-between"} mb={4}>
            <Box>
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
            </Box>
            <Box>
              <Box>
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
          </HStack>
        </VStack>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default Employees;
