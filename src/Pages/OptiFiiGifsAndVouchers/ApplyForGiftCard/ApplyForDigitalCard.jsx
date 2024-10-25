import { Box, Button, Flex, Radio, RadioGroup, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ApplyForDigitalCard = () => {
  const [step, setStep] = useState(1);
  const steps = [
    { label: "Select card type", description: "Pending" },
    { label: "Select employee", description: "Pending" },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const currentStep = step - 1;
  const isLastStep = step === steps.length;
  const isFirstStep = step === 1;
  const circleSize = useBreakpointValue({ base: "30px", md: "40px" });
  return (
    <Box p={4}>
      <Box>
        <RadioGroup
          value={String(step)}
          onChange={(val) => setStep(Number(val))}
        >
          <Flex p={4} justifyContent="space-between" alignItems="center">
            {steps.map((item, index) => (
              <VStack key={index} spacing={2}>
                <Radio value={String(index + 1)} colorScheme="purple" size="lg">
                  {/* {index + 1} */}
                </Radio>
                <Text fontSize="small" color="#9C9C9C" fontWeight={400}>
                  STEP {index + 1}
                </Text>
                <Text color="#000000" fontWeight={600} fontSize="small">
                  {item.label}
                </Text>
                <Text
                  fontSize="sm"
                  color={index + 1 === step ? "blue.500" : "gray.500"}
                >
                  {index + 1 === step ? "In Progress" : "Pending"}
                </Text>
              </VStack>
            ))}
          </Flex>
        </RadioGroup>
        <Box mt={4}>{steps[currentStep].label}</Box>
        <Flex justifyContent="space-between" mt={8}>
          <Button
            onClick={handlePrev}
            disabled={isFirstStep}
            colorScheme="purple"
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={isLastStep}
            colorScheme="purple"
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ApplyForDigitalCard;
