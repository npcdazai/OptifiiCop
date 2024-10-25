import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Grid,
  GridItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import SuccesIcon from "../../../assets/Modaltick.png";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";
const formsInfos = [
  { label: "Address line 1", name: "address1" },
  { label: "Address line 2", name: "address2" },
  { label: "Pincode", name: "pincode" },
  { label: "City", name: "city" },
  { label: "Single Point Activation Number", name: "span" },
];

const SingleAddress = () => {
  const { useForm } = useContext(GlobalStateContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onClose } = useContext(GlobalStateContext);

  const onSubmit = (data) => {
    console.log(data);
    onOpen();
  };

  return (
    <Box>
      <Text color="#5E5E5E" fontWeight={500} fontSize="small" mb={4}>
        Fill address details
      </Text>

      <FormControl as="form">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {formsInfos.map((val) => (
            <GridItem key={val.label}>
              <FormLabel fontSize="xs" color="#344054">
                {val.label}
              </FormLabel>

              {val.label === "City" ? (
                <Select
                  placeholder="Select city"
                  {...register(val.name, { required: "City is required" })}
                >
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="houston">Houston</option>
                </Select>
              ) : (
                <Input
                  type="text"
                  {...register(val.name, {
                    required: `${val.label} is required`,
                  })}
                />
              )}

              {errors[val.name] && (
                <Text fontSize="xs" color="red.500">
                  {errors[val.name]?.message}
                </Text>
              )}
            </GridItem>
          ))}
        </Grid>

        <PrimaryButton
          type="submit"
          title={"Submit"}
          onClick={handleSubmit(onSubmit)}
        />
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image src={SuccesIcon} w={"48px"} />
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Text color="#A0A0A0" fontWeight={400} fontSize="small">
                Order Id:
              </Text>
              <Text color="#3725EA" fontWeight={400} fontSize="small">
                #451245
              </Text>
            </HStack>
            <Text color="#101828" fontSize="medium" fontWeight={600}>
              Your employee list has been submitted
            </Text>
            <Text color="#A0A0A0" fontWeight={400} fontSize="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              consectetur adipiscing elit.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"#344054"}
              bgColor="#ffff"
              fontSize="small"
              fontWeight={600}
            >
              Submit new application
            </Button>
            <Button
              bgColor="#6311CB"
              color="#fff"
              _hover={{ bgColor: "#6311CB" }}
              fontSize="small"
              onClick={onClose}
            >
              Check status
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SingleAddress;
