import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
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
import React, { useContext, useEffect, useMemo, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { CiBoxList } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import {
  AddIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EmailIcon,
  SearchIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  MdFilterList,
  MdNotificationsNone,
  MdOutlineHeadsetMic,
} from "react-icons/md";
import { MdOutlineUnarchive } from "react-icons/md";

import { RiDeleteBin5Line, RiWallet3Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { Link, NavLink } from "react-router-dom";
import backFund from "../../assets/backfund.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import ActiveCards from "./Grid/ActiveCards";
import PendingApproval from "./Grid/PendingApproval";
import Decline from "./Grid/Decline";
import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import CreateBenefitWalletModal from "./wallet/CreateBenefitWalletModal";
import { IoFilterSharp } from "react-icons/io5";

const WalletProgram = () => {
  const { walletProgram } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showGrid, setShowGrid] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleViewToggle = (viewType) => {
    setShowGrid(viewType === "grid");
  };

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
    "ID",
    "Wallet Name",
    "Wallet type",
    "Department",
    "Status",
    "Wallet amount",
    "Created on",
    "Created by",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))
  walletProgram.map((item) => console.log(item));
  const extractedArray = useMemo(() => {
    return walletProgram.map((item) => ({
      ID: <Text fontSize="xs">{item?.id}</Text>,
      "Wallet Name": (
        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
          <Image
            h="23px"
            src={item.walletName[0]?.icon}
            alt={item.walletName[0]?.icon}
          />
          {item?.walletName[0]?.name}
        </Box>
      ),
      "Wallet type": item?.WalletType,
      Department: item?.department,
      Status: (
        <Tag
          size="sm"
          borderRadius="full"
          bgColor={
            item?.status === "Active"
              ? "#00A43814"
              : item?.status === "Inactive"
              ? "#C33FAD21"
              : "#E0BC0114"
          }
          color={
            item?.status === "Active"
              ? "#00A438"
              : item?.status === "Inactive"
              ? "#C33FAD"
              : "#E0BC01"
          }
          p={1}
          px={3}
        >
          <TagLabel>{item?.status}</TagLabel>
        </Tag>
      ),
      "Wallet amount": item?.WalletAmount,
      "Created on": item?.CreatedOn,
      "Created by": item?.CreatedBy,
    }));
  }, [walletProgram]);

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
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
            <InputGroup width={300} size="sm" ml={5}>
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
            <Box>
              <Button
                as={Button}
                leftIcon={<MdOutlineUnarchive />}
                // rightIcon={<ChevronDownIcon />}
                fontSize={"xs"}
                colorScheme="gray"
                color={"gray.700"}
                variant="outline"
                size={"sm"}
                me={2}
              >
                View achieve
              </Button>
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
              <PrimaryButton
                onClick={onOpen}
                leftIcon={<AddIcon />}
                title={"Create wallet"}
              />

              {/* <NavLink to="/wallet-program/create-wallet">
              </NavLink> */}
            </Box>
          </Box>
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
              {/* <Link to={"#"} style={{ marginRight: "8px" }}>
                <SecondaryButton
                  leftIcon={<Image me={2} src={backFund} w={"17px"} />}
                  title={"Pull back funds"}
                />
              </Link> */}
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
                <MenuList w="160px" h="300px" overflowY="scroll">
                  <VStack p={2} alignItems="flex-start">
                    <HStack alignItems="center">
                      <IoFilterSharp fontSize="small" />{" "}
                      <Text as="span" fontSize="small" fontWeight={600}>
                        Filter
                      </Text>
                    </HStack>
                    <Box w="100%" borderBottom="1px solid #D8D8D8" />
                    <VStack gap={4} alignItems="flex-start" p={3} w="100%">
                      {/* Wallet Type Section */}
                      <VStack align="start" spacing={2}>
                        <Text as="span" fontSize="sm" fontWeight={600}>
                          Wallet Type
                        </Text>
                        <Checkbox defaultChecked>Prefilled </Checkbox>
                        <Checkbox>Reimburse</Checkbox>
                      </VStack>

                      <VStack align="start" spacing={2}>
                        <Text as="span" fontSize="sm" fontWeight={600}>
                          Status
                        </Text>
                        <Checkbox defaultChecked>Active </Checkbox>
                        <Checkbox>Pending</Checkbox>
                      </VStack>
                      {/* Status Section */}
                      <VStack align="start" spacing={2}>
                        <Text as="span" fontSize="sm" fontWeight={600}>
                          Department
                        </Text>
                        <Checkbox>Finance</Checkbox>
                        <Checkbox>design</Checkbox>
                      </VStack>
                    </VStack>
                  </VStack>
                </MenuList>
              </Menu>

              <Button
                leftIcon={<CiBoxList />}
                fontSize="xs"
                colorScheme={showGrid ? "gray" : "purple"}
                variant={showGrid ? "outline" : "solid"}
                size="sm"
                me={2}
                onClick={() => handleViewToggle("list")}
              >
                List
              </Button>

              <Button
                leftIcon={<BsFillGridFill />}
                fontSize="xs"
                colorScheme={!showGrid ? "gray" : "purple"}
                variant={!showGrid ? "outline" : "solid"}
                size="sm"
                onClick={() => handleViewToggle("grid")}
              >
                Grid
              </Button>
            </Box>
          </HStack>
        </VStack>
        {showGrid ? (
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={tableHeadRow}
            data={extractedArray}
            isLoading={isLoading}
          />
        ) : (
          <Box>
            <Tabs position="relative" variant="unstyled">
              <TabList color="#B0B0B0">
                <Tab
                  fontSize="small"
                  _selected={{
                    color: "#6311CB",
                    fontWeight: "medium",
                  }}
                >
                  Active wallets
                </Tab>
                <Tab
                  fontSize="small"
                  _selected={{
                    color: "#6311CB",
                    fontWeight: "medium",
                  }}
                >
                  Pending for approval
                </Tab>
                <Tab
                  fontSize="small"
                  _selected={{
                    color: "#6311CB",
                    fontWeight: "medium",
                  }}
                >
                  Declined wallets
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
                color="red"
              />
              <TabPanels>
                <TabPanel>
                  <ActiveCards />
                </TabPanel>
                <TabPanel>
                  <PendingApproval />
                </TabPanel>
                <TabPanel>
                  <Decline />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Box>
      {/* Modal  */}
      <CreateBenefitWalletModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default WalletProgram;
