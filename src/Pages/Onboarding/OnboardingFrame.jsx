import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  useSteps,
  StepTitle,
  Divider,
  Button,
  HStack,
  IconButton,
  Flex,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Header from "./Header";
import onboarding_bg from "../../assets/onboarding_bg.webp";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CheckIcon,
  Icon,
} from "@chakra-ui/icons";
import {
  FaUser,
  FaBuilding,
  FaClipboard,
  FaUserTie,
  FaBoxOpen,
} from "react-icons/fa";
import OnboardingYourDetails from "./OnboardingYourDetails";
import OnboardingAboutCompany from "./OnboardingAboutCompany";
import OnboardingAddCompanyDetails from "./OnboardingAddCompanyDetails";
import OnboardingDirectorDetails from "./OnboardingDirectorDetails";
import OnboardingSelectPackage from "./OnboardingSelectPackage";
import OnboardingSelectPackageModal from "./OnboardingSelectPackageModal"; // Import your modal component
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useSearchParams } from "react-router-dom";
import company from "../../assets/company.png";
import pfp from "../../assets/pfp.png";

// Retrieve the active step from localStorage or set it to 0 if it doesn't exist
// const initialStep = parseInt(localStorage.getItem("activeStep")) || 0;

const OnboardingFrame = () => {
  // Create a searchParams instance
  const [searchParams] = useSearchParams();
  const [corpData, setCorpData] = useState({});

  useEffect(() => {
    // Extract specific parameters
    if (searchParams) {
      const codeCorporate = searchParams.get("code_corporate");
      const codeCorporateId = searchParams.get("code_corporateId");
      localStorage?.setItem("codeCorporate", codeCorporate);
      localStorage?.setItem("codeCorporateId", codeCorporateId);
    }
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem("corpData", JSON.stringify(corpData));
    console.log(corpData);
  }, [corpData]);

  // Modal state and disclosure hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  const steps = [
    {
      title: "Your details",
      description: "Lorem ipsum dolor sit amet dolor",
      icon: FaUser,
      img: company,
    },
    {
      title: "About Company",
      description: "Lorem ipsum dolor sit amet dolor",
      icon: FaBuilding,
      img: company,
    },
    {
      title: "Company details",
      description: "Lorem ipsum dolor sit amet dolor",
      icon: FaClipboard,
      img: company,
    },
    {
      title: "Director details",
      description: "Lorem ipsum dolor sit amet dolor",
      icon: FaUserTie,
      img: pfp,
    },
    {
      title: "Select package",
      description: "Lorem ipsum dolor sit amet dolor",
      icon: FaBoxOpen,
      img: company,
    },
  ];

  // Stepper configuration
  const { activeStep, setActiveStep } = useSteps({
    index: 0, // Initialize the active step from localStorage or 0
    count: steps.length,
  });

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // If it's the last step, open the modal
      onOpen();
    } else {
      // Otherwise, go to the next step
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);

      // Store the new active step in localStorage
      localStorage.setItem("activeStep", nextStep);
    }
  };

  // Array of components for each step
  const stepComponents = [
    <OnboardingYourDetails
      corpData={corpData}
      setCorpData={setCorpData}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      steps={steps}
      handleNext={handleNext}
    />,
    <OnboardingAboutCompany
      corpData={corpData}
      setCorpData={setCorpData}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      steps={steps}
      handleNext={handleNext}
    />,
    <OnboardingAddCompanyDetails
      corpData={corpData}
      setCorpData={setCorpData}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      steps={steps}
      handleNext={handleNext}
    />,
    <OnboardingDirectorDetails
      corpData={corpData}
      setCorpData={setCorpData}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      steps={steps}
      handleNext={handleNext}
    />,
    <OnboardingSelectPackage
      corpData={corpData}
      setCorpData={setCorpData}
      setActiveStep={setActiveStep}
      activeStep={activeStep}
      steps={steps}
      handleNext={handleNext}
    />,
  ];

  return (
    <Box>
      {/* Onboarding content */}
      <Box {...OPACITY_ON_LOAD} overflowX={"auto"}>
        <Header />
        <Box
          w={"100%"}
          minH="calc(100vh - 62px)"
          bgImage={`url(${onboarding_bg})`}
          bgSize={"cover"}
          bgPosition={"center"}
          position={"relative"}
          px={6}
          display={"flex"}
          gap={"6"}
          alignItems={"start"}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        >
          {/* Stepper Box */}
          <Box
            w={"100%"}
            my={5}
            boxShadow={"md"}
            maxW={"350px"}
            zIndex={2}
            bg={"#fff"}
            py={6}
            px={4}
            borderRadius={"md"}
            maxH={"82.9vh"}
            overflowY={"auto"}
            sx={{
              /* Custom scrollbar styling */
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#6311CB",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#F6F0FF",
              },
            }}
          >
            <Box>
              <Text color={"#49475A"} fontWeight={500} fontSize={"sm"}>
                Lorem ipsum dolor sit amet, adipiscing elit.
              </Text>
              <Divider />
              <Box>
                <Stepper
                  index={activeStep}
                  orientation="vertical"
                  h="400"
                  gap="0"
                  my={"5"}
                  sx={{ "--stepper-accent-color": "#6311CB" }}
                >
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepIndicator>
                        <StepStatus
                          complete={<CheckIcon boxSize="16px" />}
                          incomplete={
                            <Image
                              src={step.img}
                              color={"purple.400"}
                              boxSize="16px"
                            />
                          }
                          active={
                            <Icon
                              as={step.icon}
                              color={"purple.500"}
                              boxSize="16px"
                            />
                          }
                        />
                      </StepIndicator>
                      <Box flexShrink="0" ml={4}>
                        <StepTitle
                          fontWeight={activeStep === index ? "600" : "500"}
                          fontSize={activeStep === index ? "md" : "sm"}
                          mb={1}
                        >
                          {step.title}
                        </StepTitle>
                        <Text fontSize="xs" color="gray.500">
                          {step.description}
                        </Text>
                      </Box>
                      <StepSeparator
                        borderColor={
                          activeStep > index ? "purple.500" : "purple.300"
                        }
                        borderWidth={1}
                      />
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
          </Box>

          {/* Content Box */}
          <Box
            w={"100%"}
            bg={"#fff"}
            p={6}
            borderRadius={"md"}
            my={5}
            boxShadow={"md"}
            zIndex={2}
            maxH="calc(82vh - 0px)"
            overflowY={"auto"}
            sx={{
              /* Custom scrollbar styling */
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#6311CB",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#F6F0FF",
              },
            }}
          >
            <HStack justifyContent={"end"}>
              {/* Step Indicator (Horizontal) */}
              <Flex justify="center" align="center" gap={2} mt={4}>
                {steps.map((_, index) => (
                  <Box
                    key={index}
                    h="4px"
                    w="20px"
                    bg={index <= activeStep ? "#3725EA" : "#e9e7fd"}
                    borderRadius="full"
                  />
                ))}
              </Flex>
            </HStack>

            <Box>
              <Box w={{ base: "70%", lg: "92%" }} mx={"auto"}>
                {/* Render the current step component */}
                {stepComponents[activeStep]}

                {/* <HStack mt={6}>
                                    <IconButton
                                        aria-label="Back"
                                        icon={<ArrowBackIcon />}
                                        variant="outline"
                                        size="sm"
                                        px={8}
                                        _hover={{ opacity: 0.8 }}
                                        color={"#d0b8ef"}
                                        border={"1px solid #d0b8ef"}
                                        isDisabled={activeStep === 0}
                                        onClick={() => setActiveStep(activeStep - 1)}
                                    />

                                    <Button
                                        bg={"#6311CB"}
                                        color={"#fff"}
                                        fontSize={"xs"}
                                        fontWeight={500}
                                        size="sm"
                                        _hover={{ opacity: 0.8 }}
                                        rightIcon={<ArrowForwardIcon />}
                                        w={"100%"}
                                        onClick={handleNext} // Use handleNext function
                                    >
                                        {activeStep === steps.length - 1 ? 'Next step' : 'Next step'}
                                    </Button>
                                </HStack> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal for final step */}
      <OnboardingSelectPackageModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default OnboardingFrame;
