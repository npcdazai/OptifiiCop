import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import myType from "../../assets/myType.png";
import { GoArrowSwitch } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import gift from "../../assets/gift.png";
import { IoMdTime } from "react-icons/io";
import bluetick from "../../assets/icons/verifytick.png";
const employeeInfo = [
  { label: "Phone", value: "+91 4578451245" },
  { label: "Email", value: "poojashah@optifii.com" },
  { label: "Grade", value: "A01" },
];
const permissions = [
  "Manage human resource",
  "Manage subadmin",
  "Manage reports",
  "Manage human resource",
  "Manage subadmin",
  "Manage reports",
];
const benifit = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];
const Profile = () => {
  return (
    <Box
      bgColor="#F3F3F9"
      {...OPACITY_ON_LOAD}
      p={4}
      w="100%"
      overflowX="auto"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      {/* 1st Box */}
      <HStack
        w="100%"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={6}
        flexWrap="wrap"
        bgColor="#FFFFFF"
        borderRadius="5px"
        p={4}
      >
        <HStack alignItems="center" spacing={8}>
          <VStack alignItems="flex-start" spacing={2}>
            <Text fontSize="small">Employee Details</Text>
            <HStack spacing={4} alignItems="flex-start">
              <Image src={myType} h="79px" />
              <VStack alignItems="flex-start" spacing={1}>
                <Text
                  as="span"
                  color="#383838"
                  fontSize="medium"
                  fontWeight={500}
                >
                  Jenny Wilson
                </Text>
                <Text as="span" color="#696969" fontSize="small">
                  Design - UI/UX Designer
                </Text>
                <Text
                  as="span"
                  color="#383838"
                  fontSize="small"
                  fontWeight={500}
                >
                  Employee ID : WD-0067
                </Text>
                <HStack alignItems="start">
                  <Text as="span" color="#696969" fontSize="small">
                    Member Since :
                  </Text>
                  <Text as="span" color="#696969" fontSize="small">
                    1st Jan 2022
                  </Text>
                </HStack>
              </VStack>
              <Tag
                size="lg"
                bgColor="#00A43814"
                border="0.5px solid #00A438"
                borderRadius="full"
                p={2}
              >
                <TagLabel color="#00A438" fontSize="small">
                  ● Active
                </TagLabel>
              </Tag>
            </HStack>
          </VStack>

          <Box h="110px" borderRight="1px dashed #BCBCBC" />

          <VStack mt="2rem" alignItems="flex-start" spacing={2}>
            {employeeInfo.map((info) => (
              <HStack key={info.label}>
                <Text fontSize="small" color="#696969">
                  {info.label} :{" "}
                </Text>
                <Text fontSize="small" color="#0F0F0F">
                  {info.value}
                </Text>
              </HStack>
            ))}
          </VStack>
        </HStack>

        <HStack spacing={4}>
          <Button bgColor="#6311CB" color="#FFFFFF" gap={2} fontSize="small">
            <GoArrowSwitch /> Switch profile
          </Button>
          <Tag
            border="1px solid #6311CB"
            variant="subtle"
            fontSize="small"
            colorScheme="white"
            h="40px"
          >
            <TagLeftIcon boxSize="12px" as={MdEdit} />
            <TagLabel color="#6311CB">Edit</TagLabel>
          </Tag>
          <Tag
            border="1px solid #EE1B24"
            variant="subtle"
            fontSize="small"
            colorScheme="white"
            h="40px"
          >
            <TagLeftIcon boxSize="12px" color="#EE1B24" as={MdOutlineDelete} />
            <TagLabel color="#EE1B24">Delete</TagLabel>
          </Tag>
        </HStack>
      </HStack>

      <HStack alignItems="flex-start">
        <VStack
          bgColor="#FFFFFF"
          borderRadius="5px"
          alignItems="flex-start"
          p={4}
        >
          <Text color="#5F5F5F" fontSize="small" fontWeight={400}>
            Roles & permission
          </Text>
          <HStack>
            <Text color="#696969" fontWeight={400} fontSize="small">
              Role :{" "}
            </Text>
            <Text color="#0F0F0F" fontWeight={600} fontSize="small">
              Approver
            </Text>
          </HStack>

          <HStack alignItems="flex-start">
            <Text color="#696969" fontSize="small">
              Permissions :{" "}
            </Text>
            <SimpleGrid columns={3} spacing={4}>
              {permissions.map((permission, index) => (
                <Button
                  color="#6311CB"
                  fontSize="x-small"
                  key={index}
                  bgColor="#EFE3FF"
                  borderRadius="5px"
                  variant="solid"
                >
                  {permission}
                </Button>
              ))}
            </SimpleGrid>
          </HStack>
        </VStack>

        <VStack
          bgColor="#FFFFFF"
          borderRadius="5px"
          alignItems="flex-start"
          p={4}
        >
          <Text color="#5F5F5F" fontSize="small" fontWeight={400}>
            Company details
          </Text>
          <HStack>
            <Text color="#696969" fontWeight={400} fontSize="small">
              Company name :{" "}
            </Text>
            <Text color="#0F0F0F" fontWeight={600} fontSize="small">
              ABC  Pvt Ltd.
            </Text>
          </HStack>
          <HStack>
            <Text color="#696969" fontWeight={400} fontSize="small">
              Industry :{" "}
            </Text>
            <Text color="#0F0F0F" fontWeight={600} fontSize="small">
              Fintech
            </Text>
          </HStack>
          <HStack>
            <Text color="#696969" fontWeight={400} fontSize="small">
              Type :{" "}
            </Text>
            <Text color="#0F0F0F" fontWeight={600} fontSize="small">
              Private Limited Company
            </Text>
          </HStack>
        </VStack>
      </HStack>

      <Box bgColor="#FFFFFF" p={4}>
        <Text fontSize="small" fontWeight={600} color="#5F5F5F">
          Package selected
        </Text>
        <HStack alignItems="flex-start" w={"100%"}>
          <HStack bgColor="#3725EA0A" w="50%" p={4}>
            <VStack alignItems="flex-start">
              <HStack w="100%" justifyContent="space-between">
                <HStack>
                  <Image src={gift} h="19px" />
                  <Text
                    as="span"
                    color="#393939"
                    fontSize="small"
                    fontWeight={600}
                  >
                    OptiFii Benefit
                  </Text>
                </HStack>
                <HStack alignItems="flex-start" color="#00A438">
                  <IoMdTime style={{ height: "18.33px" }} />{" "}
                  <Text as="span" fontSize="small">
                    Renewal in 30 days
                  </Text>
                </HStack>
              </HStack>
              <Text as="p" color="#6F8196" fontWeight={400} fontSize="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </Text>
              <SimpleGrid columns={2} spacing={4}>
                {benifit.map((benifit, index) => (
                  <HStack alignItems="center">
                    <Image src={bluetick} h="14px" />
                    <Text as="span" color="#585858" fontSize="small">
                      {benifit}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </HStack>
          <HStack bgColor="#3725EA0A" w="50%" p={4}>
            <VStack alignItems="flex-start">
              <HStack w="100%" justifyContent="space-between">
                <HStack>
                  <Image src={gift} h="19px" />
                  <Text
                    as="span"
                    color="#393939"
                    fontSize="small"
                    fontWeight={600}
                  >
                    OptiFii Expense
                  </Text>
                </HStack>
                <HStack alignItems="flex-start" color="#00A438">
                  <IoMdTime style={{ height: "18.33px" }} />{" "}
                  <Text as="span" fontSize="small">
                    Renewal in 30 days
                  </Text>
                </HStack>
              </HStack>
              <Text as="p" color="#6F8196" fontWeight={400} fontSize="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </Text>
              <SimpleGrid columns={2} spacing={4}>
                {benifit.map((benifit, index) => (
                  <HStack alignItems="center">
                    <Image src={bluetick} h="14px" />
                    <Text as="span" color="#585858" fontSize="small">
                      {benifit}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Profile;
