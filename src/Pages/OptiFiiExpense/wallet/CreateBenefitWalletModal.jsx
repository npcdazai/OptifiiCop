import React, { useState, useRef, useEffect } from 'react';
import {
  Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, Input, Select, Stack,
  HStack,
  Divider,
  Button
} from "@chakra-ui/react";
import {
  Step,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';
import { IoCheckmark } from "react-icons/io5";
import PrimaryButton from "../../../../src/Components/Buttons/PrimaryButton";
import RupeeSlider from '../../../Components/RupeeSlider/RupeeSlider';
import BenifitStepOne from './BenifitStepOne';
import BenifitStepTwo from './BenifitStepTwo';
import BenifitStepThree from './BenifitStepThree';

const CreateBenefitWalletModal = ({ isOpen, onClose }) => {
  // Define steps
  const steps = [
    { title: 'Wallet policy' },
    { title: 'Approval policy' },
    { title: 'Submission policy' },
    { title: 'Define budget' },
  ];

  // Use useState to control the active step
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]); // Create refs for each step


  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Box>
      {/* Modal component */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalHeader>Create Benefit Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Stepper Component with 130% width, custom scrollbar and horizontal scroll */}
            <Box pb={4}
              overflowX="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#3725EA', // Custom scrollbar thumb color
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#e0e0e0', // Custom scrollbar track color
                },
              }}
            >
              <Box>
                <Stepper size="lg" index={activeStep} color={"#3725EA"} gap={1}>
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator w={6} h={6}>
                        <Box
                          borderRadius="full"
                          bg={index < activeStep ? '#3725EA' : (index === activeStep ? '#3725EA' : 'gray.300')}
                          color={index < activeStep || index === activeStep ? 'white' : 'gray.500'}
                          w={4}
                          h={4}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {index < activeStep ? (
                            <IoCheckmark />
                          ) : (
                            <Text mb={0} fontSize={"sm"}>{index + 1}</Text>
                          )}
                        </Box>
                      </StepIndicator>

                      <Box flexShrink="0" ml={2}>
                        <StepTitle mb={0} fontSize="sm" >
                          <Text
                            mb={0}
                            fontSize="sm"
                            fontWeight={500}
                            color={index <= activeStep ? '#3725EA' : 'gray.500'}
                          >
                            {step.title}
                          </Text>
                        </StepTitle>
                      </Box>

                      {index !== steps.length - 1 && (
                        <StepSeparator borderColor="gray.300" />
                      )}
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <Divider color={"#f6f1fc"} />

            {/* Conditionally render form fields based on active step */}
            <Box mt={6}>
              <Stack spacing={4}>
                {/* Step 1 Content: Create Wallet Policy */}
                {activeStep === 0 && (
                  <BenifitStepOne />
                )}

                {/* Step 2 Content: Approval Policy */}
                {activeStep === 1 && (
                  <BenifitStepTwo />
                )}

                {/* Step 3 Content: Submission Policy */}
                {activeStep === 2 && (
                  <BenifitStepThree />
                )}

                {/* Step 4 Content: Define Budget */}
                {activeStep === 3 && (
                  <Box>
                    <Text fontSize="sm" fontWeight="500" color={"#344054"} mb={0}>Define Budget</Text>
                    <RupeeSlider />
                  </Box>
                )}

                {/* Stepper Controls */}
                <HStack justifyContent="center" my={4}>
                  <Button
                    onClick={prevStep}
                    isDisabled={activeStep === 0}
                    fontSize={"sm"}
                    h={8}
                  >
                    Previous
                  </Button>
                  <PrimaryButton title={"Save & Proceed"}
                    onClick={nextStep}
                    isDisabled={activeStep === steps.length - 1}
                  />
                </HStack>
              </Stack>
            </Box>

          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateBenefitWalletModal;
