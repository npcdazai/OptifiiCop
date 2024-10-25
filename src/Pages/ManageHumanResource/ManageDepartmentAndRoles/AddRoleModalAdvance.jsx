import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as yup from "yup";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
import { IoSettingsOutline } from "react-icons/io5";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

// Validation schema using Yup
const cashDetails = yup.object().shape({
  role: yup.string().required("Role is required"),
  department_xid: yup.number().required("Artifact name is required"),
});

const AddRoleModalAdvance = ({ isOpen, onClose }) => {
  // ======================[ Cotext Api ]
  const { roleDepartments } = useContext(GlobalStateContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cashDetails),
  });

  // Define the onSubmit function
  const onSubmit = (data) => {
    console.log(data);
    // You can add any further logic you need after form submission
    reset(); // Reset the form after submission
    onClose(); // Close the modal after submission
  };

  const data = [
    {
      Title: "Manage Human Resource",
    },
    {
      action: "Dashboard",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Employees",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Approvers",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Subadmins",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      Title: "Expense Management",
    },
    {
      action: "Dashboard",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Card program",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Wallet program",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Reimbursement Request",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "Expense Request",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
      action: "EVM Card Request",
      all: <Checkbox colorScheme="purple" />,
      view: <Checkbox colorScheme="purple" />,
      add: <Checkbox colorScheme="purple" />,
      edit: <Checkbox colorScheme="purple" />,
      delete: <Checkbox colorScheme="purple" />,
    },
    {
        Title: "Gifting Management",
      },
      {
        action: "Dashboard",
        all: <Checkbox colorScheme="purple" />,
        view: <Checkbox colorScheme="purple" />,
        add: <Checkbox colorScheme="purple" />,
        edit: <Checkbox colorScheme="purple" />,
        delete: <Checkbox colorScheme="purple" />,
      },
      {
        action: "Employees",
        all: <Checkbox colorScheme="purple" />,
        view: <Checkbox colorScheme="purple" />,
        add: <Checkbox colorScheme="purple" />,
        edit: <Checkbox colorScheme="purple" />,
        delete: <Checkbox colorScheme="purple" />,
      },
      {
        Title: "Manage Human Resource",
      },
      {
        action: "Dashboard",
        all: <Checkbox colorScheme="purple" />,
        view: <Checkbox colorScheme="purple" />,
        add: <Checkbox colorScheme="purple" />,
        edit: <Checkbox colorScheme="purple" />,
        delete: <Checkbox colorScheme="purple" />,
      },
      {
        action: "Employees",
        all: <Checkbox colorScheme="purple" />,
        view: <Checkbox colorScheme="purple" />,
        add: <Checkbox colorScheme="purple" />,
        edit: <Checkbox colorScheme="purple" />,
        delete: <Checkbox colorScheme="purple" />,
      },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
      <ModalOverlay />
      <ModalContent height={"550px"} overflow={"scroll"}>
        <ModalHeader fontSize={"sm"}>Add Role Advance</ModalHeader>
        <ModalCloseButton />
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Stack spacing={4}>
              {/* FormControl for role input */}
              <FormControl isInvalid={errors.role} isRequired>
                <FormLabel fontSize={"sm"} mb={0}>
                  Role
                </FormLabel>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Input
                      rounded={"md"}
                      {...field}
                      fontSize={"sm"}
                      type="text"
                      size={"sm"}
                      placeholder="Enter role"
                    />
                  )}
                />
                <FormErrorMessage fontSize={"xs"} fontWeight={500}>
                  {errors.role?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.department} isRequired>
                <FormLabel fontSize={"sm"} mb={0}>
                  Department
                </FormLabel>
                <Controller
                  name="department"
                  control={control}
                  render={({ field }) => (
                    <Select
                      rounded={"md"}
                      {...field}
                      placeholder="Select department"
                      fontSize={"sm"}
                      size={"sm"}
                    >
                      {roleDepartments?.roleDepartment?.map(
                        ({ id, department }) => (
                          <option key={id} value={id}>
                            {department}
                          </option>
                        )
                      )}
                    </Select>
                  )}
                />
                <FormErrorMessage fontSize={"xs"} fontWeight={500}>
                  {errors.department_xid?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.gradeLevel} isRequired>
                <FormLabel fontSize={"sm"} mb={0}>
                  Grade/level
                </FormLabel>
                <Controller
                  name="gradeLevel"
                  control={control}
                  render={({ field }) => (
                    <Select
                      rounded={"md"}
                      {...field}
                      placeholder="Select grade/level"
                      fontSize={"sm"}
                      size={"sm"}
                    >
                      {roleDepartments?.roleDepartment?.map(
                        ({ id, gradeLevel }) => (
                          <option key={id} value={id}>
                            {gradeLevel}
                          </option>
                        )
                      )}
                    </Select>
                  )}
                />
                <FormErrorMessage fontSize={"xs"} fontWeight={500}>
                  {errors.department_xid?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired>
                <Text mt={2} mb={2} fontSize={"sm"}>
                  Will this role be an Wallet Approver as well? If yes select
                  category.
                </Text>
                <CheckboxGroup colorScheme="purple">
                  <Checkbox value="naruto">
                    <Text as={"span"} fontSize={"xs"}>
                      Expense wallet approver
                    </Text>
                  </Checkbox>
                  <br />
                  <Checkbox value="sasuke">
                    <Text as={"span"} fontSize={"xs"}>
                      Benefit wallet approver
                    </Text>
                  </Checkbox>
                  <br />
                  <Checkbox value="kakashi">
                    <Text as={"span"} fontSize={"xs"}>
                      Withdraw funds approver
                    </Text>
                  </Checkbox>
                </CheckboxGroup>
              </FormControl>

              <Box margin="auto" mt={5} overflow={"scroll"}>
                <Table w={"100%"}>
                  <Thead>
                    <Tr>
                      <Th textTransform={"inherit"} py={2}>Actions</Th>
                      <Th textTransform={"inherit"} py={2}>All</Th>
                      <Th textTransform={"inherit"} py={2}>View</Th>
                      <Th textTransform={"inherit"} py={2}>Add</Th>
                      <Th textTransform={"inherit"} py={2}>Edit</Th>
                      <Th textTransform={"inherit"} py={2}>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((row, index) => (
                      <>
                        {row.Title && (
                          <Tr backgroundColor={"#3725EA0F"} key={`title-${index}`}>
                            <Td colSpan={6} py={1}>
                              <Text color={"#3725EA"}  fontSize={"sm"} mb={0}>{row.Title}</Text>
                            </Td>
                          </Tr>
                        )}
                        {row.action && (
                          <Tr key={`action-${index}`}>
                            <Td fontSize={"xs"} py={2}>{row.action}</Td>
                            <Td fontSize={"xs"} py={2}>{row.all}</Td>
                            <Td fontSize={"xs"} py={2}>{row.view}</Td>
                            <Td fontSize={"xs"} py={2}>{row.add}</Td>
                            <Td fontSize={"xs"} py={2}>{row.edit}</Td>
                            <Td fontSize={"xs"} py={2}>{row.delete}</Td>
                          </Tr>
                        )}
                      </>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            {/* Cancel Button */}
            <Button
              colorScheme="gray"
              mr={3}
              onClick={onClose}
              fontSize={"sm"}
              size={"sm"}
              w={"50%"}
            >
              Save as draft
            </Button>
            {/* Submit Button */}
            <Button
              colorScheme="customPurple"
              size={"sm"}
              fontSize={"sm"}
              fontWeight={500}
              w={"50%"}
              type="submit"
            >
              Save & proceed
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default AddRoleModalAdvance;
