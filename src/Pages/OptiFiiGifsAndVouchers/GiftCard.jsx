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
  useDisclosure,
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
import { Link, NavLink } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import blackmen from "../../assets/blackmen.png";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import goth from "../../assets/goth.png";
import info from "../../assets/info.png";
import redinfo from "../../assets/redinfo.png";

const GiftCard = () => {
  const { digital } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);
  const [users, setusers] = useState(50);
  const [tabIndex, setTabIndex] = useState(
    () => parseInt(sessionStorage.getItem("activeTabIndex")) || 0
  );

  useEffect(() => {
    sessionStorage.setItem("activeTabIndex", tabIndex);
  }, [tabIndex]);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // ===============================[ Table Header ]
  const tableHeadRow = [
    "Sr. no",
    "Order ID",
    "Load Status",
    "Date & time",
    "Total employees",
    "Total valuation",
    "Activation Status",
  ];

  const physicaltableHeadRow = [
    "Sr. no",
    "Order ID",
    "Load Status",
    "Date & time",
    "Total employees",
    "Total valuation",
    "Activation Status",
    "Card delivery status",
  ];

  const instantTableHeadRow = [
    "Sr. no",
    "Order ID",
    "Load Status",
    "Date & time",
    "Quantity",
    "Total employees",
    "Total valuation",
    "Activation Status",
  ];

  const physicalCardArr = digital.map((item, index) => ({
    id: item.id,
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      // <Checkbox colorScheme="purple">
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
      // </Checkbox>
    ),
    "Order ID": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
        color="#3725EA"
      >
        {/* <Icon
            as={PiReceipt}
            boxSize={8}
            p={1.5}
            bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
            rounded={"full"}
          /> */}

        {item?.orderid}
      </Text>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray"
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={blackmen} h={"30px"} position="absolute" left="1.4rem" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="2.7rem" />
        <Image src={asian} h={"30px"} position="absolute" left="3.9rem" />
        <Image src={goth} h={"30px"} position="absolute" left="4.9rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="5.9rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
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
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
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
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
    "Card delivery status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.CardDeliveryStatus === "Delivered" ? (
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
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
          </Tag>
        ) : item?.CardDeliveryStatus === "Partially Delivered" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.CardDeliveryStatus === "Not Delivered" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#FFD9D8"
            borderRadius="13.75px"
            color="#CC4E4B"
            p={1}
            px={3}
            border="1px solid #FFACAA"
          >
            <TagLabel> {item?.CardDeliveryStatus}</TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
  }));

  const extractedArray = digital.map((item, index) => ({
    id: item.id,
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      // <Checkbox colorScheme="purple">

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
    ),
    "Order ID": (
      <NavLink to="/gift-card/digital-application-status">
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
          color="#3725EA"
        >
          {/* <Icon
            as={PiReceipt}
            boxSize={8}
            p={1.5}
            bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
            rounded={"full"}
          /> */}

          {item?.orderid}
        </Text>
      </NavLink>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={blackmen} h={"30px"} position="absolute" left="1.4rem" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="2.7rem" />
        <Image src={asian} h={"30px"} position="absolute" left="3.9rem" />
        <Image src={goth} h={"30px"} position="absolute" left="4.9rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="5.9rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
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
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
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
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
    ),
  }));

  const instaCardArr = digital.map((item, index) => ({
    id: item.id,
    "Sr. no": (
      // <Radio colorScheme="purple" value="1">
      // <Checkbox colorScheme="purple">
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
      // </Checkbox>
    ),
    "Order ID": (
      <NavLink to={"/gift-card/application-status"}>
        <Text
          as={"span"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          fontSize={"xs"}
          color="#3725EA"
        >
          {/* <Icon
            as={PiReceipt}
            boxSize={8}
            p={1.5}
            bg={index % 2 === 0 ? "#6311cb14" : "#fff"}
            rounded={"full"}
          /> */}

          {item?.orderid}
        </Text>
      </NavLink>
    ),
    "Email Address": item?.emailAddress,
    "Date & time": item?.dateTime,
    "Total valuation": item?.totalvaluation,
    Quantity: item?.quantity,
    Role: item?.Role,
    "Load Status": (
      <Tag
        my={1}
        size={"sm"}
        bgColor="#ECFDF3"
        borderRadius="13.75px"
        color={
          item?.laodStatus === "Fully Loaded"
            ? "#027A48"
            : item?.laodStatus === "Inactive"
            ? "red"
            : "gray"
        }
        border={`0px solid ${
          item?.laodStatus === "Fully Loaded"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.laodStatus}</TagLabel>
      </Tag>
    ),
    "Total employees": (
      <Box
        position="relative"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Image src={womenpfp} h={"30px"} position="absolute" />
        <Image src={blackmen} h={"30px"} position="absolute" left="1.4rem" />
        <Image src={koreanpfp} h={"30px"} position="absolute" left="2.7rem" />
        <Image src={asian} h={"30px"} position="absolute" left="3.9rem" />
        <Image src={goth} h={"30px"} position="absolute" left="4.9rem" />
        <Box
          display="flex"
          position="absolute"
          alignItems="center"
          flexDirection="column"
          borderRadius="50%"
          h={"30px"}
          w="30px"
          bgColor="#F9F5FF"
          left="5.9rem"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Text color="#7F56D9" fontSize="xs" mb={0}>
            +{users}
          </Text>
        </Box>
      </Box>
    ),
    "Activation Status": (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.activationStatus === "Active" ? (
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
            <TagLabel> {item?.activationStatus}</TagLabel>
          </Tag>
        ) : item?.activationStatus === "Partially Active" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#EAB60024"
            borderRadius="13.75px"
            color="#EAB600"
            p={1}
            px={3}
            border="1px solid #EAB600"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <TagLabel> {item?.activationStatus}</TagLabel>
            <Image src={info} />
          </Tag>
        ) : item?.activationStatus === "Activate" ? (
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
              {item?.activationStatus}
            </TagLabel>
          </Tag>
        ) : (
          ""
        )}
      </Box>
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
              {/* <Menu>
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
              </Menu> */}
              {/* <PrimaryButton leftIcon={<AddIcon />} title={"Add Employee"} /> */}
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
        <Tabs
          index={tabIndex}
          onChange={(index) => setTabIndex(index)}
          position="relative"
          variant="unstyled"
        >
          <TabList color="#B0B0B0">
            <Tab
              fontSize="small"
              _selected={{
                color: "#6311CB",
                fontWeight: "medium",
              }}
            >
              Digital card
            </Tab>
            <Tab
              fontSize="small"
              _selected={{
                color: "#6311CB",
                fontWeight: "medium",
              }}
            >
              Physical card
            </Tab>
            <Tab
              fontSize="small"
              _selected={{
                color: "#6311CB",
                fontWeight: "medium",
              }}
            >
              Insta card
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
              <NormalTable
                emptyMessage={`We don't have any Sponers `}
                tableHeadRow={tableHeadRow}
                data={extractedArray}
                isLoading={isLoading}
                showRadioButton={true}
                setSelectedRadio={setSelectedCheckBox}
                selectedRadio={selectedCheckBox}
              />
            </TabPanel>
            <TabPanel>
              <NormalTable
                emptyMessage={`We don't have any Sponers `}
                tableHeadRow={physicaltableHeadRow}
                data={physicalCardArr}
                isLoading={isLoading}
                showRadioButton={true}
                setSelectedRadio={setSelectedCheckBox}
                selectedRadio={selectedCheckBox}
              />
            </TabPanel>
            <TabPanel>
              <NormalTable
                emptyMessage={`We don't have any Sponers `}
                tableHeadRow={instantTableHeadRow}
                data={instaCardArr}
                isLoading={isLoading}
                showRadioButton={true}
                setSelectedRadio={setSelectedCheckBox}
                selectedRadio={selectedCheckBox}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default GiftCard;
