import {
  Box,
  Button,
  HStack,
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Select,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { NavLink, useNavigate } from "react-router-dom";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { GoDotFill } from "react-icons/go";
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { PiIdentificationBadge } from "react-icons/pi";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { BsFilterRight } from "react-icons/bs";
import { LuListFilter } from "react-icons/lu";

const SupportAndTicket = () => {
  const navigate = useNavigate();
  const { SupportAndTicket } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    "Ticket ID",
    "Subject",
    "Status",
    "Last update",
    "Support",
    "Action",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = SupportAndTicket.map((item, index) => ({
    "Ticket ID": (
      <Text
        as={"span"}
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"xs"}
      >
        {item?.TicketID}
      </Text>
    ),
    Subject: item?.Subject,
    Status: (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        bg={
          item?.Status === "In progress"
            ? "#ebf8ef"
            : item?.Status === "On hold"
            ? "#f2f9ff"
            : item?.Status === "Inactive"
            ? "#ffeeed"
            : "#f8d7da" // Default reddish background for unknown statuses
        }
        rounded={"full"}
        color={
          item?.Status === "In progress"
            ? "#00A438"
            : item?.Status === "On hold"
            ? "#62B2FD"
            : item?.Status === "Inactive"
            ? "#FF2E23"
            : "#721c24" // Default red text for unknown statuses
        }
        py={1.5}
        px={1}
      >
        <GoDotFill />
        {item?.Status}
      </Box>
    ),
    "Last update": item?.LastUpdate,
    Support: item?.Support,
    Action: (
      <NavLink to="/support-ticket/view-ticket">
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
    ),
  }));

  return (
    <Box h={"100%"} p={4} {...OPACITY_ON_LOAD} overflowX={"scroll"}>
      <MiniHeader
        title={"Support & ticket"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      />

      <Box bg={"#fff"} rounded={"md"} boxShadow={"md"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100%"}
          p={4}
          pb={0}
        >
          <InputGroup width={300} size="sm">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder=" "
              rounded="md"
              focusBorderColor="#3725EA"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Box display={"flex"} alignItems={"center"}>
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
                  <Image src={PiIdentificationBadge} me={2} /> Export as PDF
                </MenuItem>
                <MenuItem fontSize={"sm"}>
                  <Image src={ExcelIcon} me={2} /> Export as Excel
                </MenuItem>
              </MenuList>
            </Menu>
            <PrimaryButton
              onClick={onOpen}
              leftIcon={<AddIcon />}
              title={"Add new ticket"}
            />
          </Box>
        </Box>
        <hr />
        <HStack w={"100%"} justifyContent={"space-between"} px={4} mb={4}>
          <Flex align={'center'} gap={5}>
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
            <Flex align={'center'} gap={2}>
              <Text as={'span'} fontSize={'xs'}>Show</Text>
              <Select borderRadius={5} size={"sm"}>
                <option value='10'>10</option>
                <option value='30'>30</option>
                <option value='50'>50</option>
                <option value='80'>80</option>
              </Select>
              <Text as={'span'} fontSize={'xs'}>entries</Text>
            </Flex>


          </Flex>
          <Box>
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
        <NormalTable
          emptyMessage={`We don't have any Sponers `}
          tableHeadRow={tableHeadRow}
          data={extractedArray}
          isLoading={isLoading}
          showRadioButton={true}
        />
      </Box>

      {/* modal  */}
      <Modal size={"md"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"md"}>Add New ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={4}>
              <Text fontSize={"xs"} fontWeight={500} mb={1}>
                Requester
              </Text>
              <Input
                size={"sm"}
                rounded={"md"}
                fontSize={"sm"}
                fontWeight={500}
              />
            </Box>
            <Box mb={4}>
              <Text fontSize={"xs"} fontWeight={500} mb={1}>
                Subject
              </Text>
              <Input
                size={"sm"}
                rounded={"md"}
                fontSize={"sm"}
                fontWeight={500}
              />
            </Box>
            <Box mb={4}>
              <Text fontSize={"xs"} fontWeight={500} mb={1}>
                Type
              </Text>
              <Select
                size={"sm"}
                rounded={"md"}
                fontSize={"sm"}
                fontWeight={500}
                placeholder=" "
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box mb={4}>
              <Text fontSize={"xs"} fontWeight={500} mb={1}>
                Priority
              </Text>
              <Select
                size={"sm"}
                rounded={"md"}
                fontSize={"sm"}
                fontWeight={500}
                placeholder=" "
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box mb={4}>
              <Text fontSize={"xs"} fontWeight={500} mb={1}>
                Description
              </Text>
              <Textarea
                size={"sm"}
                rounded={"md"}
                fontSize={"sm"}
                fontWeight={500}
                resize={"none"}
              />
            </Box>

            <HStack py={4} justifyContent={"center"}>
              <SecondaryButton title={"Cancel"} />
              <PrimaryButton title={"Create ticket"} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SupportAndTicket;
