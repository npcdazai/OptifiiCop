import {
  Box,
  Button,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FileUploader from "../../Components/FileUploader/FileUploader";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import SelectEmp from "./SelectEmployee";
import blackmen from "../../assets/blackmen.png";
import koreanpfp from "../../assets/koreanboi.png";
import asian from "../../assets/asain.png";
import goth from "../../assets/goth.png";
import womenpfp from "../../assets/womenpfp1.png";
import  SelectDepartment from "./SelectDepartment"
import { useRef } from "react";



const BrandVoucherTable = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const renderContent = () => {
    switch (selectedValue) {
      case "1":
        return <SelectEmp />;
      case "2":
        return <SelectDepartment/>;
      default:
        return null;
    }
  };

  return (
    <Box
      bgColor="#F3F3F9"
      h="100%"
      {...OPACITY_ON_LOAD}
      p={4}
      overflowX="scroll"
    >
      <Box
        display="flex"
        w="100%"
        flexDirection="column"
        bgColor="#FFFFFF"
        p={4}
        alignItems="start"
        rounded={"md"}
      >
        <Text fontSize="medium" fontWeight={600} >
          Select employee
        </Text>
        <FileUploader />
      </Box>

      <Text
        align="center"
        mt="1rem"
        color="#0F0F0F"
        fontWeight={600}
        fontSize="small"
      >
        Download a{" "}
        <span style={{ color: "#3725EA", fontWeight: 700 }}>
          sample spreadsheet
        </span>{" "}
        to quickly start your import
      </Text>

      <Box
        display="flex"
        flexDirection="column"
        bgColor="#FFFFFF"
        p={4}
        w="100%"
        rounded={"md"}
      >
        <RadioGroup onChange={setSelectedValue} value={selectedValue}>
          <Stack spacing={4} direction="row">
            <Radio size="sm" colorScheme="blue" value="1">
              Select employee
            </Radio>
            <Radio size="sm" colorScheme="blue" value="2">
              Select department
            </Radio>
          </Stack>
        </RadioGroup>

        <Box mt={4}>{renderContent()}</Box>
      </Box>
    </Box>
  );
};

export default BrandVoucherTable;
