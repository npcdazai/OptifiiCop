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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  AddIcon,
  CalendarIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { RiDeleteBin5Line, RiWallet3Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import NormalTable from "../../../Components/DataTable/NormalTable";
import SwitchButton from "../../../Components/SwitchButton";
import AddDepartment from "./AddDepartmentModal";

const Department = () => {
  const { department } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    "department",
    "Role",
    "Created by",
    "Date & time",
    "Approved by",
    "Action",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = department.map((item, index) => ({
    department: item?.department,
    Role: item?.role,
    "Created by": item?.createdBy,
    "Date & time": item?.dateTime,
    "Approved by": item?.approvedBy,
    Action: (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <SwitchButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
      </Box>
    ),
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
        <VStack mb={3} px={3} alignItems={"start"} gap={0}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
          >
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
              <PrimaryButton onClick={onOpen} leftIcon={<AddIcon />} title={"Add Department"} />
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
      <AddDepartment isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Department;
