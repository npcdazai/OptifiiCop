import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Mobile from "../assets/mobileWing.png";
import mobileBanner from "../assets/welcome.avif";
import { GrDownload } from "react-icons/gr";
import { LuClock } from "react-icons/lu";

const MobileView = ({ isOpen, onClose, finalRef }) => {
  return (
      <Modal display={'flex'} size={'xl'} justifyContent={'center'} isCentered finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
    backdropFilter="blur(5px)" // Add this line for backdrop blur
    bg="rgba(0, 0, 0, 0.4)" // Optional: Adjust the overlay color and opacity
     />
        <ModalContent 

          backgroundColor={"transparent"} shadow={'none'}>

<HStack w={'100'} display={'flex'} justify={'center'}>
          <Box 
          as="span"
          boxShadow={"none"}
          position={"relative"}
          display={'flex'}
          justifyContent={'center'}
          h={"600px"}
          w={"330px"}
          >
          <Image
            h={"100%"}
            w={"100%"}
            src={Mobile}
            position={"absolute"}
            top={"0"}
            left={"0"}
          />
          <Box
            backgroundColor={"#fff"}
            h={"98%"}
            w={'96%'}
            // m={2}
            borderRadius={"47px"}
            pt={"30px"}
            px={"15px"}
          >
            <Box
              p={"10px"}
              overflowY={"scroll"}
              h={"483px"}
              zIndex={"99"}
              position={"relative"}
              borderBottomLeftRadius={"23px"}
              borderBottomRightRadius={"23px"}
            >
              <Box
                mb={4}
                bg={"#f5f8f6"}
                borderRadius={"20px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.15) 0px 2px 8px"
                }
              >
                <Box>
                  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"xs"} fontWeight={500} color="green">Stock</Text>
                    <Text fontSize={"xs"} display={"flex"} alignItems={"center"} fontWeight={500}><LuClock /> Closing Date Aug 23 2024</Text>
                  </Box>
                <Image
                  borderTopLeftRadius={"20px"}
                  borderTopRightRadius={"20px"}
                  h={"130px"}
                  w={"100%"}
                  src={mobileBanner}
                />
                </Box>
                <Stack mt="3" bg={"#fff"} py={4} px={4}>
                  <Text
                    fontSize={"sm"}
                    fontWeight={"500"}
                    color={"#000"}
                    mb={0}
                  >
                    Guinevere Gates
                  </Text>
                  <Heading fontSize="16px" color={"#004717"}>
                    BHD 46,258
                  </Heading>
                  <Progress
                    colorScheme="green"
                    size="sm"
                    value={20}
                    borderRadius={"3px"}
                  />
                  <Text fontSize={"xs"} fontWeight={500} mb={0}>
                    0.0% funded
                  </Text>
                  <Text fontSize={"sm"} fontWeight={500} mb={0}>
                    fugit eligendi dolore dolore et
                  </Text>
                </Stack>
                <Box py={4} px={4}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Sponsor name:
                    </Text>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Scott Simon
                    </Text>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Estimated return:
                    </Text>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      A provident veniam
                    </Text>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Hoiding period:
                    </Text>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Eius eiusmod exericit
                    </Text>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      Minimum investment:
                    </Text>
                    <Text fontSize={"xs"} mb={1} fontWeight={600}>
                      BHD 1
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                mb={4}
                p={5}
                bg={"#f5f8f6"}
                borderRadius={"20px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.15) 0px 2px 8px"
                }
              >
                <Heading fontSize="15px" fontWeight={600}>Key Merits</Heading>
                <Box display={"flex"} alignItems={"center"}>
                  <Image
                    width={"30px"}
                    me={2}
                    src="https://tanami.betadelivery.com/public/icons/icon3.svg"
                  />
                  <Text fontSize={"xs"} mb={0}>
                    Sit sunt consequunt Dolores minim suscip
                  </Text>
                </Box>
              </Box>
              <Box
                mb={4}
                p={5}
                borderRadius={"20px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.15) 0px 2px 8px"
                }
              >
                <Heading fontSize="15px" fontWeight={600}>Investment Documents</Heading>
                <Box bg={"#f5f8f6"} w={"150px"} p={3} borderRadius={"10px"}>
                  <Box display={"flex"} alignItems={"center"} mb={2}>
                    <Image src="https://tanami.betadelivery.com/public/icons/icon8.svg" />
                    <Text fontSize={"xs"} mb={0}>
                      Merrill Rocha
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text mb={0} fontSize={"sm"}>
                      0.03 mb
                    </Text>
                    <GrDownload fontSize={"15px"} />
                  </Box>
                </Box>
              </Box>
              <Box
                mb={4}
                p={4}
                borderRadius={"20px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.15) 0px 2px 8px"
                }
              >
                <Heading fontSize="15px" fontWeight={600}>Videos</Heading>
                <video autoPlay style={{borderRadius:"18px"}}>
                  <source src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4" type="video/mp4" />
                </video>
              </Box>

            </Box>
            
            <Box   position={"relative"}  p={4} background={"#fff"} padding={"24px"}  paddingBottom={"3px"}    borderBottomLeftRadius={"30px"} borderBottomRightRadius="30px">
                <Button margin={"auto"} width={"85%"}  bottom="10px" left="0" colorScheme='forestGreen' mr={3} w={"100%"} fontWeight={500} borderRadius={"20px"}>
                  Invest
                </Button>
              </Box>
          </Box>
          </Box>
          </HStack>
        </ModalContent>
      </Modal>
  );
};

export default MobileView;
