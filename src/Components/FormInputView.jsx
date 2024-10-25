import {
  Box,
  Button,
  Divider,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const FormInputView = ({
  groupedFields,
  name,
  groupedFieldsTwo,
  errors,
  onSubmit,
  children,
}) => {
  return (
    <form>
      {Object?.entries(groupedFields, groupedFieldsTwo).map(
        ([section, fields], index) => (
          <Box key={index}>
            <Heading as="h6" size="xs" mt={index === 0 ? 3 : 4}>
              {section}
            </Heading>
            {/* <Box display={"flex"} gap={0}> */}
            <Box key={index} width={"100%"} display={"flex"} flexWrap={"wrap"} gap={4}>
              {fields.map(
                ({ value, label, id, width, btn, arabic, type, align }, key) =>
                  type === "table" ? (
                    <Table key={id} w={"100%"} variant="simple">
                      <Thead>
                        <Tr>
                          {value?.map((item, index) => (
                            <Th
                              border={"none"}
                              p={2}
                              textTransform={"none"}
                              key={index}
                            >
                              <Box
                                as="span"
                                display={"flex"}
                                alignItems={"center"}
                                gap={2}
                              >
                                <Image
                                  objectFit={"cover"}
                                  opacity={0.9}
                                  rounded={"full"}
                                  w={6}
                                  h={6}
                                  src={
                                    " https://tanami.betadelivery.com/" +
                                    item?.logo
                                  }
                                />
                                {item.country === "United Arab Emirates"
                                  ? "UAE"
                                  : item.country}
                              </Box>
                            </Th>
                          ))}
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          {value?.map((item, index) => (
                            <Td
                              p={2}
                              color={"gray.600"}
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                              className="web-text-small"
                              key={index}
                              border={"none"}
                            >
                              <InputGroup size="sm">
                                <Input
                                  readOnly={true}
                                  isRequired={true}
                                  bg={"#F5F8F6"}
                                  focusBorderColor="forestGreen.300"
                                  // border="1px solid #000"
                                  size={"sm"}
                                  fontSize={"sm"}
                                  rounded={"sm"}
                                  type="number"
                                  value={item.value}
                                  textAlign={"right"}
                                  placeholder={"00.00"}
                                  // color={"#000"}
                                  color={"#1A202C"}
                                  fontWeight={500}
                                  border={"1px solid #e2e8f0"}
                                />
                                <InputRightAddon
                                  fontSize={"xs"}
                                  fontWeight={600}
                                  color={"forestGreen.500"}
                                >
                                  {item?.curr}
                                </InputRightAddon>
                              </InputGroup>
                            </Td>
                          ))}
                        </Tr>
                      </Tbody>
                    </Table>
                  ) : (
                    <Box key={id} w={!width ? "49%" : width}>
                      <FormLabel key={id} color={"gray.500"} fontSize={"xs"}>
                        {label}
                      </FormLabel>
                      <FormLabel
                        border={"1px solid transparent"}
                        bg={"#ccc3"}
                        p={2}
                        pt={1.5}
                        pb={1.5}
                        rounded={"xs"}
                        textAlign={arabic ? "right" : align ? align : "left"}
                        fontSize={"sm"}
                      >
                        {type === "number" ? value : value}
                      </FormLabel>
                    </Box>
                  )
              )}
            </Box>
            {/* </Box> */}
            {index <
              Object.entries(groupedFields, groupedFieldsTwo).length - 1 && (
              <Divider />
            )}
          </Box>
        )
      )}
      {children}
    </form>
  );
};

export default FormInputView;
