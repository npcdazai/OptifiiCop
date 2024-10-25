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
  
  const AdvanceExpenseReject = () => {
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
        content: (
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={tableHeadRow}
            data={pendingTable}
            isLoading={isLoading}
          />
        ),
      },
      {
        label: "Completed",
        content: (
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={tableHeadRow}
            data={completedTable}
            isLoading={isLoading}
          />
        ),
      },
      {
        label: "Rejected",
        content: (
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={tableHeadRow}
            data={rejectedTable}
            isLoading={isLoading}
          />
        ),
      },
    ];
  
    return (
      <Box {...OPACITY_ON_LOAD} p={1} overflowX={"scroll"}>
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
            <VStack mb={0} px={3} alignItems={"start"} gap={0}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
              >
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
              <Divider />
              <HStack w={"100%"} justifyContent={"space-between"} mb={4}>
                <Flex align={"center"} gap={5}>
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
                  <Flex align={"center"} gap={2}>
                    <Text as={"span"} fontSize={"xs"}>
                      Show
                    </Text>
                    <Select borderRadius={5} size={"sm"}>
                      <option value="10">10</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="80">80</option>
                    </Select>
                    <Text as={"span"} fontSize={"xs"}>
                      entries
                    </Text>
                  </Flex>
                </Flex>
                <Box>
                  <Link to={"#"} style={{ marginRight: "8px" }}>
                    {/* <SecondaryButton
                      leftIcon={<Image me={2} src={backFund} w={"17px"} />}
                      title={"Pull back funds"}
                    /> */}
                  </Link>
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
              </HStack>
            </VStack>
            <NormalTable
              emptyMessage={`We don't have any Sponers `}
              tableHeadRow={tableHeadRow}
              data={pendingTable}
              isLoading={isLoading}
            />
        </Box>
      </Box>
    );
  };
  
  export default AdvanceExpenseReject;
    