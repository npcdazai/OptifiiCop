import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MiniHeader = ({ title, subTitle, backButton }) => {
  const navigate = useNavigate();
  const [firstPart, secondPart] = title.split(/ (.+)/);

  return ( 
    <HStack gap={3} mb={4}>
      {backButton && (
        <Icon
         boxShadow='md'
          cursor={"pointer"}
          onClick={() => navigate(-1)}
          as={ArrowBackIcon}
          boxSize={7}
          bg={"#fff"}
          p={1}
          rounded={"full"}
          
        />
      )}
      <VStack alignItems={"start"} gap={1}>
        <Box as="span" display={"flex"} gap={2}>
          <Text fontSize={"lg"} as={"span"} fontWeight={600}>
            {firstPart}
          </Text>

          <Text
            bgGradient="linear(to-l, #3725EA, #5E0FCD)"
            bgClip="text"
            fontSize={"lg"}
            as={"span"}
            fontWeight={600}
          >
            {secondPart}
          </Text>
        </Box>

        <Text fontSize={"xs"} color={"gray.500"} fontWeight={500} as={"span"}>
          {subTitle}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MiniHeader;
