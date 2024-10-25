import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import WalletPolicy from "./WalletPolicy";
import { OPACITY_ON_LOAD } from "../../../Layout/animations";

const steps = [
  { title: "Wallet policy", description: "Contact Info" },
  { title: "Approval policy", description: "Date & Time" },
  { title: "Submission policy", description: "Select Rooms" },
  { title: "Define budget", description: "Select Rooms" },
];

function CreateWallet() {
  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({});

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

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (activeStep === steps.length - 1) {
      console.log("Form Submitted:", formData);
    } else {
      nextStep();
    }
  };

  return (
    <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              {/* <StepDescription>{step.description}</StepDescription> */}
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <Box mt={4}>
            <Heading color="#383838" fontWeight="semibold" fontSize="large">
              Create wallet policy
            </Heading>

            <WalletPolicy  register={register} />
          </Box>
        )}
        {activeStep === 1 && (
          <Box mt={4}>
            {/* <FormControl isInvalid={errors.date}>
              <FormLabel>Date & Time</FormLabel>
              <Input
                type="datetime-local"
                {...register("date", { required: "This is required" })}
              />
            </FormControl> */}
          </Box>
        )}
        {activeStep === 2 && (
          <Box mt={4}>
            {/* <FormControl isInvalid={errors.room}>
              <FormLabel>Select Room</FormLabel>
              <Input
                {...register("room", { required: "This is required" })}
                placeholder="Room Number"
              />
            </FormControl> */}
          </Box>
        )}

        <Box mt={4}>
          <Button onClick={prevStep} disabled={activeStep === 0} mr={4}>
            Previous
          </Button>
          <Button type="submit">
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateWallet;
