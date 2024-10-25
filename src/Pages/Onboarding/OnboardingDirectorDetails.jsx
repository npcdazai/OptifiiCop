import React, { useState } from "react";
import { Box, Input, Text, VStack, HStack, IconButton, Button, Icon, Image, useDisclosure } from "@chakra-ui/react";
import { SlCloudUpload } from "react-icons/sl";
import PhoneInput from "react-phone-input-2";
import { useSentFileMutation } from "../../Services/token.serivce";
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import { fadeIn } from "../../Components/FileUploader/FileUploader";
import ImageViewer from "../../Components/ImageViewer";

const OnboardingDirectorDetails = ({
  corpData,
  setCorpData,
  setActiveStep,
  activeStep,
  steps,
  handleNext,
}) => {
  const [directorForms, setDirectorForms] = useState([
    {
      director_name: "",
      emailAddress: "",
      ISDCode: "",
      mobileNumber: "",
      pancard_file_path_name: "",
      aadhar_file_path_name: "",
    },
  ]);

  const [directorFormErrors, setDirectorFormErrors] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ isLoading, setIsLoading ] = useState(false)
  const [ prevLink, setPrevLink ] = useState(null)

  const [sendFile] = useSentFileMutation();
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append("document", file); // Append file
    const code = localStorage?.getItem("codeCorporate");
    try {
      const res = await sendFile({ data: formData, code }); // Upload file to server
      return res?.data?.data;
    } catch (error) {
      console.error("File upload failed", error);
    }
  }

  // Add new director form
  const handleAddDirector = () => {
    setDirectorForms([
      ...directorForms,
      {
        director_name: "",
        emailAddress: "",
        mobileNumber: "",
        pancard_file_path_name: "",
        aadhar_file_path_name: "",
      },
    ]);
  };

  // Update the form field for a particular director
  const handleFieldChange = (index, field, value, country = {}) => {
    const updatedForms = [...directorForms];
    if (field === "mobileNumber") {
      const countryCode = `+${country.dialCode}`;
      updatedForms[index]["ISDCode"] = countryCode;
      updatedForms[index]["mobileNumber"] = value
        .split("")
        .splice(countryCode.length - 1, 15)
        .join("");
    }
    updatedForms[index][field] = value;
    setDirectorForms(updatedForms);
  };

  // Handle file upload for PAN and Aadhar
  const handleFileUpload = async (index, field, event) => {

    setIsLoading(true)
    const file = event.target.files[0];
    if (file) {
      const filePath = await uploadFile(file);
      const updatedForms = [...directorForms];
      updatedForms[index][field] = filePath; // Store file name (or file object)
      setDirectorForms(updatedForms);
      setIsLoading(false)
    }
  };

  // Basic validation for each field
  const validateForm = () => {
    const errors = directorForms.map((directorForm) => {
      let formErrors = {};

      if (!directorForm.director_name) {
        formErrors.director_name = "Director Name is required.";
      }

      if (
        !directorForm.emailAddress ||
        !/\S+@\S+\.\S+/.test(directorForm.emailAddress)
      ) {
        formErrors.emailAddress = "Please enter a valid email address.";
      }

      if (
        !directorForm.mobileNumber ||
        directorForm.mobileNumber.length < 10
      ) {
        formErrors.mobileNumber =
          "Phone number is required and should be at least 10 digits.";
      }

      if (!directorForm.pancard_file_path_name) {
        formErrors.pancard_file_path_name = "Please upload a PAN file.";
      }

      if (!directorForm.aadhar_file_path_name) {
        formErrors.aadhar_file_path_name = "Please upload an Aadhar file.";
      }

      return formErrors;
    });

    setDirectorFormErrors(errors);

    // Check if all forms are valid (no errors in any form)
    const isValid = errors.every(
      (formErrors) => Object.keys(formErrors).length === 0
    );
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    // console.log(directorForms);
    if (validateForm()) {
      console.log("Form is valid, proceed with submission.");
      const data = {
        directors: directorForms,
      };
      setCorpData({ ...corpData, ...data });
      handleNext();
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <Box maxH="calc(82vh - 0px)">
      <Text color={"#49475A"} fontWeight={500} fontSize={"sm"} mb={1}>
        Add director details
      </Text>
      <Text color={"#49475A"} fontWeight={500} fontSize={"xs"}>
        Lorem ipsum dolor sit amet, adipiscing elit.
      </Text>

      {directorForms?.map((directorForm, index) => (
        <Box key={index} mb={6}>
          <Text color={"#49475A"} fontWeight={600} fontSize={"sm"} mb={2}>
            Director {index + 1}
          </Text>
          <Box
            as="form"
            bg={"#f7f7fb"}
            p={4}
            borderRadius={"md"}
            boxShadow={"md"}
          >
            {/* Director Name Field */}
            <Box mb={3}>
              <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                Director Name
              </Text>
              <Input
                type="text"
                border="1px solid #e2e8f0"
                borderRadius="md"
                fontSize={"sm"}
                fontWeight={500}
                bg={"#fff"}
                placeholder="Enter director name"
                value={directorForm.director_name}
                onChange={(e) =>
                  handleFieldChange(index, "director_name", e.target.value)
                }
              />
              {directorFormErrors[index]?.director_name && (
                <Text color="red.500" fontSize="xs">
                  {directorFormErrors[index].director_name}
                </Text>
              )}
            </Box>

            {/* Director Email Field */}
            <Box mb={3}>
              <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                Email
              </Text>
              <Input
                type="email"
                border="1px solid #e2e8f0"
                borderRadius="md"
                fontSize={"sm"}
                fontWeight={500}
                bg={"#fff"}
                placeholder="Enter email"
                value={directorForm.emailAddress}
                onChange={(e) =>
                  handleFieldChange(index, "emailAddress", e.target.value)
                }
              />
              {directorFormErrors[index]?.emailAddress && (
                <Text color="red.500" fontSize="xs">
                  {directorFormErrors[index].emailAddress}
                </Text>
              )}
            </Box>

            {/* Director Phone Number */}
            <Box mb={3}>
              <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                Phone Number
              </Text>
              <PhoneInput
                country={"in"}
                value={directorForm.mobileNumber}
                onChange={(value, country) =>
                  handleFieldChange(index, "mobileNumber", value, country)
                }
                inputStyle={{
                  width: "100%",
                  borderRadius: "md",
                  paddingLeft: "6",
                  border: "1px solid #e2e8f0",
                  height: "40px",
                }}
                buttonStyle={{
                  border: "none",
                  borderRadius: "8px 0 0 8px",
                  backgroundColor: "transparent",
                }}
              />
              {directorFormErrors[index]?.mobileNumber && (
                <Text color="red.500" fontSize="xs">
                  {directorFormErrors[index].mobileNumber}
                </Text>
              )}
            </Box>

            {/* Upload Pan */}
            <Box mb={3}>
              <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                Upload Pan
              </Text>
              <Box
                my={2}
                position="relative"
                
              >
               {directorForm.pancard_file_path_name?
               <Box position={'relative'} width="100%" mt={4}>
              <Image onClick={()=> {
                setPrevLink(`${import.meta.env.VITE_IMAGE_URL}${directorForm.pancard_file_path_name}`) 
                onOpen()}} 
                cursor={'pointer'} src={`${import.meta.env.VITE_IMAGE_URL}${directorForm.pancard_file_path_name}`} alt="File Preview"
                h={32}
                objectFit={'cover'}
                boxShadow={"md"}
                borderRadius={"md"} w="100%"
                animation={`${fadeIn} 0.5s ease-in-out`} />
              <Icon
                transition={"all 0.5s"} cursor={'pointer'} 
                // onClick={handleRemove}  
                onClick={() =>
                    document.getElementById(`pan-file-input-${index}`).click()
                  }
                color={"red.500"} boxSize={8}
                rounded={'md'} p={2} position={'absolute'} top={1} right={1}
                _hover={{
                  bg: "#fff"
                }} as={DeleteIcon}
              />
            </Box>: <VStack
                  border={"1px dashed #D0D5DD"}
                  boxShadow={"md"}
                  borderRadius={"md"}
                  bg={"#faf8fd"}
                  p={4}
                  h={"28"}
                  justifyContent={"center"}
                  cursor="pointer"
                  onClick={() =>
                    document.getElementById(`pan-file-input-${index}`).click()
                  }
                >
                  <SlCloudUpload color={"#191D23"} size={30} />
                  <Text
                    color={"#191D23"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    mt={"2"}
                    mb={0}
                  >
                    {directorForm.pancard_file_path_name ||
                      "Drag and drop files here or Choose file"}
                  </Text>
                </VStack>}
                <input
                  type="file"
                  id={`pan-file-input-${index}`}
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileUpload(index, "pancard_file_path_name", e)
                  }
                />
              </Box>
              {directorFormErrors[index]?.pancard_file_path_name && (
                <Text color="red.500" fontSize="xs">
                  {directorFormErrors[index].pancard_file_path_name}
                </Text>
              )}
            </Box>

            {/* Upload Aadhar */}
            <Box mb={3}>
              <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                Upload Aadhar
              </Text>
              <Box
                my={2}
                position="relative"
                
              >
                {directorForm.aadhar_file_path_name?
                <Box position={'relative'} width="100%" mt={4}>
                <Image onClick={()=> {
                  setPrevLink(`${import.meta.env.VITE_IMAGE_URL}${directorForm.aadhar_file_path_name}`) 
                  onOpen()}} 
                  cursor={'pointer'} src={`${import.meta.env.VITE_IMAGE_URL}${directorForm.aadhar_file_path_name}`} alt="File Preview"
                  h={32}
                  objectFit={'cover'}
                  boxShadow={"md"}
                  borderRadius={"md"} w="100%"
                  animation={`${fadeIn} 0.5s ease-in-out`} />
                <Icon
                  transition={"all 0.5s"} cursor={'pointer'} 
                  // onClick={handleRemove}  
                  onClick={() =>
                      document.getElementById(`pan-file-input-${index}`).click()
                    }
                  color={"red.500"} boxSize={8}
                  rounded={'md'} p={2} position={'absolute'} top={1} right={1}
                  _hover={{
                    bg: "#fff"
                  }} as={DeleteIcon}
                />
              </Box>: <VStack
                  border={"1px dashed #D0D5DD"}
                  boxShadow={"md"}
                  borderRadius={"md"}
                  bg={"#faf8fd"}
                  p={4}
                  h={"28"}
                  justifyContent={"center"}
                  cursor="pointer"
                  onClick={() =>
                    document.getElementById(`aadhar-file-input-${index}`).click()
                  }
                >
                  <SlCloudUpload color={"#191D23"} size={30} />
                  <Text
                    color={"#191D23"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    mt={"2"}
                    mb={0}
                  >
                    {directorForm.aadhar_file_path_name ||
                      "Drag and drop files here or Choose file"}
                  </Text>
                </VStack>}
                <input
                  type="file"
                  id={`aadhar-file-input-${index}`}
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileUpload(index, "aadhar_file_path_name", e)
                  }
                />
              </Box>
              {directorFormErrors[index]?.aadhar_file_path_name && (
                <Text color="red.500" fontSize="xs">
                  {directorFormErrors[index].aadhar_file_path_name}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      ))}

      <Box>
        <Text
          color={"#6311CB"}
          fontWeight={600}
          fontSize={"sm"}
          mt={4}
          cursor="pointer"
          onClick={() => handleAddDirector()}
        >
          + Add director {directorForms.length + 1}
        </Text>
      </Box>

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
              onClick={handleSubmit}
            >
              {activeStep === steps.length - 1 ? "Next step" : "Next step"}
            </Button>
          </HStack>

      <ImageViewer src={prevLink} isOpen={isOpen} onClose={onClose} />
         {/* Display the loading spinner */}
         {isLoading && (
        <Box border={'1px solid #6310CB'} px={4} py={2} rounded={'md'} shadow={'md'} as="span" bg={'#fff'}  position={'fixed'} top={69} left={'40%'} display="flex" justifyContent="center" alignItems="center" >
          <Text as={'span'} fontWeight={600} fontSize={'sm'}>Uploading please wait...</Text>
        </Box>
      )}
    </Box>
  );
};

export default OnboardingDirectorDetails;
