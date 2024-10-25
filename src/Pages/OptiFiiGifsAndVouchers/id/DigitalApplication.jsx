// import React from "react";
// import { OPACITY_ON_LOAD } from "../../../Layout/animations";
// import { Box, Tag, TagLabel, Text } from "@chakra-ui/react";

// const ApplicationStatus = () => {
//   return (
//     <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>

//     </Box>
//   );
// };

// export default ApplicationStatus;
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
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
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../../Components/MiniHeader";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
import NormalTable from "../../../Components/DataTable/NormalTable";
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
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import { Link } from "react-router-dom";
import backFund from "../../../assets/backfund.svg";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton";
import { LuListFilter } from "react-icons/lu";
import { BsFilterRight } from "react-icons/bs";
import pdfIcon from "../../../assets/pdfIcon.svg";
import ExcelIcon from "../../../assets/ExcelIcon.svg";
import redinfo from "../../../assets/redinfo.png";
import pooja from "../../../assets/poojaShah.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const DigitalApplicationStatus = () => {
  const { ApplicationStatus } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [selectedAction, setSelectedAction] = useState("");
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Table Header
  const tableHeadRow = [
    "Emp ID",
    "Name",
    "Email address/Mobile number",
    "Member since",
    "Load Status",
    "Action",
  ];

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleGetOtp = () => {
    alert("OTP sent to " + mobileNumber);
  };

  // Extracting the array for the table data
  const extractedArray = ApplicationStatus.map((item, index) => ({
    "Emp ID": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
      >
        {item?.EmpID}
      </Text>
    ),
    Name: (
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <Image src={pooja} h="40px" />
        <Text pt={4} fontSize="xs" fontWeight={400}>
          {item?.Name}
        </Text>
      </Box>
    ),
    "Email address/Mobile number": item?.emailAddressMobile,
    "Member since": item?.MemberSince,
    "Load Status": (
      <Box display="flex" flexDirection="column" alignItems="center">
        {item?.LoadStatus === "10,000" ? (
          <Text>{item?.LoadStatus}</Text>
        ) : item?.LoadStatus === "load Card" ? (
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
            <TagLabel textDecoration="underline">{item?.LoadStatus}</TagLabel>
          </Tag>
        ) : null}
      </Box>
    ),
    Action: (
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {item?.Action === "Activate card" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#ECFDF3"
            borderRadius="13.75px"
            color="#027A48"
            p={1}
            px={3}
            onClick={() => {
              setSelectedAction(item?.Action); // Set action to "Activate card"
              onOpen();
            }}
          >
            <TagLabel>{item?.Action}</TagLabel>
          </Tag>
        ) : item?.Action === "Load card" ? (
          <Tag
            my={1}
            size={"sm"}
            bgColor="#FFE1E0"
            borderRadius="13.75px"
            color="#CC4E4B"
            p={1}
            px={3}
            onClick={() => {
              setSelectedAction(item?.Action); // Set action to "Load card"
              onOpen();
            }}
          >
            <TagLabel>{item?.Action}</TagLabel>
          </Tag>
        ) : null}
      </Box>
    ),
  }));

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
         <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={3}
        >
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Text color="#6311CB" fontWeight={400} fontSize="medium">
              #45152487
            </Text>
            <Text color="#8C9198" fontWeight={400} fontSize="small">
              Order ID
            </Text>
          </Box>
          <Tag
            my={1}
            size={"sm"}
            bgColor="#3725EA26"
            borderRadius="13.75px"
            color="#3725EA"
            p={2}
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight={500}
          >
            <TagLabel>Order accepted</TagLabel>
          </Tag>
        </Box>
      
      {/* Table and other UI components */}
      <NormalTable
        emptyMessage={`We don't have any Sponsors`}
        tableHeadRow={tableHeadRow}
        data={extractedArray}
        isLoading={isLoading}
      />
      

      {/* Modal for Activate or Load card based on action */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {selectedAction === "Load card" ? "Load Card" : "Activate Card"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedAction === "Activate card" ? (
              <Box>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  alignItems="flex-start"
                  gap={1}
                >
                  <Text color="#A0A0A0" fontWeight={500} fontSize="small">
                    Order Id :
                  </Text>
                  <Text color="#3725EA" fontWeight={500} fontSize="small">
                    #451245
                  </Text>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Mobile Number
                    </FormLabel>
                    <Box
                      border="1px solid #DCDCDC"
                      display="flex"
                      w="100%"
                      flexDirection="row"
                      alignItems="baseline"
                      justifyContent="center"
                      pt={"8px"}
                      px={"8px"}
                      borderRadius="10px"
                    >
                      <Text fontSize="small">+91</Text>
                      <Input
                        pt={1}
                        placeholder="Please enter your mobile number here"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        maxLength={10}
                        type="tele"
                        size={"sm"}
                        rounded={5}
                        variant="none"
                      />
                    </Box>
                  </FormControl>
                  <Button
                    onClick={handleGetOtp}
                    variant="link"
                    colorScheme="purple"
                    fontSize={"md"}
                    display={"flex"}
                    justifyContent={"end"}
                    mt={2}
                    textDecoration={"underline"}
                    w={"100%"}
                  >
                    Get OTP
                  </Button>
                  {/* <FormLabel fontSize="small">Mobile Number</FormLabel>
                    <VStack spacing={1} align="flex-start" gap={1}>
                      <HStack alignItems="center" border="1px solid #DCDCDC" borderRadius="10px" p={2} h={"50px"}>
                        <Text pt={3} fontSize="medium">+91</Text>
                        <Input
                          placeholder="Please enter your mobile number here"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          maxLength={10}
                          type="tel"
                          variant="none"
                          width="100%"
                          h={"40px"}
                          fontSize="small"
                        />
                      </HStack>
                      <Button onClick={handleGetOtp} variant="link" colorScheme="purple">
                        Get OTP
                      </Button>
                    </VStack> */}

                  <Text fontSize={"md"} fontWeight={500} mt={5}>
                    OTP
                  </Text>
                  <HStack>
                    {otp.map((_, index) => (
                      <Input
                        key={index}
                        id={`otp-input-${index}`}
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)}
                        maxLength={1}
                        textAlign="center"
                        variant="outline"
                        width="50px"
                        type="tel"
                      />
                    ))}
                  </HStack>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box
                  display={"flex"}
                  flexDirection="row"
                  alignItems="flex-start"
                  gap={1}
                >
                  <Text color="#A0A0A0" fontWeight={500} fontSize="small">
                    Order Id :
                  </Text>
                  <Text color="#3725EA" fontWeight={500} fontSize="small">
                    #451245
                  </Text>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Enter Denomination
                    </FormLabel>
                    <Box
                      border="1px solid #DCDCDC"
                      display="flex"
                      w="100%"
                      flexDirection="row"
                      alignItems="baseline"
                      justifyContent="center"
                      pt={"8px"}
                      px={"8px"}
                      borderRadius="10px"
                    >
                      <Text fontSize="small">₹</Text>
                      <Input
                        pt={1}
                        placeholder="Enter amount"
                        size={"sm"}
                        rounded={5}
                        variant="none"
                      />
                    </Box>
                  </FormControl>
                </Box>
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="white" color="black" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bgColor="#6311CB"
              color="white"
              _hover={{ bgColor: "#6311CB" }}
              mr={3}
            >
              {selectedAction === "Load card" ? "Load Amount" : "Activate Cards"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DigitalApplicationStatus;
