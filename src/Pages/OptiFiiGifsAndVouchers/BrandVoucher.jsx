import {
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
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
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
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { Link } from "react-router-dom";
import backFund from "../../assets/backfund.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import VoucherImg from "../../assets/voucher.png";
import { GrDownload } from "react-icons/gr";

const BrandVoucher = () => {
  const { voucher } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRadio, setSelectedRadio] = useState([]);

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
    "Sr. no",
    "Date & time",
    "Employees/department",
    "Total amount",
    "Order Status",
    "Allotment history",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = voucher.map((item, index) => ({
    id: item.id,
    "Sr. no": (
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
        >
          {item?.id}
        </Text>
    ),
    "Date & time": item?.DateTime,
    "Employees/department": item?.EmployeesDepartment,
    "Total amount": item?.TotalAmount,
    // Grade: item?.Grade,
    // Department: item?.Department,
    // Role: item?.Role,
    "Order Status": (
      <Tag
        my={1}
        size={"sm"}
        borderRadius="full"
        bgColor={
          item?.OrderStatus === "Scheduled"
            ? "#F8F3FF"
            : item?.OrderStatus === "#Completed"
            ? "#00A43814"
            : " "
        }
        color={
          item?.OrderStatus === "Scheduled"
            ? "#6311CB"
            : item?.OrderStatus === "Completed"
            ? "#00A438"
            : ""
        }
        p={1}
        px={3}
      >
        <TagLabel>● {item?.OrderStatus}</TagLabel>
      </Tag>
    ),
    "Allotment history": (
      <>
        <Button
          display="flex"
          alignItems="center"
          gap={2}
          fontSize="x-small"
          color="#3725EA"
          bgColor="white"
          _hover={{ bgColor: "white" }}
        >
          <GrDownload />
          Download
        </Button>
      </>
    ),
  }));

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
            <Box>
              <Link to={"#"} style={{ marginRight: "8px" }}>
                <SecondaryButton
                  leftIcon={<Image me={2} src={VoucherImg} w={"17px"} />}
                  title={"Voucher draft"}
                />
              </Link>

              <Link
                to={"/brand-voucher/buy-voucher"}
                style={{ marginRight: "8px" }}
              >
                <PrimaryButton
                  leftIcon={<AiOutlineShoppingCart />}
                  title={"Buy vouchers"}
                />
              </Link>
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
          data={extractedArray}
          isLoading={isLoading}
          showRadioButton={true}
          setSelectedRadio={setSelectedRadio}
          selectedRadio={selectedRadio}
        />
      </Box>
    </Box>
  );
};

export default BrandVoucher;
