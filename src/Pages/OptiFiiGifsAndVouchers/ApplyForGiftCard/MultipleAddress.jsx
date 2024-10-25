import { Box, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MdKeyboardArrowRight } from "react-icons/md";


const MultipleAddress = () => {
    return (
        <Box>
            <Box p={4} rounded={"md"} shadow={"md"} border={"1px dashed #000"} bg={"#f9f6fd"}>
                <Text fontWeight={600} fontSize="small" mb={4}>
                    Awesome! Proceed to select the multiple users..
                </Text>
                <PrimaryButton 
                title={"Select Employees and Addresses"}
                rightIcon={<MdKeyboardArrowRight size={16} />}
                px={4}
                />
            </Box>
        </Box>
    );
};

export default MultipleAddress;
