import React, { useState } from 'react';
import {
    Box, Text, Input, Select, Stack,
    InputGroup,
    InputLeftElement,
    HStack,
    Divider,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import { MdCurrencyRupee } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import RupeeSlider from '../../../Components/RupeeSlider/RupeeSlider';

const BenifitStepThree = () => {
    return (
        <Box >
            {/* Your form fields */}
            <Stack spacing={4}>
                <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={0}>Create submission policy</Text>
                </Box>
                <Box>
                    <Box>
                        <Text fontSize={"sm"} fontWeight={500} mb={3}>
                            1. Requirement of receipt
                        </Text>
                        <RadioGroup defaultValue='2'>
                            <Stack>
                                <Radio size='md' name='1' colorScheme='purple' value='1'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>Required</Text>
                                </Radio>
                                <Radio size='md' name='1' colorScheme='purple' value='2'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}> Not required</Text>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box mt={4}>
                        <Text fontSize={"xs"} color={"#535963"} fontWeight={500} mb={2}>
                            Required for
                        </Text>
                        <RadioGroup defaultValue='2'>
                            <Stack>
                                <Radio size='md' name='1' colorScheme='purple' value='1'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>All transaction</Text>
                                </Radio>
                                <HStack>
                                    <Radio size='md' name='1' colorScheme='purple' value='2'>
                                        <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>Transaction above</Text>
                                    </Radio>
                                    <InputGroup w={60} >
                                        <InputLeftElement pointerEvents='none'>
                                            <MdCurrencyRupee color='#636F83' size={12} />
                                        </InputLeftElement>
                                        <Input border={"1px solid #8a4dd8"} />
                                    </InputGroup>
                                </HStack>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Text fontSize={"sm"} fontWeight={500} mb={3}>
                            2. what nature of receipt/memo
                        </Text>
                        <RadioGroup defaultValue='3'>
                            <Stack>
                                <Radio size='md' name='1' colorScheme='purple' value='1'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>Printed</Text>
                                </Radio>
                                <Radio size='md' name='1' colorScheme='purple' value='2'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>Hand written</Text>
                                </Radio>
                                <Radio size='md' name='1' colorScheme='purple' value='3'>
                                    <Text fontSize="xs" fontWeight="500" color={"#3F4754"} mb={0}>Both</Text>
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default BenifitStepThree