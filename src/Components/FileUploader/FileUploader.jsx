import React, { Children, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, FormControl, FormErrorMessage, FormLabel, HStack, Icon, Image, Text, VStack, keyframes, useDisclosure } from '@chakra-ui/react';
import * as Yup from 'yup';
import { SlCloudUpload } from 'react-icons/sl';
import { DeleteIcon } from '@chakra-ui/icons';
import ImageViewer from '../ImageViewer'; // Make sure you have this component or replace it with a suitable one

// Define max file size in bytes (2MB = 2 * 1024 * 1024 bytes)
const MAX_FILE_SIZE = 2 * 1024 * 1024;

// Define a keyframes animation for fade-in
export const  fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FileUploader = ({
  label = "Upload File",
  maxFileSize = MAX_FILE_SIZE,
  allowedFormats = ['image/jpeg'],
  onFileUpload,  // Callback when a file is successfully uploaded
  onFileRemove,  // Callback when a file is removed
  defaultPreview = null, // Default preview image if any
  isRequired = true, // To make the input required or not
  children,
}) => {
  const [filePreview, setFilePreview] = useState(defaultPreview);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .test('fileSize', `File is too large. Max size is ${maxFileSize / (1024 * 1024)}MB.`, (value) => {
        return value && value.length > 0 && value[0].size <= maxFileSize;
      })
      .test('fileType', `Unsupported file format. Allowed formats: ${allowedFormats.join(', ')}.`, (value) => {
        return value && value.length > 0 && allowedFormats.includes(value[0].type);
      }),
  });

  const { register, formState: { errors }, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
    //   const fileURL = URL.createObjectURL(file);
    //   setFilePreview(fileURL);
      setValue('file', event.target.files);
      onFileUpload && onFileUpload(file, setFilePreview);  // Call onFileUpload callback
    }
  };

  const handleRemove = () => {
    setFilePreview(null);
    setValue('file', null);
    onFileRemove && onFileRemove();  // Call onFileRemove callback
  };

  const handleClick = () => {
    const fileInput = document.getElementById(`file-${label}`);
    if (fileInput) {
      fileInput.click();  // Trigger the file input click via ID
    }
  };

  return (
    <Box as='form' onSubmit={handleSubmit} width="100%" mx="auto">
      <FormControl width="100%" isRequired={isRequired} isInvalid={errors.file}>
          <FormLabel color={"#344054"} fontSize={"xs"} fontWeight={500} mb={1}>
            {label}
          </FormLabel>
        <Box width="100%" my={2} position="relative">
          {!filePreview && (
            <VStack
              width="100%"
              border={"1px dashed #D0D5DD"}
              boxShadow={"md"}
              borderRadius={"md"}
              bg={"#faf8fd"}
              p={4}
              h={"28"}
              justifyContent={"center"}
              cursor="pointer"
              onClick={handleClick}  // Trigger file input on click
            >
              <SlCloudUpload color={"#191D23"} size={30} />
              <Text
                color={"#191D23"}
                fontWeight={"500"}
                fontSize={"sm"}
                mt={"2"}
                mb={0}
              >
                Drag and drop files here or{" "}
                <Text as="span" textDecoration="underline">
                  Choose file
                </Text>
              </Text>
            </VStack>
          )}

          {filePreview && (
            <Box position={'relative'} width="100%" mt={4}>
              <Image cursor={'pointer'} onClick={onOpen} src={`${import.meta.env.VITE_IMAGE_URL}${filePreview}`} alt="File Preview"
                h={32}
                objectFit={'cover'}
                boxShadow={"md"}
                borderRadius={"md"} w="100%"
                animation={`${fadeIn} 0.5s ease-in-out`} />
              <Icon
                transition={"all 0.5s"} cursor={'pointer'} onClick={handleRemove} color={"red.500"} boxSize={8}
                rounded={'md'} p={2} position={'absolute'} top={1} right={1}
                _hover={{
                  bg: "#fff"
                }} as={DeleteIcon}
              />
            </Box>
          )}

          <input
            id={`file-${label}`} // Unique ID for each instance
            // required={isRequired}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}  // Ensure it's visually hidden
            {...register('file', { required: isRequired ? 'A file is required' : false })}
            onChange={handleFileChange}
          />
        </Box>
        <HStack justifyContent={"space-between"}>
            <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
              Supported formats- jpg, png, svg
            </Text>
            <Text color={"#C3C3C3"} fontSize={"xs"} fontWeight={400} mb={1}>
              Maximum size - 20MB
            </Text>
          </HStack>

          {/* <FormErrorMessage>{errors.file && errors.file.message}</FormErrorMessage> */}

        {children}
      </FormControl>

      <ImageViewer src={`${import.meta.env.VITE_IMAGE_URL}${filePreview}`} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default FileUploader;
