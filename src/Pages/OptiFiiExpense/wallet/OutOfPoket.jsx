import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Textarea,
  Wrap,
  WrapItem,
  Button,
  useToast,
  Checkbox,
  Stack,
  CheckboxGroup,
  Text,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import dayjs from "dayjs";
import { CiCircleInfo } from "react-icons/ci";

const OutOfPoket = ({ register, formState }) => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [transactionRule, setTransactionRule] = useState("none");
  const [categories, setCategories] = useState(["Food", "Fuel"]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toast = useToast();

  const transactionTags = ["Food", "Fuel"];

  const departments = ["Finance", "HR", "Marketing", "Engineering"];
  const options = [
    {
      label: "An hour from now",
      value: dayjs().add(1, "hour").format("ddd, MMM D, h:mm A"),
    },
    {
      label: "Tomorrow",
      value: dayjs()
        .add(1, "day")
        .set("hour", 21)
        .minute(0)
        .format("ddd, MMM D, h:mm A"),
    },
    {
      label: "Next week",
      value: dayjs()
        .add(7, "day")
        .set("hour", 21)
        .minute(0)
        .format("ddd, MMM D, h:mm A"),
    },
  ];

  const availableCategories = [
    "Entertainment",
    "Groceries",
    "Fuel",
    "Shopping",
    "Food",
    "Utilities",
  ];

  const handleCategoryRemove = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleCategoryAdd = (categoryToAdd) => {
    if (!categories.includes(categoryToAdd)) {
      setCategories([...categories, categoryToAdd]);
    }
  };

  const addCategory = () => {
    if (inputValue && !selectedCategories.includes(inputValue)) {
      setSelectedCategories([...selectedCategories, inputValue]);
      setInputValue("");
    }
  };

  const removeCategory = (categoryToRemove) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleSelect = (time) => {
    if (!selectedTimes.includes(time)) {
      setSelectedTimes([...selectedTimes, time]);
    } else {
      toast({
        title: "Duplicate entry",
        description: "This time has already been selected.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleRemoveTags = (time) => {
    setSelectedTimes(selectedTimes.filter((t) => t !== time));
  };

  const handleSelectChangeTags = (event) => {
    const value = event.target.value;
    if (value && !transactionTags.includes(value)) {
      setSelectedDepartments([...transactionTags, value]);
    }
  };

  const handleRemove = (time) => {
    setSelectedTimes(selectedTimes.filter((t) => t !== time));
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value && !selectedDepartments.includes(value)) {
      setSelectedDepartments([...selectedDepartments, value]);
    }
  };

  const handleRemoveTag = (department) => {
    setSelectedDepartments(selectedDepartments.filter((d) => d !== department));
  };

  return (
    <div>
      <FormControl>
        <Box
          bgColor="#F6F0FF"
          boxShadow="md"
          display="flex"
          flexDirection="column"
          gap={3}
          p={2}
        >
          <Box display="flex" flexDirection="column">
            <FormLabel color="#3F4754" fontWeight={700} fontSize="sm">
              Wallet name
            </FormLabel>
            <Input
              {...register("walletPolicy", { required: "This is required" })}
            />
          </Box>

          <Box display="flex" flexDirection="column">
            <FormLabel color="#3F4754" fontWeight={700} fontSize="sm">
              Description
            </FormLabel>
            <Textarea
              {...register("description", { required: "This is required" })}
            />
          </Box>

          <Box display="flex" flexDirection="column">
            <FormLabel color="#3F4754" fontWeight={700} fontSize="sm">
              Department
            </FormLabel>
            <Select placeholder=" " onChange={handleSelectChange} value="">
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </Select>

            <Wrap mt={4}>
              {selectedDepartments.map((department, index) => (
                <WrapItem key={index}>
                  <Tag
                    size="md"
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="purple"
                  >
                    <TagLabel>{department}</TagLabel>
                    <TagCloseButton
                      onClick={() => handleRemoveTag(department)}
                    />
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Box>
            <FormLabel color="#3F4754" fontWeight={700} fontSize="sm">
              Set reminder
            </FormLabel>
            <Select
              onChange={(e) => handleSelect(e.target.value)}
              placeholder="  "
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.value})
                </option>
              ))}
            </Select>

            {/* Displaying selected times as tags */}
            <Box mt={4}>
              {selectedTimes.map((time, index) => (
                <Tag
                  key={index}
                  size="lg"
                  colorScheme="teal"
                  borderRadius="full"
                  m={1}
                >
                  <TagLabel>{time}</TagLabel>
                  <TagCloseButton onClick={() => handleRemove(time)} />
                </Tag>
              ))}
            </Box>
          </Box>

          <Stack>
            <Text color="#3F4754" fontWeight={700} fontSize="sm">
              Select wallet type
            </Text>
            <CheckboxGroup
              colorScheme="purple"
              defaultValue={["Prepaid", "Reimbursement"]}
            >
              <Stack spacing={[1, 5]} direction="column">
                <Checkbox value="Prepaid">Prepaid</Checkbox>
                <Checkbox value="Reimbursement">Reimbursement</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>

          <Stack>
            <Text color="#3F4754" fontWeight={700} fontSize="sm">
              Select transaction type
            </Text>
            <CheckboxGroup
              colorScheme="purple"
              defaultValue={[
                "Ecommerce",
                "POS",
                "ATM",
                "Contactless",
                "Wallet transfer",
              ]}
            >
              <Stack spacing={[1, 5]} direction="column">
                <Checkbox value="Ecommerce">Ecommerce</Checkbox>
                <Checkbox value="POS">POS</Checkbox>
                <Checkbox value="ATM">ATM</Checkbox>
                <Checkbox value="Contactless">Contactless</Checkbox>
                <Checkbox value="Wallet transfer">Wallet transfer</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Stack>

          {/* <Box
            display="flex"
            gap="4"
            p="4"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
          >

            <Box display="flex" flexDirection="column" height="20px" gap={4}>
              <Menu>
                <MenuButton as={Button} rightIcon={<CiCircleInfo />}>
                  Either of them
                </MenuButton>
                <MenuList>
                  {availableCategories.map((category, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCategoryAdd(category)}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box display="flex" gap="2" mb="2">
                
              {categories.map((category, index) => (
                <Tag
                  key={index}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{category}</TagLabel>
                  <TagCloseButton
                    onClick={() => handleCategoryRemove(category)}
                  />
                </Tag>
              ))}
            </Box>
          </Box> */}

          <Box maxW="400px" mt={4}>
            <Stack spacing={4}>
              {/* Transaction Rule */}
              <Box>
                <Text mb={2}>Transaction rule</Text>
                <Select placeholder="None of them" width="fit-content">
                  {/* Add more options here as needed */}
                </Select>
              </Box>

              {/* Merchant Category */}
              <Box>
                <Text mb={2}>Merchant category</Text>
                <Box display="flex" alignItems="center">
                  {/* Input for adding categories */}
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add category"
                    width="auto"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addCategory();
                      }
                    }}
                  />
                  <Box display="flex" flexWrap="wrap" gap={2} mr={2}>
                    {selectedCategories.map((category) => (
                      <Tag
                        size="lg"
                        key={category}
                        borderRadius="full"
                        variant="solid"
                        colorScheme="purple"
                      >
                        <TagLabel>{category}</TagLabel>
                        <TagCloseButton
                          onClick={() => removeCategory(category)}
                        />
                      </Tag>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </FormControl>
    </div>
  );
};

export default OutOfPoket;
