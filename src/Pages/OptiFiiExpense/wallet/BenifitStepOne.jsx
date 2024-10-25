import React, { useState } from 'react';
import {
    Box, Text, Input, Select, Stack,
    InputGroup,
    InputLeftElement,
    HStack,
    Divider,
    Tag,
} from "@chakra-ui/react";
import { MdCurrencyRupee } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import RupeeSlider from '../../../Components/RupeeSlider/RupeeSlider';

const BenifitStepOne = () => {

    const transactionRules = [
        {
            ruleText: "Either of them",
            tags: ["Food", "Fuel"]
        },
        {
            ruleText: "None of them",
            tags: ["Electronics", "Clothing"]
        }
    ];

    return (
        <Box >
            {/* Your form fields */}
            <Stack spacing={4}>
                <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={0}>Create wallet policy</Text>
                </Box>
                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Wallet name</Text>
                    <Box bg={"#f7f3fc"} p={2} rounded={"md"}>
                        <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={0}>Food</Text>
                    </Box>
                </Box>
                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Description</Text>
                    <Box bg={"#f7f3fc"} p={2} rounded={"md"}>
                        <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={0}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={2}>Transaction limit</Text>
                    <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={1}>Total amount</Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <MdCurrencyRupee color='#636F83' size={12} />
                        </InputLeftElement>
                        <Input type='tel' />
                    </InputGroup>
                </Box>

                <Divider color={"#f6f1fc"} />

                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={2}>Grades & transaction limit</Text>
                    <Stack direction="row" spacing={4}>
                        <Box>
                            <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={1}>Grade/level</Text>
                            <Input />
                        </Box>
                        <Box>
                            <Text fontSize="xs" fontWeight="500" color={"#636F83"} mb={1}>Amount</Text>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <MdCurrencyRupee color='#636F83' size={12} />
                                </InputLeftElement>
                                <Input />
                            </InputGroup>
                        </Box>
                    </Stack>
                </Box>
                <Divider color={"#f6f1fc"} />

                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Select wallet type</Text>
                    <Select placeholder="Select wallet type" fontSize={"sm"} fontWeight={500}>
                        <option value="prepaid">Prepaid</option>
                    </Select>
                </Box>

                <Box>
                    <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Select transaction type</Text>
                    <Select placeholder="Select transaction type" fontSize={"sm"} fontWeight={500}>
                        <option value="ecommerce">Ecommerce</option>
                    </Select>
                </Box>
                <Divider color={"#f6f1fc"} />

                <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={3}>Merchant transaction rule</Text>
                    {transactionRules.map((rule, index) => (
                        <Stack key={index} direction="row" spacing={4} mb={4}>
                            {/* Transaction rule: Dynamic content */}
                            <Box w={40}>
                                <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Transaction rule</Text>
                                <HStack spacing={2} border={"1px solid #D0D5DD"} rounded={"md"} p={2}>
                                    <Text fontSize="12px" fontWeight="500" color={"#6B6B6B"} mb={0}>
                                        {rule.ruleText} {/* Dynamic text from the rule */}
                                    </Text>
                                    <HiOutlineExclamationCircle color='#3725EA' />
                                </HStack>
                            </Box>

                            {/* Dynamic Tags */}
                            <Box flex={1}>
                                <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Merchant category</Text>
                                <HStack spacing={2} border={"1px solid #D0D5DD"} p={2} rounded={"md"}>
                                    {rule.tags.map((tag, tagIndex) => (
                                        <Tag key={tagIndex} size='sm' variant='solid' bg={"#efeefe"} color={"#3725EA"} fontWeight={500}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </HStack>
                            </Box>
                        </Stack>
                    ))}

                </Box>
                <Divider color={"#f6f1fc"} />
                <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={3}>Set transaction limit</Text>
                    <Box>
                        <Text fontSize="xs" fontWeight="500" color={"#344054"} mb={1}>Set maximum limit</Text>
                        <RupeeSlider />
                    </Box>
                    <HStack bg={"#efeefe"} p={2} rounded={"md"} border={"1px solid #b4adf7"} mt={6}>
                        <Text color={"#676D76"} fontSize={"xs"} mb={0} fontWeight={500}>Maximum limit -</Text>
                        <Text color={"#3725EA"} fontSize={"sm"} mb={0} fontWeight={500}>₹ 50,000</Text>
                    </HStack>
                    <Box bg={"#faf8fd"} p={4} rounded={"sm"} mt={4}>
                        <Text color={"#344054"} fontSize={"xs"} mb={2} fontWeight={500}>Set daily limit</Text>
                        <RupeeSlider />
                    </Box>
                    <Box bg={"#faf8fd"} p={4} rounded={"sm"} mt={4}>
                        <Text color={"#344054"} fontSize={"xs"} mb={2} fontWeight={500}>Set weekly limit</Text>
                        <RupeeSlider />
                    </Box>
                    <Box bg={"#faf8fd"} p={4} rounded={"sm"} mt={4}>
                        <Text color={"#344054"} fontSize={"xs"} mb={2} fontWeight={500}>Set monthly limit</Text>
                        <RupeeSlider />
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default BenifitStepOne