import { Box, Stack, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react"; // Import useState
import { MdGroups } from "react-icons/md";
import EmployeesAddModal from "../../Pages/ManageHumanResource/EmployeesAddModal";
import { NavLink } from "react-router-dom";

function BlueCard({ blueCardData }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsOpen(true); // Function to open the modal
  const closeModal = () => setIsOpen(false); // Function to close the modal

  return (
    <Box backgroundColor={blueCardData.backgroundColor} borderRadius="xl">
      <Box bg="#fff" borderRadius="xl" p={4} h="115px">
        <Stack
          direction={["column", "row"]}
          color={blueCardData.backgroundColor}
        >
          <Text as="span">
            <MdGroups />
          </Text>
          <Text
            textTransform={"capitalize"}
            display={"flex"}
            alignItems={"center"}
            as={"span"}
            fontSize="xs"
            mb={0}
            fontWeight={500}
          >
            {blueCardData.title.toUpperCase()}
          </Text>
        </Stack>
        <Text fontSize="xl" fontWeight={500} mt={2} mb={0}>
          {blueCardData.count}
        </Text>
      </Box>
      <Stack
        direction={["column", "row"]}
        color="#fff"
        justifyContent="center"
        alignItems="center"
      >
        <Text as="span">
          <MdGroups />
        </Text>
        <Text fontSize="sm" m={0} py={2}>
          {blueCardData.title === "Total EMPLOYEES" ? (
            <Link mb={0} onClick={openModal}>
              {blueCardData.buttonText}
            </Link>
          ) : (
            <NavLink to="dashboard/wallet-request">
                <Link mb={0}>
              {blueCardData.buttonText}
            </Link>
            </NavLink>
          )}
        </Text>
      </Stack>
      {blueCardData.title === "Total EMPLOYEES" && (
        <EmployeesAddModal isOpen={isOpen} onClose={closeModal} />
      )}
    </Box>
  );
}

export default BlueCard;
