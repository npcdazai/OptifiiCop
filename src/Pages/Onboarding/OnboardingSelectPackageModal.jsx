import { Box, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, } from '@chakra-ui/react';
import React, { useState } from 'react';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import OnboardingSelectPackageModalChild from './OnboardingSelectPackageModalChild';

const OnboardingSelectPackageModal = ({ isOpen, onClose, onSubmit, isLoading, onBoard }) => {
    const [isChildModalOpen, setIsChildModalOpen] = useState(false);

    const handleProceed = async () => {
        // Close the parent modal and open the child modal
        await onSubmit()
        onClose();
        setIsChildModalOpen(true);
    };

    const handleChildClose = () => {
        // Close the child modal
        setIsChildModalOpen(false);
    };

    return (
        <Box>
            {/* Parent Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Terms & Conditions</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize={"xs"} fontWeight={500} color={"#5C5C5C"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </Text>
                        <Text fontSize={"xs"} fontWeight={500} color={"#5C5C5C"}>
                        at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.                         </Text>
                        <Text fontSize={"xs"} fontWeight={500} color={"#5C5C5C"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </Text>
                        <Text fontSize={"xs"} fontWeight={500} color={"#5C5C5C"}>
                        at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.                         </Text>
              
                        <Box my={6}>
                            <Checkbox colorScheme='purple'>
                                <Text fontSize={"xs"} fontWeight={500} mb={0} color={"#344054"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </Checkbox>
                            <Checkbox colorScheme='purple'>
                                <Text fontSize={"xs"} fontWeight={500} mb={0} color={"#344054"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </Checkbox>
                            <Checkbox colorScheme='purple'>
                                <Text fontSize={"xs"} fontWeight={500} mb={0} color={"#344054"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </Checkbox>
                            <Checkbox colorScheme='purple'>
                                <Text fontSize={"xs"} fontWeight={500} mb={0} color={"#344054"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Text>
                            </Checkbox>
                        </Box>

                        <Box w={"100%"} my={4}>
                            <PrimaryButton isLoading={isLoading} w={"100%"} title={"Proceed"} onClick={handleProceed} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* Child Modal */}
            <OnboardingSelectPackageModalChild isOpen={isChildModalOpen} onClose={handleChildClose} />
        </Box>
    );
};

export default OnboardingSelectPackageModal;
