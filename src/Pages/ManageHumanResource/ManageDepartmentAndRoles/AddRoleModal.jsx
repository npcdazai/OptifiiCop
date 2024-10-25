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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as yup from "yup";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
import { IoSettingsOutline } from "react-icons/io5";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import AddRoleModalAdvance from "./AddRoleModalAdvance";

// Validation schema using Yup
const cashDetails = yup.object().shape({
  role: yup.string().required("Role is required"),
  department_xid: yup.number().required("Artifact name is required"),
});

const AddRoleModal = ({ isOpen, onClose }) => {
  // ======================[ Cotext Api ]
  const { roleDepartments } = useContext(GlobalStateContext);
//   const { isOpenAdvance, onOpenAdvance, onCloseAdvance } = useDisclosure();
  const {
    isOpen: isOpenAdvance,
    onOpen: onOpenAdvance,
    onClose: onCloseAdvance,
  } = useDisclosure();

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent height={"550px"} overflow={"scroll"}>
        <ModalHeader fontSize={"sm"}>Add Role</ModalHeader>
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
              <Box backgroundColor={"#6311CB14"} p={4} rounded={"md"}>
                <Text
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"sm"}
                  me={2}
                  color={"#000"}
                  mb={2}
                >
                  <Text mb={0} me={2} fontSize={"md"}>
                    <IoSettingsOutline color="#6311CB" />
                  </Text>{" "}
                  Advance Setting
                </Text>
                <Text color={"#878787"} fontSize={"xs"}>
                  Enable this to provide Corporate dashboard access to this
                  role.
                </Text>
                <PrimaryButton onClick={onOpenAdvance} title={"Give Access"} />
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
      <AddRoleModalAdvance isOpen={isOpenAdvance} onClose={onCloseAdvance} />
    </Modal>
  );
};

export default AddRoleModal;
