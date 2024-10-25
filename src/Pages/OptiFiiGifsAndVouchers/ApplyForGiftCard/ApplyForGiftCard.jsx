import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";
import SelectCard from "./SelectCard";
import DigiTable from "./DigiTable";
import WhereToShare from "./WhereToShare";
import PrimaryButton from "../../../../src/Components/Buttons/PrimaryButton";
import mobilepng from "../../../assets/mobileCard.png";
import cardfooter from "../../../assets/cardFooter.png";
import cardfooter2 from "../../../assets/cardFooter2.png";
import cardfooter3 from "../../../assets/cardFooter3.png";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const { useForm } = useContext(GlobalStateContext);
  const {
    selectedCardIndex,
    setSelectedCardIndex,
    selectionCount,
    setSelectionCount,
    showAnotherComponent,
    setShowAnotherComponent,
    hasProceeded,
    setHasProceeded,
  } = useContext(GlobalStateContext);
  const { isOpen, onOpen, onClose } = useContext(GlobalStateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  
  const handleNext = () => {
    if (selectedCardIndex < selectedCardIndex.length) {
      setStep(selectedCardIndex + 1);
    }
    if (selectedCardIndex !== null) {
      setHasProceeded(true);
      // onOpen();
    } else {
      alert("Please select a card before proceeding.");
    }
    setShowAnotherComponent(!showAnotherComponent);
  };
  // const handleNext = () => {
  //   if (selectedCardIndex !== null) {
  //     if (selectedCardIndex < maxSteps - 1) {
  //       setStep(selectedCardIndex + 1);
  //     }
  //     setHasProceeded(true);
  //   } else {
  //     alert("Please select a card before proceeding.");
  //   }
  //   setShowAnotherComponent((prevState) => !prevState);
  // };

  const handlePrev = () => {
    navigate("/optifii-gifts-dashboard/apply-for-giftcards");
  };

  console.log(selectedCardIndex, "Neko-chan");
  const steps = [
    {
      component: (
        <SelectCard
          handleNext={handleNext}
        />
      ),
      label: "Select card type",
      description: "In Progress",
    },
    {
      component: <WhereToShare handleNext={handleNext} />,
      label: "Where to share?",
      description: "Pending",
    },
    {
      component: <DigiTable handleNext={handleNext} />,
      label: "Select employee",
      description: "Pending",
    },
  ];

  const currentStep = step - 1;
  const circleSize = useBreakpointValue({ base: "30px", md: "40px" });

  return (
    <Box bgColor="#F3F3F9" {...OPACITY_ON_LOAD} overflow={"scroll"} p={4}>
      <Box>
        <Box bgColor="#fff" maxW="100%" rounded={"md"} p={4} mb={4}>
          <RadioGroup
            value={String(step)}
            // value={String(selectedCardIndex)}
            onChange={(val) => setStep(Number(val))}
            // onChange={(val) => setSelectedCardIndex(parseInt(val, 10))}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              position="relative"
            >
              {steps.map((item, index) => (
                <React.Fragment key={index}>
                  <VStack spacing={0}>
                    <Radio
                      value={String(index + 1)}
                      colorScheme="purple"
                      size="lg"
                    />
                    <Text
                      fontSize="xs"
                      color="#9C9C9C"
                      fontWeight={400}
                      mb={0}
                      mt={1}
                    >
                      STEP {index + 1}
                    </Text>
                    <Text color="#000000" fontWeight={600} fontSize="sm" mb={0}>
                      {item.label}
                    </Text>
                    <Text
                      fontSize="xs"
                      mb={0}
                      fontWeight={600}
                      color={
                        index + 1 === step
                          ? "#3725EA"
                          : index < step
                          ? "green"
                          : "#666666"
                      }
                    >
                      {index + 1 === step
                        ? "In Progress"
                        : index < step
                        ? "Completed"
                        : "Pending"}
                    </Text>
                  </VStack>

                  {index < steps.length - 1 && (
                    <Box
                      flex="1"
                      height="1px"
                      mb={"60px"}
                      position="relative"
                      top="50%"
                      bgColor={index + 1 <= step ? "#3725EA" : "#e2e2e2"}
                    />
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </RadioGroup>
        </Box>

        {/* Stepper Content */}
        <Box bgColor="#fff" maxW="100%" rounded={"md"} p={4}>
          <Text color="#000000" fontWeight={600} fontSize="small">
            {steps[currentStep].label}
          </Text>
          {/* Step Component */}
          <Box>{steps[currentStep].component}</Box>

          {/* Navigation Buttons */}
          <Box mt={8}>
            <PrimaryButton
              title={" Save & Proceed"}
              onClick={handleNext}
              isDisabled={step === steps.length}
            />
            {/* {selectedCardIndex > 0 && (
              <Button mt={4} onClick={handlePrev}>
                Previous
              </Button>
            )} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Stepper;
