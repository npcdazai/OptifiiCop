import { Box, Button, Divider, FormHelperText, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import FormField from "./FormField";
import { OPACITY_ON_LOAD } from "../Layout/animations";
import { ArrowBackIcon } from "@chakra-ui/icons";

const FormInputMain = ({
  register,
  groupedFields,
  control,
  errors,
  onSubmit,
  children,
  onCancle,
  submitTitle,
  p,
  w,
  btnLoading,
  btnhidden,

}) => {
  return (
    <Box mt={0} as="form" onSubmit={onSubmit}>
      {Object.entries(groupedFields).map(([section, fields], index) => (
        <Box key={section} mt={2}>
          <Heading as="h6" size="xs" mx={5} my={0} fontWeight={"500"}>
            {/* <ArrowBackIcon fontSize={'lg'} />  */}
            {section}
          </Heading>
            <Box
              as="span"
              width={"100%"}
              p={p ? p : 5}
              display={"flex"}
              flexWrap={"wrap"}
              gap={4}

              
            >
              {fields.map(
                (
                  {
                    label,
                    name,
                    id,
                    arabic,
                    type,
                    isRequired,
                    selectedImageData,
                    setSelectedImageData,
                    imageData,
                    handleImageChange,
                    removeImage,
                    placeHolder,
                    options,
                    helperText,
                    multiple,
                    width,
                    value,
                    handleInputChange,
                    align,
                    maxLength,
                    dateValue
                  },
                  key
                ) => (
                  <FormField
                    id={id}
                    key={key}
                    label={label}
                    type={type}
                    name={name}
                    helperText={helperText ? helperText : undefined}
                    options={options ? options : undefined}
                    placeHolder={placeHolder ? placeHolder : undefined}
                    control={control}
                    errors={errors}
                    multiple={multiple}
                    isRequired={isRequired}
                    arabic={arabic}
                    selectedImageData={selectedImageData}
                    setSelectedImageData={setSelectedImageData}
                    imageData={imageData}
                    handleImageChange={handleImageChange}
                    removeImage={removeImage}
                    width={width}
                    value={value}
                    handleInputChange={handleInputChange}
                    align={align}
                    maxLength={maxLength}
                    dateValue={dateValue}
                  />
                )
              )}
            </Box>
            
          {index < Object.entries(groupedFields).length - 1 && <Divider />}
        </Box>
      ))}

      {children}

      <Box display={"flex"} justifyContent={"end"} mt={2}>
        <Box display={"flex"} justifyContent={"end"} p={2} w={"49%"} gap={4}>
          {onCancle && (
            <Button
              size={"sm"}
              width={w ? w : "44.5%"}
              rounded={"sm"}
              type="submit"
              colorScheme="gray"
              onClick={onCancle}
            >
              Cancel
            </Button>
          )}
          {btnhidden ? (
            ""
          ) : (
            <Button
              isLoading={btnLoading}
              size={"sm"}
              width={w ? w : "44.5%"}
              rounded={"sm"}
              spinner={<Spinner size="sm" color="white" />}
              type="submit"
              colorScheme={"forestGreen"}
            >
              {submitTitle ? submitTitle : "Submit"}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FormInputMain;
