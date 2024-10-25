import React, { useState } from 'react';
import {
  Box, Text, Input, Select, Stack,
  InputGroup,
  InputLeftElement,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { MdCurrencyRupee } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import RupeeSlider from '../../../Components/RupeeSlider/RupeeSlider';

const BenifitStepTwo = () => {
    return (
        <Box >
            {/* Your form fields */}
            <Stack spacing={4}>
                <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={1}>Create approval policy</Text>
                    <Text fontSize="12px" fontWeight="500" color={"#606060"} mb={0}>Add up to 5 policy per approver flow </Text>
                </Box>
                
                {/* <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Description</Text>
                    <Box bg={"#f7f3fc"} p={2} rounded={"md"}>
                        <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={0}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </Text>
                    </Box>
                </Box> */}

                


          
{/* 

                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Select transaction type</Text>
                    <Select placeholder="Select transaction type" fontSize={"sm"} fontWeight={500}>
                        <option value="ecommerce">Ecommerce</option>
                    </Select>
                </Box>
                <Divider color={"#f6f1fc"} /> */}

           
                   
                    <Box bg={"#faf8fd"} p={4} rounded={"sm"} mt={4}>
                        <Text color={"#344054"} fontSize={"xs"} mb={2} fontWeight={500}>Set amount limit</Text>
                        <RupeeSlider />
                    </Box>
            </Stack>
        </Box>
    )
}

export default BenifitStepTwo