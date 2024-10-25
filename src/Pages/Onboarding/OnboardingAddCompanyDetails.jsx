import React, { useState } from 'react';
import { Box, Input, Text, VStack, HStack, FormLabel, IconButton, Button, useToast } from '@chakra-ui/react';
import { SlCloudUpload } from 'react-icons/sl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { OPACITY_ON_LOAD } from '../../Layout/animations';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useSentFileMutation } from '../../Services/token.serivce';
import FileUploader from '../../Components/FileUploader/FileUploader';
import ToastBox from '../../Components/ToastBox';

// Yup validation schema
const schema = yup.object().shape({
  cin_number: yup
    .string()
    .required('CIN is required')
    .matches(/^[A-Za-z0-9]{21}$/, 'CIN must be exactly 21 characters long'),
  pancard_number: yup
    .string()
    .required('Company PAN is required')
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format'),
  gst_number: yup
    .string()
    .required('GST number is required')
    .matches(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/, 'Invalid GST number format'),
  gst_file_path_name: yup.mixed().required('GST certificate is required'),
  pancard_file_path_name: yup.mixed().required('PAN card is required'),
});

const OnboardingAddCompanyDetails = ({
  corpData,
  setCorpData,
  setActiveStep,
  activeStep,
  steps,
  handleNext,
}) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const [fileName, setFileName] = useState("");
  const [sendFile] = useSentFileMutation()
  const [isLoading, setIsLoading] = useState()
  const toast = useToast()

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setCorpData({ ...corpData, ...data });
    handleNext();
  };



  const handleFileChangeGst = async (e) => {
    console.log("hit");
    const files = e.target.files;
    console.log(files);
    if (files && files.length > 0) {
      // Assuming only one file is allowed
      setFileName(files.name);
      console.log(files);

      const formData = new FormData();
      formData.append("document", files[0]); // Append file


      const code = localStorage?.getItem("codeCorporate");
      try {
        const res = await sendFile({ data: formData, code }); // Upload file to server

        if (res?.data?.data) {
          console.log(res?.data?.data);
          // Assuming res.data.data contains the file URL or some ID
          setValue("gst_file_path_name", res?.data?.data); // Set value with server response
          //   setCorpData({ ...corpData, ...data });
          setIsLoading(false)
        }
      } catch (error) {
        console.error("File upload failed", error);
      }



      // setValue("logo_path_file_name", files); // Update react-hook-form state
    }
  };



  const handleFileChangePan = async (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Assuming only one file is allowed
      setFileName(files.name);
      const formData = new FormData();
      formData.append("document", files[0]); // Append file
      const code = localStorage?.getItem("codeCorporate");
      try {
        const res = await sendFile({ data: formData, code }); // Upload file to server
        if (res?.data?.data) {
          // Assuming res.data.data contains the file URL or some ID
          setValue("pancard_file_path_name", res?.data?.data); // Set value with server response
          //   setCorpData({ ...corpData, ...data });
          setIsLoading(false)
        }
      } catch (error) {
        console.error("File upload failed", error);
      }
    }
  };




  const handleFileUploadGst = async (file, setPreview) => {
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
        setCorpData({ ...corpData, gst_file_path_name: res?.data?.data });
        setValue("gst_file_path_name", res?.data?.data);
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


  const handleFileUploadPan = async (file, setPreview) => {
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
        setCorpData({ ...corpData, pancard_file_path_name: res?.data?.data });
        setValue("pancard_file_path_name", res?.data?.data);
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
          render: () => <ToastBox status={'error'} message={"Image is too large"} />,
        });

      }
      setIsLoading(false)
    } catch (error) {
      console.error("File upload failed", error);

    }
  };






  return (
    <Box  {...OPACITY_ON_LOAD}>
      <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} mb={1}>
        Add company details
      </Text>
      <Text color={'#49475A'} fontWeight={500} fontSize={'xs'}>
        Lorem ipsum dolor sit amet, adipiscing elit.
      </Text>

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        {/* CIN Field */}
        <Box mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            CIN
          </FormLabel>
          <Input
            type='text'
            border="1px solid #e2e8f0"
            borderRadius="md"
            fontSize={"sm"}
            fontWeight={500}
            {...register('cin_number')}
          />
          {errors.cin_number && <Text color="red.500" fontWeight={500} fontSize="xs">{errors.cin_number.message}</Text>}
        </Box>

        {/* Company PAN Field */}
        <Box mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Company PAN
          </FormLabel>
          <Input
            type='text'
            border="1px solid #e2e8f0"
            borderRadius="md"
            fontSize={"sm"}
            fontWeight={500}
            {...register('pancard_number')}
          />
          {errors.pancard_number && <Text color="red.500" fontWeight={500} fontSize="xs">{errors.pancard_number.message}</Text>}
        </Box>

        {/* Company GST Number */}
        <Box mb={3}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            Company GST number
          </FormLabel>
          <Input
            type='text'
            border="1px solid #e2e8f0"
            borderRadius="md"
            fontSize={"sm"}
            fontWeight={500}
            {...register('gst_number')}
          />
          {errors.gst_number && <Text color="red.500" fontWeight={500} fontSize="xs">{errors.gst_number.message}</Text>}
        </Box>

        {/* Upload GST Certificate */}
        {/* <Box mb={3}>
                    <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                        Upload GST Certificate
                    </Text>
                    <Box my={2}
                        position="relative"
                        onClick={() => document.getElementById('gst-file-input').click()}
                    >
                        <VStack
                            border={"1px dashed #D0D5DD"}
                            boxShadow={"md"}
                            borderRadius={"md"}
                            bg={"#faf8fd"}
                            p={4}
                            h={"28"}
                            justifyContent={"center"}
                            cursor="pointer"
                        >
                            <SlCloudUpload color={"#191D23"} size={30} />
                            <Text
                                color={"#191D23"}
                                fontWeight={"500"}
                                fontSize={"sm"}
                                mt={'2'}
                                mb={0}
                            >
                                Drag and drop files  or{' '}
                                <Text as="span" textDecoration="underline">
                                    Choose file
                                </Text>
                            </Text>
                        </VStack>
                        <input
                            type="file"
                            id="gst-file-input"
                            style={{ display: 'none' }}
                            
      onChange={(e) => {
        handleFileChangeGst(e); // Handle file input
      }}
                        />
                    </Box>
                    {errors.gst_file_path_name && <Text color="red.500" fontSize="xs">{errors.gst_file_path_name.message}</Text>}

                    <HStack justifyContent={"space-between"}>
                        <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
                            Supported formats- jpg, png, svg
                        </Text>
                        <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
                            Maximum size - 20MB
                        </Text>
                    </HStack>
                </Box> */}




        <FileUploader
          label="Upload GST Certificate"
          maxFileSize={3 * 1024 * 1024}  // Max 3MB size
          onFileUpload={handleFileUploadGst}

        > {errors.gst_file_path_name?.message && (
          <Text color="red" fontWeight={500} fontSize="xs">
            {errors.gst_file_path_name?.message}
          </Text>
        )}

        </FileUploader>



        <FileUploader
          label="Upload PAN card"
          maxFileSize={3 * 1024 * 1024}  // Max 3MB size
          onFileUpload={handleFileUploadPan}

        > {errors.pancard_file_path_name?.message && (
          <Text color="red" fontWeight={500} fontSize="xs">
            {errors.pancard_file_path_name?.message}
          </Text>
        )}

        </FileUploader>


        {/* Upload PAN Card */}
        {/* <Box mb={3}>
                    <Text color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
                        Upload PAN Card
                    </Text>
                    <Box my={2}
                        position="relative"
                        onClick={() => document.getElementById('pan-file-input').click()}
                    >
                        <VStack
                            border={"1px dashed #D0D5DD"}
                            boxShadow={"md"}
                            borderRadius={"md"}
                            bg={"#faf8fd"}
                            p={4}
                            h={"28"}
                            justifyContent={"center"}
                            cursor="pointer"
                        >
                            <SlCloudUpload color={"#191D23"} size={30} />
                            <Text
                                color={"#191D23"}
                                fontWeight={"500"}
                                fontSize={"sm"}
                                mt={'2'}
                                mb={0}
                            >
                                Drag and drop files here or{' '}
                                <Text as="span" textDecoration="underline">
                                    Choose file
                                </Text>
                            </Text>
                        </VStack>
                        <input
                            type="file"
                            id="pan-file-input"
                            style={{ display: 'none' }}
                                                        
      onChange={(e) => {
        handleFileChangePan(e); // Handle file input
      }}
          
                        />
                    </Box>
                    {errors.panFile && <Text color="red.500" fontSize="xs">{errors.panFile.message}</Text>}

                    <HStack justifyContent={"space-between"}>
                        <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
                            Supported formats- jpg, png, svg
                        </Text>
                        <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
                            Maximum size - 20MB
                        </Text>
                    </HStack>
                </Box> */}

        {/* Submit Button */}
        {/* <Box mt={6}>
                    <Text
                        as="button"
                        bg={'#6311CB'}
                        color={"white"}
                        fontWeight={600}
                        fontSize={'sm'}
                        p={2}
                        borderRadius={"md"}
                        type="submit"
                    >
                        Submit
                    </Text>
                </Box> */}



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

      {/* Display the loading spinner */}
      {isLoading && (
        <Box border={'1px solid #6310CB'} px={4} py={2} rounded={'md'} shadow={'md'} as="span" bg={'#fff'} position={'fixed'} top={69} left={'40%'} display="flex" justifyContent="center" alignItems="center" >
          <Text as={'span'} fontWeight={600} fontSize={'sm'}>Uploading please wait...</Text>
        </Box>
      )}
    </Box>
  );
};

export default OnboardingAddCompanyDetails;
