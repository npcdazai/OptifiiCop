import {
  background,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

const AddDepartment = ({ isOpen, onClose }) => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [inputValue, setInputValue] = useState(""); // State for input field

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"md"}>Add department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box backgroundColor={"#f3f3f9"} p={4} rounded={4}>
              <Box position={"relative"} borderBottom={"1px solid #ccc"} pb={2}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  style={{width:'100%', backgroundColor:"transparent", fontSize:"14px",height:"32px",outline: 'none',fontWeight:"500"}}
                />
                <Button fontSize={"xl"} fontWeight={600} onClick={addTask} colorScheme="customPurple" size={"sm"} position={"absolute"} top={"0"} right={"0"}><GoArrowRight /></Button>
              </Box>
              <Box pt={4} pb={4}>
                {tasks.map((task, index) => (
                  <Button me={2} mb={3} size={"sm"} fontSize={"sm"} fontWeight={500} key={index} border={"1px solid #6311CB"} rounded={"50px"} bg={"#6311CB0D"}>
                    <Text as={"span"} onClick={() => toggleTask(index)} color={"#000"} fontWeight={500}>{task.text}</Text>
                    <Button colorScheme='transprent' color="customPurple" variant='ghost' fontSize={"md"} pr={0} onClick={() => deleteTask(index)}><RxCross1 /></Button>
                  </Button>
                ))}
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter pb={8}>
            <Button colorScheme='gray' mr={3} onClick={onClose} fontSize={"sm"} size={"sm"} w={"50%"}>Cancel</Button>
            <Button colorScheme="customPurple" size={"sm"} fontSize={"sm"} fontWeight={500} w={"50%"}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddDepartment;
