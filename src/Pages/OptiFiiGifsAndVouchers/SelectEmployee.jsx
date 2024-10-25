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
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { LuEye, LuListFilter } from "react-icons/lu";
import { BsFilterRight, BsThreeDotsVertical } from "react-icons/bs";
import womenpfp from "../../assets/womenpfp1.png";
import blackmen from "../../assets/blackmen.png";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import goth from "../../assets/goth.png";
import Payment from "./Payment/PaymentaVoucher";
import { useToast } from "@chakra-ui/react";
import tick from "../../assets/icons/tick.png";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

const Employees = () => {
  const { employees } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
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
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <Box
        rounded={"xl"}
        py={3}
        display={"flex"}
        flexDirection={"column"}
        bg={"#fff"}
        shadow={"md"}
        minH={"100%"}
      >
        <VStack mb={0} px={3} alignItems={"start"} gap={0}>
          <HStack w={"100%"} justifyContent={"space-between"} mb={4}>
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<BsFilterRight fontSize={"16px"} />}
                  rightIcon={<ChevronDownIcon />}
                >
                  Sort
                </MenuButton>
                <MenuList>
                  <MenuItem>Ascending</MenuItem>
                  <MenuItem>Descending</MenuItem>
                  <MenuItem>Recently Viewed</MenuItem>
                  <MenuItem>Recently Added</MenuItem>
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
                >
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem>Ascending</MenuItem>
                  <MenuItem>Descending</MenuItem>
                  <MenuItem>Recently Viewed</MenuItem>
                  <MenuItem>Recently Added</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </VStack>
        <NormalTable
          emptyMessage={`We don't have any Employees`}
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
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
              >
                <Box>
                  <Text fontWeight={600}>Summary of order</Text>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Image src={womenpfp} h="30px" />
                    <Image src={blackmen} h="30px" ml="-10px" />
                    <Image src={koreanpfp} h="30px" ml="-10px" />
                    <Image src={asian} h="30px" ml="-10px" />
                    <Image src={goth} h="30px" ml="-10px" />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      h="30px"
                      w="30px"
                      bgColor="#F9F5FF"
                      ml={"-10px"}
                    >
                      <Text color="#7F56D9" fontSize="xs">
                        +200
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={4}
                >
                  <Text mb={0}>₹ 10,000</Text>
                  <Button bgColor="#6311CB" color="white" onClick={onModalOpen}>
                    Proceed
                  </Button>
                </Box>
              </Box>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Modal
          isOpen={isModalOpen}
          onClose={onModalClose}
          finalFocusRef={btnRef}
          scrollBehavior={scrollBehavior}
          h="900px"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Payment />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={onModalClose}>
                Save as draft
              </Button>
              <Button
                color="#FFFFFF"
                bgColor="#6311CB"
                p={4}
                _hover={{ color: "#FFFFFF", bgColor: "#6311CB" }}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onPaymentOpen();
                }}
              >
                Save & proceed
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isCentered isOpen={isPaymentOpen} onClose={onPaymentClose}>
          {overlay}
          <ModalOverlay />
          <ModalContent>
            <Image src={tick} h="78px" w="78px" />
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Text color="#101828" fontSize="large" fontWeight={600}>
                  Your Voucher request has been submitted
                </Text>
                <Text color="#667085" fontSize="small" fontWeight={400}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  consectetur adipiscing elit.
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                w="100%"
                bgColor="#6311CB"
                color="#ffff"
                boxShadow={"0px 1px 2px 0px #1018280D"}
                _hover={{ bgColor: "#6311CB", color: "#ffff" }}
              >
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Employees;
