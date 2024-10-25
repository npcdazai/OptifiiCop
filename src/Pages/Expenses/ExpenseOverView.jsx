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
  import React, { useContext, useEffect, useState } from "react";
  import womenpfp from "../../assets/womenpfp1.png";
  import blackmen from "../../assets/blackmen.png";
  import koreanpfp from "../../assets/koreanboi.png";
  import asian from "../../assets/asain.png";
  import goth from "../../assets/goth.png";
  import MiniHeader from "../../Components/MiniHeader";
  import GlobalStateContext from "../../Contexts/GlobalStateContext";
  import NormalTable from "../../Components/DataTable/NormalTable";
  import Food from "../../assets/icons/Food.png";
  import Fuel from "../../assets/icons/Fuel.png";
  import Gift from "../../assets/icons/gift.png";
  import books from "../../assets/icons/bookStack.png";
  import telecom from "../../assets/icons/telecom.png";
  import gadget from "../../assets/icons/gadget.png";
  import foods from "../../assets/icons/foods.png";
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
  
  const BenifitOverView = () => {
    const [dash, setDash] = useState([
      {
        id: 1,
        wallet: "Food",
        walletAmount: "₹ 70,000",
        balanceRemaining: "₹ 20,000",
        status: "Approved",
        totalEmployees: 500,
        users: 5,
        icon: foods,
      },
      {
        id: 2,
        wallet: "Fuel",
        walletAmount: "₹ 50,000",
        balanceRemaining: "₹ 15,000",
        status: "Approved",
        totalEmployees: 200,
        users: 3,
        icon: Fuel,
      },
      {
        id: 3,
        wallet: "Books & Periodicals",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: books,
      },
      {
        id: 4,
        wallet: "Telecom",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: telecom,
      },
      {
        id: 5,
        wallet: "Books & periodicals",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: books,
      },
      {
        id: 6,
        wallet: "Learning & development",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: books,
      },
      {
        id: 7,
        wallet: "Gadget & equipment",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: gadget,
      },
      {
        id: 8,
        wallet: "Telecom",
        walletAmount: "₹ 100,000",
        balanceRemaining: "₹ 80,000",
        status: "Pending",
        totalEmployees: 300,
        users: 4,
        icon: telecom,
      },
      {
        id: 1,
        wallet: "Food",
        walletAmount: "₹ 70,000",
        balanceRemaining: "₹ 20,000",
        status: "Approved",
        totalEmployees: 500,
        users: 5,
        icon: foods,
      },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setusers] = useState(50);
    const [selectedRadio, setSelectedRadio] = useState([]);
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
  
    const dashHeadSecRow = [
      "Sr No",
      "Wallet Name",
      "Total employees",
      "Amount in card",
      "Pending amount ",
      "Pending request",
    ];
  
    const dashSecArr = dash.map((item, index) => ({
      "Sr No": item.id,
      "Wallet Name": (
        <HStack key={`wallet-${index}`}>
          {/* <Box p={2} bg="#ebe0f8" rounded="full">
                <MdNoFood color="#6311CB" />
              </Box> */}
          <Image src={item.icon} h="20px" />
          <Text mb={0} fontSize="xs">
            {item.wallet || "Food"}
          </Text>
        </HStack>
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
     "Amount in card": (
        <Text key={`walletAmount-${index}`} mb={0} fontSize="xs">
          {item.walletAmount || 5000}
        </Text>
      ),
      "Pending amount ": (
        <Text key={`balance-${index}`} mb={0} fontSize="xs">
          {item.balanceRemaining || "₹ 2000"}
        </Text>
      ),
      "Pending request": (
        <>
        <NavLink to="/dashboard/beinefit-overview/benefit-request">
          <Button
            bgColor="#6311CB"
            color="#fff"
            fontSize="x-small"
            w={"87px"}
            h={"27px"}
            _hover={{ bgColor: "#6311CB", borderRadius: "5px" }}
          >
            View
          </Button>
          </NavLink>
        </>
      ),
    }));
  
    return (
      <Box {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
        <Box
          rounded={"md"}
          py={4}
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
            tableHeadRow={dashHeadSecRow}
            data={dashSecArr}
            isLoading={isLoading}
            showRadioButton={true}
            setSelectedRadio={setSelectedRadio}
            selectedRadio={selectedRadio}
          />
        </Box>
      </Box>
    );
  };
  
  export default BenifitOverView;
  