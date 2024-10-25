import {
    Box,
    Button,
    Checkbox,
    Divider,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import React, { useContext, useEffect, useRef, useState } from "react";
  import GlobalStateContext from "../../../Contexts/GlobalStateContext";
  import NormalTable from "../../../Components/DataTable/NormalTable";
  import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
  import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
  import { FaRegUser } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  import { LuEye, LuListFilter } from "react-icons/lu";
  import { BsFilterRight, BsThreeDotsVertical } from "react-icons/bs";
  import { useToast } from "@chakra-ui/react";
  import { OPACITY_ON_LOAD } from "../../../Layout/animations";
  import FileUploader from "../../../Components/FileUploader/FileUploader";
  
  const Employees = () => {
    const { employees } = useContext(GlobalStateContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("inside");
    const [selectedRadio, setSelectedRadio] = useState([]);
    const toast = useToast();
    const btnRef = useRef();
  
    const {
      isOpen: isModalOpen,
      onOpen: onModalOpen,
      onClose: onModalClose,
    } = useDisclosure();
  
    const {
      isOpen: isPaymentOpen,
      onOpen: onPaymentOpen,
      onClose: onPaymentClose,
    } = useDisclosure();
  
    const navigate = useNavigate();
  
    useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
      if (selectedRadio.length > 0) {
        onOpen();
      } else {
        onClose();
      }
    }, [selectedRadio, onOpen, onClose]);
  
    const tableHeadRow = [
      "Emp ID",
      "Name",
      "Email Address",
      "Department",
      "Designation",
    ];
  
    const extractedArray = employees.map((item) => ({
      id: item.id,
      "Emp ID": (
        // <Checkbox colorScheme="purple" value="1">
        <Text as={"span"} fontSize={"xs"}>
          {item?.EmpID}
        </Text>
        // </Checkbox>
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
      Department: item?.Department,
      Designation: item?.Role,
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
              : "gray"
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
              <MenuItem icon={<MdOutlineModeEdit color="#6311CB" size={16} />}>
                Edit
              </MenuItem>
              <MenuItem
                icon={<MdOutlineDeleteOutline color="#EE1B24" size={16} />}
              >
                Delete
              </MenuItem>
              <MenuItem
                icon={<LuEye color="#6311CB" size={16} />}
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
      <Box {...OPACITY_ON_LOAD}  overflowX={"scroll"}>
        <Box
          rounded={"xl"}
          py={3}
          display={"flex"}
          flexDirection={"column"}
          bg={"#fff"}
          shadow={"md"}
          minH={"100%"}
        >
          <NormalTable
            emptyMessage={`We don't have any Employees`}
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
  
  export default Employees;
  