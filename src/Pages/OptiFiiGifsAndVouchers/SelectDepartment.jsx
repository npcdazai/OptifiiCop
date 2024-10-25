import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Icon,
  IconButton,
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { Link, useNavigate } from "react-router-dom";
import backFund from "../../assets/backfund.svg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { LuEye, LuListFilter } from "react-icons/lu";
import { BsFilterRight, BsThreeDotsVertical } from "react-icons/bs";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { HiOutlineUserGroup } from "react-icons/hi";
import blackmen from "../../assets/blackmen.png";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import goth from "../../assets/goth.png";
import womenpfp from "../../assets/womenpfp1.png";

const Employees = () => {
  const { employees } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setusers] = useState(50);
  const [selectedRadio, setSelectedRadio] = useState([]);
  const navigate = useNavigate();
  const btnRef = useRef();

  useEffect(() => {
    if (selectedRadio.length > 0) {
      onOpen();
    } else {
      onClose();
    }
  }, [selectedRadio, onOpen, onClose]);

  // ===============================[ Table Header ]
  const tableHeadRow = ["Sr No", "Department", "Employees"];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = employees.map((item, index) => ({
    id: item.id,
    "Sr No": (
      <Text as={"span"} fontSize={"small"}>
        {item?.id}
      </Text>
    ),
    Name: (
      <HStack>
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Text mb={0}>{item?.Name}</Text>
      </HStack>
    ),
    "Email Address": item?.emailAddress,
    "Mobile number": item?.mobileNumber,
    Grade: item?.Grade,
    Department: item?.Department,
    Designation: item?.Role,
    Employees: (
      <>
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
            <Text color="#7F56D9" fontSize="small" mb={0}>
              +{users}
            </Text>
          </Box>
        </Box>
      </>
    ),
    Action: (
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BsThreeDotsVertical />}
            bg={"transparent"}
          />
          <MenuList>
            <MenuItem
              icon={<MdOutlineModeEdit color="#6311CB" size={16} />}
              fontSize={"sm"}
              fontWeight={500}
              color={"#4D4D4D"}
            >
              Edit
            </MenuItem>
            <MenuItem
              icon={<MdOutlineDeleteOutline color="#EE1B24" size={16} />}
              fontSize={"sm"}
              fontWeight={500}
              color={"#4D4D4D"}
            >
              Delete
            </MenuItem>
            <MenuItem
              icon={<LuEye color="#6311CB" size={16} />}
              fontSize={"sm"}
              fontWeight={500}
              color={"#4D4D4D"}
              onClick={() => navigate("/employees/view")}
            >
              View
            </MenuItem>
          </MenuList>
        </Menu>
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
            //   justifyContent={"space-between"}
            alignItems={"flex-end"}
            w={"100%"}
          >
            <Box>
              <Menu>
                <MenuList>
                  <MenuItem
                    icon={<FaRegUser size={14} />}
                    fontSize={"small"}
                    fontWeight={500}
                    color={"#4D4D4D"}
                  >
                    Add single employee
                  </MenuItem>
                  <MenuItem
                    icon={<HiOutlineUserGroup size={14} />}
                    fontSize={"small"}
                    fontWeight={500}
                    color={"#4D4D4D"}
                  >
                    Add multiple employee
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
                  fontSize={"small"}
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
            <HStack>
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
            </HStack>
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
    
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Box
                display="flex"
                flexDirection="row"
                bgColor="#FFFFFF"
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Text color="#0F0F0F" fontWeight={600}>
                    Summary of order
                  </Text>

                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    mt={2}
                  >
                    <Image src={womenpfp} h="30px" />
                    <Image src={blackmen} h="30px" ml="-10px" />
                    <Image src={koreanpfp} h="30px" ml="-10px" />
                    <Image src={asian} h="30px" ml="-10px" />
                    <Image src={goth} h="30px" ml="-10px" />

                    {/* +200 circle */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      h="30px"
                      w="30px"
                      bgColor="#F9F5FF"
                      boxShadow="md"
                      ml={"-10px"}
                    >
                      <Text color="#7F56D9" fontSize="small">
                        +200
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="flex-start"
                  gap={4}
                >
                  <Text>₹ 10,000</Text>
                  <Link to="/brand-voucher/voucher-payment">
                    <Button
                      bgColor="#6311CB"
                      color="white"
                      _hover={{ bgColor: "#6311CB" }}
                      p={4}
                      w={"123px"}
                    >
                      Proceed
                    </Button>
                  </Link>
                </Box>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Employees;
