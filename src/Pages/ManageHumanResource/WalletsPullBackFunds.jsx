import {
    Box, HStack, Text, VStack,
    Divider,
    Checkbox,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import MiniHeader from '../../Components/MiniHeader'


const WalletsPullBackFunds = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>

            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"} mb={4}>
                <Box>
                    <Text mb={0} fontSize={"sm"} fontWeight={600}>
                        Pooja shah
                    </Text>
                </Box>
                <Divider />

                <HStack spacing={16}>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Employee ID
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            WD-012
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Department
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            Design
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Role
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            Sr. Designer
                        </Text>
                    </VStack>
                </HStack>

            </Box>

            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"} mb={4}>
                <Box mb={6}>
                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                        Select expense wallet
                    </Text>
                </Box>

                <Box>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Box>
                            <Checkbox defaultChecked alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Food
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Fuel
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Books & periodicals
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Gadget & equipment
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Telecom
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>

                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Food
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Fuel
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Books & periodicals
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Gadget & equipment
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Telecom
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>

                    </HStack>
                </Box>

            </Box>
            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"} mb={4}>
                <Box mb={6}>
                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                        Select benefit wallet
                    </Text>
                </Box>

                <Box>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Food
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Fuel
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Books & periodicals
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Gadget & equipment
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Telecom
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>

                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Food
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Fuel
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Books & periodicals
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Gadget & equipment
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    Telecom
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>

                    </HStack>
                </Box>

            </Box>
            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"} mb={4}>
                <Box mb={6}>
                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                        Select gift card
                    </Text>
                </Box>

                <Box>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    4512 **** **** 4512
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    4512 **** **** 4512
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    4512 **** **** 4512
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    4512 **** **** 4512
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>
                        <Box>
                            <Checkbox alignItems={"start"} colorScheme='purple'>
                                <Text mb={0} fontSize={"sm"} fontWeight={500} mt={-1}>
                                    4512 **** **** 4512
                                </Text>
                                <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                                    ₹ 5000
                                </Text>
                            </Checkbox>
                        </Box>

                    </HStack>
                </Box>

            </Box>


        </Box>
    )
}

export default WalletsPullBackFunds


