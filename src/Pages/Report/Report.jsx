import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { CalendarIcon, ChevronDownIcon, EmailIcon, ViewIcon } from "@chakra-ui/icons";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { MdNotificationsNone, MdOutlineHeadsetMic, MdOutlineUnarchive } from "react-icons/md";
import { RiDeleteBin5Line, RiWallet3Line } from "react-icons/ri";
import { AiOutlineCalendar, AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";
import ApexLine from "../../Components/Doughnut/ApexLine";
import PieCharts from "../../Components/Doughnut/PieCharts";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import Chart from 'chart.js/auto'

const Report = () => {
  const { transactionHistory } = useContext(GlobalStateContext);
  const { reportStatus } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);

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
    "Employee Name",
    "Employee ID",
    "Department",
    "Wallet",
    "Merchant",
    "Nature of expense",
    "Date & time",
    "Amount",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))
  const extractedArray = transactionHistory.map((item, index) => ({
    Name: <Text as={'span'} display={'flex'} gap={2} alignItems={'center'}>
    <Icon as={PiReceipt} boxSize={8} p={1.5} bg={index % 2 === 0 ? "#6311cb14" : "#fff"} rounded={'full'} />{item?.name}</Text>,
    "Employee Name": 
      item?.employeeName,
    "Employee ID": item?.employeeID,
    "Department": item?.department,
    "Wallet": item?.wallet,
    "Merchant": item?.merchant,
    "Nature of expense": item?.natureExpense,
    "Date & time": item?.dateTime,
    "Amount":(
      <Box color={"#59C36A"}>{item?.amount}</Box>
    ),
  }));


    // ===============================[ Table Header ]
    const tableHeadRowReport = [
      "Report Name",
      "Report by",
      "Report amount",
      "Date & time",
      "Status",
      "Approver",
      "Disburser",
      "Action",
    ];
  
    // const extractedArray = reportsHistory.map((item)=>({ }))
    const extractedArrayReport = reportStatus.map((item, index) => ({
      Name: <Text as={'span'} display={'flex'} gap={2} alignItems={'center'}>
      <Icon as={PiReceipt} boxSize={8} p={1.5} bg={index % 2 === 0 ? "#6311cb14" : "#fff"} rounded={'full'} />{item?.name}</Text>,
        "Report Name":item?.reportName,
        "Report by":(
          <HStack>
            <Image
              borderRadius='full'
              boxSize='40px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
            <Text color={"#667085"} fontSize={"xs"} mb={1}>
              Pooja Shah
            </Text>
          </HStack>
        ),
        "Report amount": item?.reportAmount,
        "Date & time": item?.dateTime,
        "Status":  (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            bg={
              item?.status === "Fully Reimbursed"
                ? "#F8F3FF"
                : item?.status === "Partially Reimbursed"
                  ? "Partially Reimbursed"
                  : item?.status === "Approved"
                    ? "#00A43814"
                    : "#f8d7da" 
            }
            rounded={"full"}
            color={
              item?.status === "Fully Reimbursed"
                ? "#6311CB"
                : item?.status === "Partially Reimbursed"
                  ? "#EAB600"
                  : item?.status === "Approved"
                    ? "#00A438"
                    : "#721c24" // Default red text for unknown statuses
            }
            py={1.5}
            px={1}
          >
            <GoDotFill />
            {item?.status}
          </Box>
        ),
        "Approver": (
          <HStack>
            <Image
              borderRadius='full'
              boxSize='40px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
            <Text color={"#667085"} fontSize={"xs"} mb={1}>
            Ravi Sharma
            </Text>
          </HStack>
        ),
        "Disburser":(
          <HStack>
            <Image
              borderRadius='full'
              boxSize='40px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
            />
            <Text color={"#667085"} fontSize={"xs"} mb={1}>
            Karan Johar
            </Text>
          </HStack>
        ),
        "Action":(
          <Link to="/reports/view-report"><Badge fontWeight={500} fontSize={"10px"} bg="#6211CB" color={"#fff"} p={1} px={2} rounded={5}>View Reports</Badge></Link>
       ),
    }));

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <HStack mb={4} justifyContent={"space-between"}>
          <Heading fontSize={"md"} fontWeight={500} mb={0}>
             Report
          </Heading>
          <Box display={"flex"} alignItems={"center"} gap={3}>
              <Box
                fontSize={"xs"}
                display={"flex"}
                alignItems={"center"}
                bg={"#fff"}
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
              <Button
                as={Button}
                leftIcon={<MdOutlineUnarchive fontSize={"16px"} />}
                // rightIcon={<ChevronDownIcon />}
                fontSize={"xs"}
                size={"sm"}
                me={2}
                style={{backgroundColor:"#fff"}}
                color={"#6311CB"}
              >
                Export
              </Button>
          </Box>
        </HStack>
      <HStack w={"100%"} mb={4}>
          <Box h={300} bg={"#fff"} me={2} rounded={6} w={"65%"} pb={0} p={4} boxShadow={"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}>
            {/* <ApexLine /> */}
          </Box>
          <Box  h={300} bg={"#fff"} rounded={6} w={"35%"} p={4} display={"flex"} justifyContent={"center"} boxShadow={"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}>
            {/* <PieCharts /> */}
          </Box>
        </HStack>
      <Box
        rounded={"xl"}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
        mb={4}
      >
        <Box display={"flex"} justifyContent={"space-between"} p={4} alignItems={"center"}>
          <Heading fontSize={"md"} mb={0} fontWeight={500}>Transaction history</Heading>
          <Box display={"flex"}>
            <Select placeholder="Weekly" size={"sm"} rounded={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>
      <Box
        rounded={"xl"}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
      <Box display={"flex"} justifyContent={"space-between"} p={4} alignItems={"center"}>
          <Heading fontSize={"md"} mb={0} fontWeight={500}>Reimbursement status</Heading>
          <Box display={"flex"}>
            <Select placeholder="Weekly" size={"sm"} rounded={"md"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRowReport}
          data={extractedArrayReport}
          isLoading={isLoading}
        />
        </Box>
    </Box>
  );
};

export default Report;
