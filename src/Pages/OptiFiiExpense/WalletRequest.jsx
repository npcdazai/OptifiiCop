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
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { CiBoxList } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import Sales from "./wallet/Sales";
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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import RequestModal from "./wallet/RequestModal";
const WalletProgram = () => {
  const { walletProgram } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showGrid, setShowGrid] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const btnRef = useRef(null);


  const handleCloseBothModals = () => {
    onClose();
    onApproveClose(); 
  };
  const {
    isOpen: isApproveOpen,
    onOpen: onApproveOpen,
    onClose: onApproveClose,
  } = useDisclosure();

  const transactionLimits = [
    { period: "Daily", amount: "₹ 5000" },
    { period: "Weekly", amount: "₹ 25000" },
    { period: "Monthly", amount: "₹ 50000" },
  ];

  const Submission = [
    { receipt: "Required for all transaction", natureofreceipt: "Printed" },
  ];

  const departmentBudget = [
    { name: "Reethik thota", amt: "₹ 25000" },
    { name: "Pooja patade", amt: "₹ 25000 " },
  ];

  const approvers1 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];
  const approvers2 = [
    { name: "Reethik thota", role: "Bill approver" },
    { name: "Reethik thota", role: "Bill approver" },
  ];

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
    "Wallet Name",
    "Created by",
    "Wallet amount",
    "Date & time",
    "Action",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))
  walletProgram.map((item) => console.log(item));
  const extractedArray = useMemo(() => {
    return walletProgram.map((item) => ({
      "Sr. No": <Text fontSize="xs">{item?.id}</Text>,
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
      "Date & time": item?.CreatedOn,
      "Created by": (
        <HStack>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
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
          size={"xs"}
          bg={"#6311CB"}
          py={1}
          fontWeight={400}
          px={3}
          color="#fff"
          onClick={onOpen}
        >
          View
        </Button>
      ),
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
          data={extractedArray}
          isLoading={isLoading}
        />
      </Box>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader px={4} pt={4}>
            <Text fontSize="small" fontWeight={600}>
              Wallet approval request
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            p={0}
            bgColor="#F3F3F9"
            gap={2}
            display="flex"
            flexDirection="column"
          >
            <RequestModal />
          </ModalBody>
          <ModalFooter>
            <HStack alignItems="center">
              <Button
                bgColor="#F0F0F0"
                color="#202020"
                w="200px"
                fontSize="small"
                onClick={onApproveOpen}
                h="44px"
              >
                Close
              </Button>
              <Button
                bgColor="#6311CB"
                color="#FFFFFF"
                w="200px"
                ontSize="small"
                h="44px"
                _hover={{
                  bgColor: "#6311CB",
                  color: "#FFFFFF",
                }}
              >
                Approve
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        onClose={onApproveClose}
        isOpen={isApproveOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <VStack alignItems="flex-start">
              <Text
                as="span"
                fontSize="medium"
                fontWeight={600}
                color="#101828"
              >
                Reason for wallet rejection
              </Text>
              <Text as="p" fontWeight={500} fontSize="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit.
              </Text>
              <Textarea />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="#F0F0F0"
              color="#344054"
              fontSize="small"
              fontWeight={600}
              mr={3}
              onClick={handleCloseBothModals}
            >
              Cancel
            </Button>
            <Button
              bgColor="#6311CB"
              color="#ffff"
              _hover={{ bgColor: "#6311CB", color: "#ffff" }}
              variant="ghost"
            >
              submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default WalletProgram;
