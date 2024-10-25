import {
  Box,
  Button,
  Text,
  useDisclosure,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FileUploader from "../../../Components/FileUploader/FileUploader";
import { useRef } from "react";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import DigiTable from "./DigitalTable";
import { BsFilterRight } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LuListFilter } from "react-icons/lu";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import SuccesIcon from "../../../assets/Modaltick.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BrandVoucherTable = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  const renderContent = () => {
    switch (selectedValue) {
      case "1":
        return <Text>Hii</Text>;
      case "2":
        return <Text>Heelo</Text>;
      default:
        return null;
    }
  };

  return (
    <Box h="100%" {...OPACITY_ON_LOAD} overflowX="scroll">
      <Box
        display="flex"
        w="100%"
        flexDirection="column"
        bgColor="#FFFFFF"
        alignItems="start"
        rounded={"md"}
      >
        <Text fontSize="sm" fontWeight={600}>
          Import employee
        </Text>
        <FileUploader />
      </Box>
      <HStack
        bg={"#F4F4F4"}
        p={2}
        rounded={"md"}
        mt={2}
        justifyContent={"center"}
      >
        <Text
          align="center"
          color="#0F0F0F"
          fontWeight={500}
          fontSize="small"
          mb={0}
        >
          Download a{" "}
          <span style={{ color: "#3725EA", fontWeight: 700 }}>
            sample spreadsheet
          </span>{" "}
          to quickly start your import
        </Text>
      </HStack>
      {/* Divider with "OR" */}
      <Flex alignItems="center" my={6}>
        <Box flex="1" borderBottom="1px" borderColor="#DCDCDC" />
        <Text px={4} fontSize={"sm"} fontWeight={500} color="#9C9C9C" mb={0}>
          OR
        </Text>
        <Box flex="1" borderBottom="1px" borderColor="#DCDCDC" />
      </Flex>

      <Box>
        <HStack w={"100%"} justifyContent={"space-between"}>
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
          <HStack>
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
            <PrimaryButton onClick={onOpen} title={"Proceed"} px={4} />
          </HStack>
        </HStack>
        <DigiTable />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={SuccesIcon} w={"48px"} />
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Text color="#A0A0A0" fontWeight={400} fontSize="small">
                Order Id:
              </Text>
              <Text color="#3725EA" fontWeight={400} fontSize="small">
                #451245
              </Text>
            </HStack>
            <Text color="#101828" fontSize="medium" fontWeight={600}>
            Your employee list has been submitted
            </Text>
            <Text color="#A0A0A0" fontWeight={400} fontSize="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"#344054"}
              bgColor="#ffff"
              fontSize="small"
              fontWeight={600}
            >
              Submit new application
            </Button>
            <Button
              bgColor="#6311CB"
              color="#fff"
              _hover={{ bgColor: "#6311CB" }}
              fontSize="small"
              onClick={onClose}
            >
              Check status
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BrandVoucherTable;
