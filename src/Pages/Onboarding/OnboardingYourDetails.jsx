import React, { useState } from "react";
import {
  Box,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  IconButton,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CiUser, CiMail } from "react-icons/ci";
import optifii_logo from "../../assets/optifii_logo.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { OPACITY_ON_LOAD } from "../../Layout/animations";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  full_name_principal: Yup.string().required("Name is required"),
  emailAddress_principal: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber_principal: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

const OnboardingYourDetails = ({
    corpData,
  setCorpData,
  setActiveStep,
  activeStep,
  steps,
  handleNext,
}) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    const countryCode = `+${country.dialCode}`;
    let numberWithoutISD = value;

    setPhone(numberWithoutISD);
    setValue(
      "mobileNumber_principal",
      value
        .split("")
        .splice(countryCode.length - 1, 15)
        .join("")
    ); // Sync phone number
    setValue("ISDCode_principal", countryCode); // Sync ISD code
  };

  // Setup form handling with react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    setCorpData({...corpData, ...data})
    handleNext()
    // Handle your submit logic here
  };

  return (
    <Box {...OPACITY_ON_LOAD}>
      <Box mb={4}>
        <Image src={optifii_logo} />
      </Box>
      <Text fontWeight={600} fontSize={"md"}>
        Streamlined Solutions for Seamless Reimbursements!
      </Text>
      <Text color={"#49475A"} fontWeight={500} fontSize={"sm"} mb={1}>
        Add your details
      </Text>
      <Text color={"#49475A"} fontWeight={500} fontSize={"xs"}>
        Lorem ipsum dolor sit amet, adipiscing elit.
      </Text>

      {/* Form Fields */}
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Name
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiUser color="gray.300" />
            </InputLeftElement>
            <Input
              fontSize={"xs"}
              {...register("full_name_principal")}
              type="text"
            />
            <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
              {errors.full_name_principal?.message}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Email
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiMail color="gray.300" />
            </InputLeftElement>
            <Input
              fontSize={"xs"}
              {...register("emailAddress_principal")}
              type="email"
            />
            <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
              {errors.emailAddress_principal?.message}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Phone Number
          </FormLabel>

          <PhoneInput
            country={"in"} // Default country
            value={phone}
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              borderRadius: "md",
              paddingLeft: "8",
              border: "1px solid #e2e8f0",
              height: "40px",
            }}
            buttonStyle={{
              border: "none",
              borderRadius: "8px 0 0 8px",
              backgroundColor: "transparent",
            }}
          />
          <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
            {errors.mobileNumber_principal?.message}
          </FormErrorMessage>
        </FormControl>

        <HStack mt={6}>
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
            type="submit"
          >
            {activeStep === steps.length - 1 ? "Next step" : "Next step"}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default OnboardingYourDetails;
