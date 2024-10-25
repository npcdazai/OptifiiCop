import { Box, Button, Divider, Heading, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { GrDownload } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { ChevronDownIcon } from "@chakra-ui/icons";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";

const ViewReports = () => {
  const { viewReports } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // ======================= [ Table Header ] =======================
  const tableHeadRow = [
    "Invoice",
    "Amount",
    "Paid from wallet",
    "Status",
    "Action",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = viewReports.map((item, index) => ({
    Invoice: (
      <HStack>
        <Box p={2} bg={"#ebe0f8"} rounded={"full"}>
          <LiaFileInvoiceSolid color="#6311CB" fontSize={"18px"} />
        </Box>
        <Text color={"#3725EA"} fontSize={"xs"} fontWeight={500} mb={0}>
          {item?.inVoice}
        </Text>
      </HStack>
    ),
    Amount: item?.amount,
    "Paid from wallet": item?.paidWallet,
    Status:(
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
            p={1}          >
            <GoDotFill />
            {item?.status}
        </Box>
      ),
    Action: (
        <Button
          gap={2}
          fontSize="x-small"
          color="#039E38"
          bgColor="transparent"
          _hover={{ bgColor: "white" }}
        >
          <GrDownload />
          Download
        </Button>
    ),
  }));

  return (
    <Box h={"100%"} p={4} {...OPACITY_ON_LOAD} overflowX={"scroll"}>
      <Box bg={"#fff"} p={4} rounded={"md"} boxShadow={"md"} mb={5}>
        <HStack mb={4} justifyContent={"space-between"}>
          <Heading fontSize={"md"} fontWeight={500} mb={0}>
            Food expense June 2024
          </Heading>
          <Box
            fontSize={"xs"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            bg={"#F8F3FF"}
            rounded={"full"}
            color={"#6311CB"}
            py={1} px={2}          >
            <GoDotFill />
            Fully Reimbursed
        </Box>
        </HStack>
        <Divider />
        <HStack width={"100%"} mb={8}>
          <Box flex={1}>
            <Text fontSize={"sm"} mb={2} fontWeight={500}>
              Report by
            </Text>
            <Text color={"#696969"} fontSize={"xs"} fontWeight={400}>
              Kartikey Gautam
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"} mb={2} fontWeight={500}>
              Report amount
            </Text>
            <Text color={"#696969"} fontSize={"xs"} fontWeight={400}>
              ₹ 10,000
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"} mb={2} fontWeight={500}>
              Date & time
            </Text>
            <Text color={"#696969"} fontSize={"xs"} fontWeight={400}>
              22 June, 2024
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"} mb={2} fontWeight={500}>
              Approver
            </Text>
            <Text color={"#696969"} fontSize={"xs"} fontWeight={400}>
              Pooja Patade
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize={"sm"} mb={2} fontWeight={500}>
              Disburser
            </Text>
            <Text color={"#696969"} fontSize={"xs"} fontWeight={400}>
              Pooja Patade
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box bg={"#fff"} p={4} rounded={"md"} boxShadow={"md"}>
      <HStack mb={4} justifyContent={"space-between"}>
          <Heading fontSize={"md"} fontWeight={500} mb={0}>
            Food expense June 2024
          </Heading>
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
        </HStack>
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

export default ViewReports;
