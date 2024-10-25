import { Box, Divider, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const LoadMoneyModal = ({ isOpen, onClose }) => {

    return (
        <Box>
            {/* modal  */}
            <Modal size={"sm"} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Bank account details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack mb={2}>
                            <Text fontSize={"xs"} fontWeight={500} color={"#757E8C"} mb={0} w={40}>
                                Name at bank
                            </Text>
                            <Text fontSize={"xs"} fontWeight={600} mb={0} color={"#262626"}> 
                                Kartikey Gautam
                            </Text>
                        </HStack>
                        <HStack mb={2}>
                            <Text fontSize={"xs"} fontWeight={500} color={"#757E8C"} mb={0} w={40}>
                                Account number
                            </Text>
                            <Text fontSize={"xs"} fontWeight={600} mb={0} color={"#262626"}>
                                12345578910
                            </Text>
                        </HStack>
                        <HStack mb={2}>
                            <Text fontSize={"xs"} fontWeight={500} color={"#757E8C"} mb={0} w={40}>
                                IFSC
                            </Text>
                            <Text fontSize={"xs"} fontWeight={600} mb={0} color={"#262626"}>
                                ICICI121452
                            </Text>
                        </HStack>
                        <Divider />
                        <Box mb={4}>
                            <Text fontSize={"md"} fontWeight={600} mb={4}>
                                Load Money
                            </Text>
                            <Box mb={2}>
                                <Text fontSize={"xs"} fontWeight={600} mb={1} color={"#344054"}>
                                    Enter UTR number
                                </Text>
                                <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} />
                            </Box>
                            <Box >
                                <Text fontSize={"xs"} fontWeight={600} mb={1} color={"#344054"}>
                                    Enter amount
                                </Text>
                                <Input size={"sm"} rounded={"md"} fontSize={"sm"} fontWeight={500} />
                            </Box>
                        </Box>

                        <HStack py={4} justifyContent={"center"}>
                            <PrimaryButton title={"Submit"} />
                        </HStack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default LoadMoneyModal