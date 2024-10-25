import { Box, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EmployeesEditModal = ({ isOpen, onClose }) => {

    const [phone, setPhone] = useState("");

    return (
        <Box>
            {/* modal  */}
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack mb={4}>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Employee name
                                </Text>
                                <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} />
                            </Box>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Email address
                                </Text>
                                <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} />
                            </Box>
                        </HStack>
                        <HStack mb={4}>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Phone number
                                </Text>
                                {/* <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} /> */}
                                <PhoneInput
                                    country={"in"} // Default country
                                    value={phone}
                                    onChange={setPhone}
                                    inputStyle={{
                                        width: "100%",
                                        borderRadius: "md",
                                        paddingLeft: "8",
                                        border: "1px solid #e2e8f0",
                                        height: "40px"
                                    }}
                                    buttonStyle={{
                                        border: "none",
                                        borderRadius: "8px 0 0 8px",
                                        backgroundColor: "transparent",
                                    }}
                                />
                            </Box>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Employee code
                                </Text>
                                <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} />
                            </Box>
                        </HStack>
                        <HStack mb={4}>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Department
                                </Text>
                                <Select size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} placeholder='Select option'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                            <Box flex={1}>
                                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                                    Designation
                                </Text>
                                <Select size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} placeholder='Select option'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                        </HStack>

                        <HStack py={4} justifyContent={"center"}>
                            <SecondaryButton title={"Cancel"} />
                            <PrimaryButton title={"Add"} />
                        </HStack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default EmployeesEditModal