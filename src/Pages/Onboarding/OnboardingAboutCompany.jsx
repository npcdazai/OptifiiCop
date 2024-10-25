import React, { useCallback, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  VStack,
  Image,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  IconButton,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoBagOutline } from "react-icons/io5";
import { SlCloudUpload } from "react-icons/sl";
import { useGetPrePopQuery } from "../../Services/on.board.service";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { useSentFileMutation } from "../../Services/token.serivce";
import FileUploader from "../../Components/FileUploader/FileUploader";
import ToastBox from "../../Components/ToastBox";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  corporate_name: Yup.string().required("Name is required"),
  industry_xid: Yup.string().required("Email is required"),
  mobileNumber_corporate: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  logo_path_file_name: Yup.mixed().required('Company logo is required'),
});

const OnboardingAboutCompany = ({
  corpData,
  setCorpData,
  setActiveStep,
  activeStep,
  steps,
  handleNext,
}) => {
  const { data } = useGetPrePopQuery();
  const toast = useToast()

  console.log(data?.data?.prepopulateData);

  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [sendFile] = useSentFileMutation();

  // Setup form handling with react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlePhoneChange = (value, country) => {
    const countryCode = `+${country.dialCode}`;
    let numberWithoutISD = value;

    setPhone(numberWithoutISD);
    setValue(
      "mobileNumber_corporate",
      value
        .split("")
        .splice(countryCode.length - 1, 15)
        .join("")
    ); // Sync phone number
    setValue("ISDCode_corporate", countryCode); // Sync ISD code
  };

  const onSubmit = async (data) => {
    setCorpData({ ...corpData, ...data });
    handleNext();
    // Handle your submit logic here
  };


  const handleFileUpload = async (file, setPreview) => {
    setIsLoading(true)
    console.log('File uploaded:', file);
    const formData = new FormData();
    formData.append("document", file); // Append file

    const code = localStorage?.getItem("codeCorporate");
    try {
      const res = await sendFile({ data: formData, code }); // Upload file to server
      console.log(res);
      if (res?.data?.data) {
        // Assuming res.data.data contains the file URL or some ID
        setCorpData({ ...corpData, logo_path_file_name: res?.data?.data });
        setValue("logo_path_file_name", res?.data?.data);
        console.log(errors);
        setPreview(res?.data?.data)
        toast({
          render: () => <ToastBox message={res?.data?.message} />,
        });
        setIsLoading(false);
      } else if (res?.error?.data?.message) {
        toast({
          render: () => <ToastBox status={'error'} message={res?.error?.data?.message} />,
        });

      } else if (res?.error) {
        toast({
          render: () => <ToastBox status={'error'} message={"Somthing went wrong"} />,
        });

      }
      setIsLoading(false)
    } catch (error) {
      console.error("File upload failed", error);

    }
  };

  const handleFileRemove = () => {
    console.log('File removed');
  };



  return (
    <Box  {...OPACITY_ON_LOAD}>
      <Text color={"#49475A"} fontWeight={500} fontSize={"sm"} mb={1}>
        About your company
      </Text>
      <Text color={"#49475A"} fontWeight={500} fontSize={"xs"}>
        Lorem ipsum dolor sit amet, adipiscing elit.
      </Text>

      {/* Form Fields */}
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Company Name Field */}
        <FormControl isRequired mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Company Name
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoBagOutline color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              border="1px solid #e2e8f0"
              borderRadius="8px"
              placeholder="Enter company name"
              size={"md"}
              fontSize={"xs"}
              {...register("corporate_name")}
            />
            <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
              {errors.corporate_name?.message}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>

        {/* Industry Select Field */}
        <FormControl isRequired mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Industry
          </FormLabel>
          <InputGroup>
            <Select
              placeholder="Select industry"
              fontWeight={500}
              size={"md"}
              fontSize={"xs"}
              {...register("industry_xid")} // Link with react-hook-form
            >
              {data?.data?.prepopulateData?.map(
                ({ industry_name, id }, index) => (
                  <option key={index} value={id}>
                    {industry_name}
                  </option>
                )
              )}
            </Select>
            <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
              {errors.industry_xid?.message}
            </FormErrorMessage>
          </InputGroup>
        </FormControl>

        {/* Phone Number Field */}
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
              fontSize: "12px",
            }}
            buttonStyle={{
              border: "none",
              borderRadius: "8px 0 0 8px",
              backgroundColor: "transparent",
            }}
          />
          <FormErrorMessage fontSize={"xs"} fontWeight={500} as={"span"}>
            {errors.mobileNumber_corporate?.message}
          </FormErrorMessage>
        </FormControl>

        <FileUploader
          label="Upload Company Logo"
          maxFileSize={3 * 1024 * 1024}  // Max 3MB size
          onFileUpload={handleFileUpload}

        > {errors.logo_path_file_name?.message && (
          <Text color="red" fontWeight={500} fontSize="xs">
            {errors.logo_path_file_name?.message}
          </Text>
        )}

        </FileUploader>

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
          // isLoading={isLoading}
          >
            {activeStep === steps.length - 1 ? "Next step" : "Next step"}
          </Button>
        </HStack>


      </Box>

      {/* Display the loading spinner */}
      {isLoading && (
        <Box border={'1px solid #6310CB'} px={4} py={2} rounded={'md'} shadow={'md'} as="span" bg={'#fff'} position={'fixed'} top={69} left={'40%'} display="flex" justifyContent="center" alignItems="center" >
          <Text as={'span'} fontWeight={600} fontSize={'sm'}>Uploading please wait...</Text>
        </Box>
      )}


    </Box>
  );
};

export default OnboardingAboutCompany;
