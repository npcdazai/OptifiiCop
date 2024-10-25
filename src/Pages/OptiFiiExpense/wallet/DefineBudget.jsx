import {
    Box,
    FormLabel,
    VStack,
    Input,
    InputGroup,
    InputLeftElement,
    Radio,
    RadioGroup,
    Text,
    HStack,
    Select,
    Checkbox,
    Button,
    StackDivider,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { MdCurrencyRupee } from "react-icons/md";
  import { CiCircleInfo } from "react-icons/ci";
  import { CiSettings } from "react-icons/ci";
  import { IoMdArrowDropup } from "react-icons/io";
  import RupeeSlider from "../../../Components/RupeeSlider/RupeeSlider";
  
  const DefineBudget = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("Finance");
    const [budget, setBudget] = useState("");
  
    const employees = [
      { name: "Sr. accountant", amount: "₹ 25,000", percentage: "50%" },
      { name: "Reethik thota", amount: "₹ 25,000", percentage: "50%" },
    ];
  
    const departments = ["Sales", "Design", "Development", "IT", "Management"];
  
    return (
      <Box
        display="flex"
        w="100%"
        flexDirection="column"
        alignItems="flex-start"
        gap={4}
      >
        <Text fontSize="sm" fontWeight="600" color={"#383838"}>
          Define budget for department
        </Text>
  
        <Text fontSize="sm" fontWeight="600" color={"#3F4754"}>
          Departments
        </Text>
  
        <VStack bgColor="#6311CB08" alignItems="flex-start" spacing={4} w="100%">
          {/* Department Radio Selection */}
          <RadioGroup value={selectedDepartment} onChange={setSelectedDepartment}>
            <VStack alignItems="flex-start">
              <Radio value="Finance" colorScheme="purple">
                Finance
              </Radio>
            </VStack>
          </RadioGroup>
  
          <Box borderBottom="0.5px solid #3725EA3D" w="100%" />
  
          <HStack justifyContent="space-between" w="100%" alignItems="center">
            {/* Budget Input */}
            <VStack alignItems="flex-start" w="50%">
              <FormLabel
                color="#3F4754"
                fontSize="small"
                fontWeight={600}
                htmlFor="budget-input"
              >
                Budget for this department
              </FormLabel>
              <InputGroup w="100%">
                <InputLeftElement pointerEvents="none">
                  <MdCurrencyRupee color="#636F83" size={16} />
                </InputLeftElement>
                <Input
                  id="budget-input"
                  type="tel"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </InputGroup>
            </VStack>
  
            {/* Frequency Selection */}
            <VStack alignItems="flex-start" w="50%">
              <FormLabel
                color="#3F4754"
                fontSize="small"
                fontWeight={600}
                htmlFor="frequency-select"
              >
                Frequency
              </FormLabel>
              <Select id="frequency-select" placeholder="Select frequency">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </VStack>
          </HStack>
  
          <VStack alignItems="flex-start">
            <HStack alignItems="center">
              <Checkbox colorScheme="purple">
                <Text as="span" fontSize="small">
                  Checkbox
                </Text>
              </Checkbox>
              <CiCircleInfo fontSize="medium" color="purple" />
            </HStack>
            <HStack>
              <CiSettings fontSize="medium" color="purple" />
              <Text as="span" fontSize="small">
                Advance Setup
              </Text>
              <Text fontSize="small" as="span">
                {"( Set budget per employee ) "}
              </Text>
              <IoMdArrowDropup fontSize="small" />
            </HStack>
          </VStack>
  
          {/* Render employee list with map */}
          <VStack bgColor="#FFFFFF" p={2} w={"100%"} alignItems="flex-start">
            {employees.map((employee, index) => (
              <HStack key={index} alignItems="center">
                <Checkbox colorScheme="purple">
                  <Text as="span" fontSize="small">
                    {employee.name}
                  </Text>
                </Checkbox>
                <HStack
                  bgColor="#3725EA14"
                  borderRadius="5px"
                  h="31px"
                  pt={4}
                  px={2}
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Text
                    color="#3725EA"
                    fontSize="small"
                    fontWeight={500}
                    aria-label="Amount"
                  >
                    {employee.amount}
                  </Text>
                  <Text
                    color="#747474"
                    fontSize="small"
                    fontWeight={500}
                    aria-label="Percentage"
                  >
                    {employee.percentage}
                  </Text>
                </HStack>
              </HStack>
            ))}
          </VStack>
  
          <HStack justifyContent="space-between" w="100%">
            <VStack spacing={4} align="start" mb={6}>
              <Checkbox>Manager</Checkbox>
              <Checkbox>Manager</Checkbox>
            </VStack>
            <Button colorScheme="purple" size="md" w="81px">
              Save
            </Button>
          </HStack>
  
          {/* Render department checkboxes with map */}
          <VStack
            w="100%"
            spacing={4}
            align="start"
            mt={6}
            divider={<StackDivider borderColor="gray.200" />}
          >
            {departments.map((department, index) => (
              <Checkbox key={index}>{department}</Checkbox>
            ))}
          </VStack>
        </VStack>
      </Box>
    );
  };
  
  export default DefineBudget;
  