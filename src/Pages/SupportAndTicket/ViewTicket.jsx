import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Input,
    Switch,
    Tag,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { OPACITY_ON_LOAD } from "../../Layout/animations";
  import womenpfp from "../../assets/womenpfp1.png";
  import { AttachmentIcon } from "@chakra-ui/icons";
  
  const data = [{ id: 1, label: "Ticket ID:" }];
  
  const ViewTicket = () => {
    return (
      <Box
        bgColor="#F3F3F9"
        {...OPACITY_ON_LOAD}
        p={4}
        overflowX="scroll"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Flex
          p={4}
          alignItems="flex-start"
          flexDirection="row"
          gap={2}
          bgColor="#FFFFFF"
          boxShadow="0px 6px 12px 0px #0000001A"
          h="100%"
          borderRadius="10px"
          justifyContent="space-between"
        >
          <VStack alignItems="flex-start">
            <HStack alignItems="center" gap={2}>
              <Text as="span" color="#7E7E7E" fontSize="small" fontWeight={400}>
                Ticket ID:
              </Text>
              <Box
                borderRadius="50px"
                px={2}
                py={1}
                variant="outline"
                bg={"#ececec"}
                color="#202020"
                fontSize="x-small"
                border="1px solid #9E9E9E"
                fontWeight={600}
              >
                #1E233
              </Box>
            </HStack>
            <HStack alignItems="center" gap={2}>
              <Text as="span" color="#7E7E7E" fontSize="small" fontWeight={500}>
                Created:
              </Text>
              <Text as="span" fontSize="small" color="#202020" fontWeight={600}>
                31 Dec 2022
              </Text>
            </HStack>
            <HStack alignItems="center" gap={2}>
              <Text fontSize="small" as="span" color="#7E7E7E" fontWeight={500}>
                Last message:
              </Text>
              <Text fontSize="small" as="span" color="#202020" fontWeight={600}>
                31 Dec 2022
              </Text>
            </HStack>
          </VStack>
  
          <VStack>
            <HStack alignItems="center" gap={2}>
              <Text as="span" color="#7E7E7E" fontSize="small" fontWeight={500}>
                Status:
              </Text>
              <Box
                borderRadius="50px"
                px={2}
                py={1}
                fontWeight={700}
                variant="outline"
                bgColor="#f0f9f2"
                color="#03781D"
                fontSize="x-small"
                border="1px solid #6DC580"
              >
                Open
              </Box>
            </HStack>
            <HStack alignItems="center" gap={2}>
              <Text as="span" color="#7E7E7E" fontSize="small" fontWeight={500}>
                Priority:
              </Text>
              <Box
                borderRadius="50px"
                px={2}
                py={1}
                fontWeight={700}
                variant="outline"
                bgColor="#f9f2f2"
                color="#BA1717"
                fontSize="x-small"
                border="1px solid #E2A1A1"
              >
                Urgent
              </Box>
            </HStack>
          </VStack>
        </Flex>
  
        <Box p={4} bgColor="#FFFFFF" boxShadow="0px 6px 12px 0px #0000001A" borderRadius="10px">
          {/* {/ First Chat Bubble /} */}
          <HStack py={4} alignItems="start" spacing={2}>
            <Box
              bgColor="#FFFF"
              h="40px"
              w="40px"
              borderRadius="50%"
              boxShadow="0px 4px 20px 0px #00000040"
              p={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                borderRadius='full'
                boxSize='30px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
  
            <VStack alignItems="flex-start" gap={2}>
              <Box
                borderTopRightRadius="10px"
                borderBottomRadius="10px"
                backgroundColor="#EBEBEB"
                p={4}
              >
                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                  Life seasons open have. Air have of. Lights fill after let third darkness replenish fruitful let. Wherein set image. Creepeth said above gathered bring.
                </Text>
              </Box>
              <HStack ml={1} alignSelf="flex-start">
                <Text color="#3F3F3F" fontSize="x-small" fontWeight={600}>
                  Katherine
                </Text>
                <Text color="#9E9E9E" fontSize="x-small" fontWeight={500}>
                  Today, 11:30 PM
                </Text>
              </HStack>
            </VStack>
          </HStack>
  
          {/* {/ Second Chat Bubble /} */}
          <Flex py={4} flexDirection="row" gap={2} justifyContent="flex-end">
            <VStack alignItems="flex-start" gap={2}>
              <Box
                borderTopLeftRadius="10px"
                borderBottomRadius="10px"
                backgroundColor="#F7F5FF"
                p={4}
              >
                <Text fontSize={"xs"} fontWeight={500} mb={1}>
                  Life seasons open have. Air have of.
                </Text>
              </Box>
              <HStack ml={1} alignSelf="flex-end">
                <Text color="#3F3F3F" fontSize="x-small" fontWeight={600}>
                  Katherine
                </Text>
                <Text color="#9E9E9E" fontSize="x-small" fontWeight={500}>
                  Today, 11:30 PM
                </Text>
              </HStack>
            </VStack>
            <Box
              bgColor="#FFFF"
              h="40px"
              w="40px"
              borderRadius="50%"
              boxShadow="0px 4px 20px 0px #00000040"
              p={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
             <Image
                borderRadius='full'
                boxSize='30px'
                src='https://bit.ly/code-beast'
                alt='Dan Abramov'
              />
            </Box>
          </Flex>
        </Box>
  
        <Flex
          p={4}
          alignItems="flex-start"
          flexDirection="column"
          gap={3}
          bgColor="#FFFFFF"
          boxShadow="0px 6px 12px 0px #0000001A"
          h="100%"
          borderRadius="10px"
        >
          <Textarea fontSize="small" placeholder="Write  your response for issue" outline="none" />
  
          <HStack w="100%" justifyContent="space-between">
            <HStack alignItems="center">
              <Switch w="44px" size="sm" />
              <Text as="span" color="#5F5F5F" fontSize="small">Private</Text>
            </HStack>
            <HStack>
              <Button
                as="label"
                htmlFor="file-upload"
                leftIcon={<AttachmentIcon />}
                variant="outline"
                cursor="pointer"
                border="1px solid #9E9E9E"
                bgColor="#FFFFFF"
                color="#5F5F5F"
                borderRadius="5px"
                fontSize="small"
              >
                Attach
                <Input id="file-upload" type="file" display="none" />
              </Button>
  
              <Button fontSize="small" color="#fff" bgColor="#3818D9">
                Send
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    );
  };
  
  export default ViewTicket;
  