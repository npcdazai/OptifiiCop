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
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
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
import EmployeesAddModal from "./EmployeesAddModal";
import EmployeesEditModal from "./EmployeesEditModal";
import EmployeesAddMultipleModal from "./EmployeesAddMultipleModal";
import { IoFilterSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Employees = () => {
  const { employees } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRadio, setSelectedRadio] = useState([]);
  const navigate = useNavigate();

  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure(); // For EmployeesAddModal

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure(); // For EmployeesEditModal

  const {
    isOpen: isMultipleOpen,
    onOpen: onMultipleOpen,
    onClose: onMultipleClose,
  } = useDisclosure(); // For EmployeesAddMultipleModal

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
    "Emp ID",
    "Name",
    "Email Address",
    "Mobile number",
    "Grade",
    "Department",
    "Role",
    "Status",
    "Action",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = employees.map((item, index) => ({
    id: item.id,
    "Emp ID": (
      <Text as={"span"} fontSize={"xs"}>
        {item?.EmpID}
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
    Role: item?.Role,
    Status: (
      <Tag
        my={1}
        size={"sm"}
        borderRadius="full"
        colorScheme={
          item?.status === "Active"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray"
        }
        border={`1px solid ${
          item?.status === "Active"
            ? "green"
            : item?.status === "Inactive"
            ? "red"
            : "gray" // default border color if status doesn't match any condition
        }`}
        p={1}
        px={3}
      >
        <TagLabel>{item?.status}</TagLabel>
      </Tag>
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
                {selectedRadio.length > 1 ? (
                  <Button
                    border={"1px solid #EE1B24"}
                    bgColor="#ffff"
                    fontSize="x-small"
                    py={0}
                    color="#EE1B24"
                    h="30px"
                    _hover={{ bgColor: "#ffff" }}
                  >
                    Delete
                  </Button>
                ) : (
                  <PrimaryButton
                    as={MenuButton}
                    leftIcon={<AddIcon />}
                    title={"Add Employee"}
                  />
                )}

                <MenuList>
                  <MenuItem
                    icon={<FaRegUser size={14} />}
                    fontSize={"xs"}
                    fontWeight={500}
                    color={"#4D4D4D"}
                    onClick={onAddOpen}
                  >
                    Add single employee
                  </MenuItem>
                  <MenuItem
                    icon={<HiOutlineUserGroup size={14} />}
                    fontSize={"xs"}
                    fontWeight={500}
                    color={"#4D4D4D"}
                    onClick={onMultipleOpen}
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
            <HStack>
              <SecondaryButton
                onClick={() => navigate("/employees/pull-back-funds")}
                leftIcon={<Image me={2} src={backFund} w={"17px"} />}
                title={"Pull back funds"}
              />
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
                <MenuList w="350px" h="300px" overflowY="scroll">
                  <VStack p={2} alignItems="flex-start">
                    <HStack alignItems="center">
                      <IoFilterSharp fontSize="small" />{" "}
                      <Text as="span" fontSize="small" fontWeight={600}>
                        Filter
                      </Text>
                    </HStack>
                    <Box w="100%" borderBottom="1px solid #D8D8D8" />
                    <Box w="100%">
                      <Accordion allowMultiple border="0px solid white">
                        {/* Department Section */}
                        <AccordionItem>
                          {({ isExpanded }) => (
                            <>
                              <AccordionButton>
                                {isExpanded ? (
                                  <ChevronDownIcon fontSize="24px" />
                                ) : (
                                  <ChevronRightIcon fontSize="24px" />
                                )}
                                <Box flex="1" textAlign="left" ml={2}>
                                  Department
                                </Box>
                              </AccordionButton>
                              <AccordionPanel pb={2}>
                                <VStack align="start">
                                  <Checkbox defaultChecked>Design</Checkbox>
                                  <Checkbox>Finance</Checkbox>
                                  <Checkbox defaultChecked>IT</Checkbox>
                                  <Checkbox>Development</Checkbox>
                                  <Checkbox>Sales</Checkbox>
                                  <Checkbox>QA</Checkbox>
                                </VStack>
                              </AccordionPanel>
                            </>
                          )}
                        </AccordionItem>

                        {/* Status Section */}
                        <AccordionItem>
                          {({ isExpanded }) => (
                            <>
                              <AccordionButton>
                                {isExpanded ? (
                                  <ChevronDownIcon fontSize="24px" />
                                ) : (
                                  <ChevronRightIcon fontSize="24px" />
                                )}
                                <Box flex="1" textAlign="left" ml={4}>
                                  Status
                                </Box>
                              </AccordionButton>
                              <AccordionPanel pb={4}>
                                <VStack align="start">
                                  <Checkbox>Active</Checkbox>
                                  <Checkbox>Inactive</Checkbox>
                                </VStack>
                              </AccordionPanel>
                            </>
                          )}
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </VStack>
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
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          showRadioButton={true}
        />
      </Box>
      {/* Call EmployeesAddModal */}
      <EmployeesAddModal isOpen={isAddOpen} onClose={onAddClose} />

      {/* Call EmployeesEditModal */}
      <EmployeesEditModal isOpen={isEditOpen} onClose={onEditClose} />

      {/* Call EmployeesEditModal */}
      <EmployeesAddMultipleModal
        isOpen={isMultipleOpen}
        onClose={onMultipleClose}
      />
    </Box>
  );
};

export default Employees;
