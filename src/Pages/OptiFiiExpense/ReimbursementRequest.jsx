import {
  Box,
  Button,
  HStack,
  Icon,
  Checkbox,
  Tag,
  TagLabel,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { MdOutlineNoFood } from "react-icons/md";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useNavigate } from "react-router-dom";


const ReimbursementRequest = () => {


  const navigate = useNavigate();
  const { employees } = useContext(GlobalStateContext);
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
    "Sr. No",
    "Report name",
    "Report by",
    "Report amount",
    "Date & time",
    "Approver",
    "Disburser",
    "Action"
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = employees.map((item, index) => 
    ({
    "Sr. No": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
      >
        {index + 1}
      </Text>
    ),
    "Report name": (
      <Text color="#3725EA" fontSize="small" fontWeight={400}>{item?.reportname}</Text>
    ),
    // "Report by": item?.emailAddress,
    "Report amount": item?.reportamount,
    "Date & time": item?.datetime,
    "Approver": item?.approver,
    "Disburser": item?.disburser,
    "Report by": (
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
    Action: (

      <Button
        _hover={{ color: "gray.900", bg: "gray.300" }}
        transition={"0.3s"}
        onClick={() => navigate("/reimbursement-request-view")}
        size={"xs"}
        bg={"#6311CB"}
        py={1}
        fontWeight={400}
        px={3}
        color="#fff"
      >
        View
      </Button>
    ),
  }));

  return (
    <Box h={"100%"} p={4} {...OPACITY_ON_LOAD} overflowX={"scroll"}>
      {/* <MiniHeader
        title={"My Requests"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      /> */}

      <Box bg={"#fff"} p={4} rounded={"md"} boxShadow={"md"} mb={4}>
        <HStack justifyContent={"space-between"}>
          <HStack alignItems={"start"} spacing={4}>
            <Box bg={"#d7d3fb"} p={2} rounded={"full"}>
              <MdOutlineNoFood color="#3725EA" />
            </Box>
            <Box>
              <Text color={"#667085"} fontWeight={600} fontSize={"sm"} mb={1}>
                Food
              </Text>
              <Text color={"#667085"} fontSize={"xs"} mb={0}>
                Created by - Reethik Thota
              </Text>
            </Box>
          </HStack>
          <Box>
            <Text color={"#667085"} fontSize={"xs"} fontWeight={600} mb={1}>
              Wallet Amount
            </Text>
            <Text color={"#00A438"} fontSize={"sm"} fontWeight={500} mb={0}>
              ₹ 50,000
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box>
      </Box>
      <Box bg={"#fff"} p={4} rounded={"md"} boxShadow={"md"}>
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
          showRadioButton={true}
        />
      </Box>
    </Box>
  );
};

export default ReimbursementRequest;
