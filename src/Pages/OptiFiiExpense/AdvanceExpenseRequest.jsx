import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
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
  Select,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import womenpfp from "../../assets/womenpfp1.png";
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
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import AdvanceExpensePending from "./AdvExpPending";
import AdvanceExpenseCompleted from "./AvdExpComplted";
import AdvanceExpenseReject from "./AdvExpRejecte";

const AdvanceExpenseRequest = () => {
  const { AdvanceExpenseRequest } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setusers] = useState(50);
  const navigate = useNavigate();

  useEffect(() => {
    // Set isLoading to true
    setIsLoading(true);

    // Simulate a 3-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // ===============================[ Table Header ]

  const tableHeadRow = [
    "Sr. no",
    "Report name",
    "Report by",
    "Report amount",
    "Date & time",
    "Approver",
    "Disburser",
    "Action",
  ];

  const pendingTable = AdvanceExpenseRequest.map((item, index) => ({
    "Sr. no": (
      <Checkbox colorScheme="purple">
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

          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Report name": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
        color="#3725EA"
      >
        {item?.ReportName}
      </Text>
    ),
    "Report by": (
      <Flex align={"center"} gap={2}>
        <Avatar
          size={"sm"}
          name={item?.ReportBy?.profName}
          src={item?.ReportBy?.profImage}
        />
        <Text as={"span"}>{item?.ReportBy?.profName}</Text>
      </Flex>
    ),
    "Report amount": item?.ReportAmount,
    "Date & time": item?.DateTime,
    Approver: item?.Approver,
    Disburser: item?.Disburser,
    Action: (
      <Text
        as={"button"}
        onClick={() => navigate("/advance-expense-request-view")}
        fontSize={"xs"}
        color="#fff"
        bg={"#6311CB"}
        py={1.5}
        px={5}
        borderRadius={5}
      >
        {item?.Action}
      </Text>
    ),
  }));
  const completedTable = AdvanceExpenseRequest.map((item, index) => ({
    "Sr. no": (
      <Checkbox colorScheme="purple">
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

          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Report name": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
        color="#3725EA"
      >
        {item?.ReportName}
      </Text>
    ),
    "Report by": (
      <Flex align={"center"} gap={2}>
        <Avatar
          size={"sm"}
          name={item?.ReportBy?.profName}
          src={item?.ReportBy?.profImage}
        />
        <Text as={"span"}>{item?.ReportBy?.profName}</Text>
      </Flex>
    ),
    "Report amount": item?.ReportAmount,
    "Date & time": item?.DateTime,
    Approver: item?.Approver,
    Disburser: item?.Disburser,
    Action: (
      <Text
        as={"button"}
        fontSize={"xs"}
        color="#fff"
        bg={"#6311CB"}
        py={1.5}
        px={5}
        borderRadius={5}
      >
        {item?.Action}
      </Text>
    ),
  }));
  const rejectedTable = AdvanceExpenseRequest.map((item, index) => ({
    "Sr. no": (
      <Checkbox colorScheme="purple">
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

          {item?.id}
        </Text>
      </Checkbox>
    ),
    "Report name": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
        color="#3725EA"
      >
        {item?.ReportName}
      </Text>
    ),
    "Report by": (
      <Flex align={"center"} gap={2}>
        <Avatar
          size={"sm"}
          name={item?.ReportBy?.profName}
          src={item?.ReportBy?.profImage}
        />
        <Text as={"span"}>{item?.ReportBy?.profName}</Text>
      </Flex>
    ),
    "Report amount": item?.ReportAmount,
    "Date & time": item?.DateTime,
    Approver: item?.Approver,
    Disburser: item?.Disburser,
    Action: (
      <Text
        as={"button"}
        fontSize={"xs"}
        color="#fff"
        bg={"#6311CB"}
        py={1.5}
        px={5}
        borderRadius={5}
      >
        {item?.Action}
      </Text>
    ),
  }));

  const tabsData = [
    {
      label: "Pending",
      num: 50,
      content: <AdvanceExpensePending />,
    },
    {
      label: "Completed",
      content: <AdvanceExpenseCompleted />,
    },
    {
      label: "Rejected",
      content: (
        <AdvanceExpenseReject/>
      ),
    },
  ];

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <Box
        rounded={"xl"}
        py={3}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
        <Tabs position="relative" variant="unstyled">
          <TabList color="#B0B0B0">
            {tabsData?.map((tab, index) => (
              <Tab
                key={index}
                fontSize="small"
                _selected={{
                  color: "#6311CB",
                  fontWeight: "medium",
                }}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                {tab?.label}
                {tab?.label == "Pending" && (
                  <Text
                    as={"span"}
                    fontSize={"xs"}
                    color="#fff"
                    bg={"#6311CB"}
                    py={1}
                    px={2}
                    borderRadius={5}
                  >
                    {tab?.num}
                  </Text>
                )}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            color="red"
          />
          <TabPanels>
            {tabsData?.map((tabCont, index) => (
              <TabPanel key={index}>{tabCont?.content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default AdvanceExpenseRequest;
