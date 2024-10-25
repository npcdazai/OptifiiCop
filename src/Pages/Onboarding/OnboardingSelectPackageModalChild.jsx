import React, { useState } from 'react';
import {
    Box, HStack, Text, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent,Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

// Define motion components
const MotionBox = motion(Box);
const MotionSvg = motion("svg");
const MotionCircle = motion.circle;
const MotionPolyline = motion.polyline;

const OnboardingSelectPackageModalChild = ({isOpen,onClose}) => {
    const navigate = useNavigate()
    const [ isLoading, setIsLoading ] = useState(false)


    const handleCheckMyStatus = () => {
        setIsLoading(true); // Set loading state
      
        // 3-second delay before navigating
        setTimeout(() => {
          navigate('/status-check');
          setIsLoading(false); // Reset loading state after navigation
        }, 3000);
      };
    return (

        
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MotionBox
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                            mb={8}
                        >
                            {/* svg with Framer Motion animation */}
                            <HStack  justifyContent={'center'} mb={6}>
                                <MotionSvg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 130.2 130.2"
                                    width="60px"
                                    height="60px"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                                >
                                    <MotionCircle
                                        cx="65.1"
                                        cy="65.1"
                                        r="62.1"
                                        fill="#65F37C"
                                        stroke="#159F2B"
                                        strokeWidth="0"
                                        strokeDasharray="1000"
                                        strokeDashoffset="1000"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 1 }}
                                    />
                                    <MotionPolyline
                                        points="100.2,40.2 51.5,88.8 29.8,67.5"
                                        fill="none"
                                        stroke="#159F2B"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeDasharray="1000"
                                        strokeDashoffset="-100"
                                        initial={{ strokeDashoffset: 1000 }}
                                        animate={{ strokeDashoffset: 0 }}
                                        transition={{ duration: 0.7, delay: 1 }}
                                    />
                                </MotionSvg>
                            </HStack>

                            <Text
                                color={"#100F14"}
                                fontSize={"md"}
                                fontWeight={"500"}
                                mb={2}
                                textAlign={'center'}

                            >
                               Thank You for enrolling
                            </Text>
                            <Text
                                color={"#667085"}
                                fontSize={"xs"}
                                fontWeight={"500"}
                                textAlign={'center'}
                            >
                                We are one step closer to give you the best product for you and your employee.In the meantime check out our resources curated just for you.
                            </Text>

                            <HStack justifyContent={"center"} mt={6}>
                                <PrimaryButton isLoading={isLoading} onClick={handleCheckMyStatus} title={"Check my status"} />
                            </HStack>

                        </MotionBox>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default OnboardingSelectPackageModalChild;
