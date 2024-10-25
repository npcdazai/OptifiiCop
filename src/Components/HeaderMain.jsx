import {
  AddIcon,
  ArrowBackIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import mainLogo from "../assets/optifii_logo.svg";
import { MdNotificationsNone } from "react-icons/md";
import womenpfp from "../assets/womenpfp1.png";
import { MdLogout } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { MdDeleteOutline, MdOutlineDelete } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

const users = [
  { id: 1, user: "Jenny Wilson", role: "Admin" },
  { id: 2, user: "Jenny Wilson", role: "Employee" },
];

const HeaderMain = ({
  logOutHandler,
  slideDirecttion,
  isDrawerOpen,
  toggleDrawer,
  blur,
}) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useContext(GlobalStateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: "https://bit.ly/dan-abramov",
      sender: "Admin",
      time: "1 Min ago",
      message: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 2,
      avatar: "https://bit.ly/code-beast",
      sender: "Support",
      time: "5 Min ago",
      message: "Your ticket has been updated.",
    },
  ]);

  // Handler to delete a notification
  const handleDelete = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  // Handler to delete all notifications
  const handleDeleteAll = () => {
    setNotifications([]);
  };

  const openDrawerOnClick = () => {};

  return (
    <Box
      w={"100%"}
      h={{ base: "8%", lg: "8%" }}
      position={"relative"}
      className={` pt-2 pb-2  fw-400 border-bottom d-flex ${
        slideDirecttion ? " ps-2" : ""
      }  justify-content-between align-items-center`}
      zIndex={999}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          w={"250px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            className={`d-flex  ${
              true ? "justify-content-start" : "justify-content-center"
            }  p-4 pt-0 pb-0 position-relative `}
          >
            <Image
              style={{
                width: 95,
              }}
              src={mainLogo}
              alt="Logo"
              onClick={() => !blur && navigate("/")}
              cursor={"pointer"}
            />
          </Box>
          <Button
            colorScheme={"forestGreen"}
            rounded={"lg"}
            onClick={toggleDrawer}
            style={{
              width: "28px",
              height: "28px",
              minWidth: "28px",
              zIndex: 99,
              backgroundColor: "#6311CB29",
            }}
          >
            {isDrawerOpen ? (
              <ArrowLeftIcon className="web-text-small" color={"#6311CB"} />
            ) : (
              <ArrowRightIcon className="web-text-small " color={"#6311CB"} />
            )}
          </Button>
        </Box>

        {!blur && (
          <InputGroup width={350} size="sm" ml={5}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Type to search..."
              rounded="md"
              focusBorderColor="#3725EA"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        )}
      </Box>
      <Box
        filter={blur && "blur(5px)"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} gap={2}>
          {/* <Box display={"flex"} gap={2} alignItems={"center"} me={2}>
            <Button 
            onClick={()=>navigate("/notification")}
            size={"sm"} bg={"none"} p={0}
            >
              <MdNotificationsNone fontSize={"20px"} />
            </Button>
          </Box> */}
          <Menu>
            <MenuButton
              as={Button}
              border={"0px"}
              _hover={{ bgColor: "#FFF" }}
              // _active={{bgColor:"#FFF"}}
              fontSize={"xs"}
              color={"gray.700"}
              variant="outline"
              size={"sm"}
              me={2}
            >
              <MdNotificationsNone fontSize={"20px"} />
            </MenuButton>
            <MenuList w="342px" h="442px" overflowY="scroll">
              <HStack
                borderBottom="1px dashed #CFCFCF"
                justifyContent="space-between"
                w="100%"
                p={2}
                position="fixed"
                top={1}
                bgColor="#FFF"
              >
                <Text
                  as="span"
                  fontWeight={600}
                  fontSize="small"
                  color="#000000"
                >
                  Notification
                </Text>
                <Text
                  textDecoration="underline"
                  fontSize="small"
                  color="#696498"
                  onClick={handleDeleteAll}
                >
                  Clear all
                </Text>
              </HStack>
              <VStack mt={12} mb={12}>
                <Box bg="#fff" p={1} rounded="md" boxShadow="md">
                  <Text fontSize="small" fontWeight={400} color="#A0A0A0">
                    Today
                  </Text>
                  <VStack spacing={4} align="stretch">
                    {notifications.map((notification) => (
                      <HStack
                        key={notification.id}
                        justifyContent="space-between"
                        bg="#F3F7F9"
                        p={2}
                        rounded="sm"
                        boxShadow="md"
                      >
                        <HStack spacing={2}>
                          <Box bg="#d7d3fb" p={1} rounded="full">
                            <Image
                              borderRadius="full"
                              boxSize="30px"
                              src={notification.avatar}
                              alt={notification.sender}
                            />
                          </Box>
                          <Box>
                            <Box mb={0}>
                              <Text
                                as="span"
                                fontSize="sm"
                                fontWeight={600}
                                mb={0}
                              >
                                {notification.sender}
                              </Text>
                              <Text
                                as="span"
                                color="#A0A0A0"
                                fontSize="xs"
                                ms={2}
                                fontWeight={500}
                                mb={0}
                              >
                                {notification.time}
                              </Text>
                            </Box>
                            <Text color="#A0A0A0" fontSize="xs" mb={0}>
                              {notification.message}
                            </Text>
                          </Box>
                        </HStack>
                        <Box
                          onClick={() => handleDelete(notification.id)}
                          cursor="pointer"
                        >
                          <MdOutlineDelete color="#686868" size={16} />
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </Box>

                <Box bg="#fff" p={1} rounded="md" boxShadow="md">
                  <Text fontSize="small" fontWeight={400} color="#A0A0A0">
                    Yesterday
                  </Text>
                  <VStack spacing={4} align="stretch">
                    {notifications.map((notification) => (
                      <HStack
                        key={notification.id}
                        justifyContent="space-between"
                        bg="#F3F7F9"
                        p={2}
                        rounded="sm"
                        boxShadow="md"
                      >
                        <HStack spacing={2}>
                          <Box bg="#d7d3fb" p={1} rounded="full">
                            <Image
                              borderRadius="full"
                              boxSize="30px"
                              src={notification.avatar}
                              alt={notification.sender}
                            />
                          </Box>
                          <Box>
                            <Box mb={0}>
                              <Text
                                as="span"
                                fontSize="sm"
                                fontWeight={600}
                                mb={0}
                              >
                                {notification.sender}
                              </Text>
                              <Text
                                as="span"
                                color="#A0A0A0"
                                fontSize="xs"
                                ms={2}
                                fontWeight={500}
                                mb={0}
                              >
                                {notification.time}
                              </Text>
                            </Box>
                            <Text color="#A0A0A0" fontSize="xs" mb={0}>
                              {notification.message}
                            </Text>
                          </Box>
                        </HStack>
                        <Box
                          onClick={() => handleDelete(notification.id)}
                          cursor="pointer"
                        >
                          <MdOutlineDelete color="#686868" size={16} />
                        </Box>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </VStack>

              <HStack
                position="fixed"
                bottom={0}
                borderTop="0.5px solid #CFCFCF"
                p={1}
                justifyContent="center"
                bgColor="#fff"
                w="100%"
              >
                <Text onClick={()=>navigate("/notification")} cursor="pointer" fontSize="small" color="#6311CB" fontWeight={600}>
                  View All
                </Text>
              </HStack>
            </MenuList>
          </Menu>
          <Box me={4} gap={2} className="d-flex justify-content-center ">
            <Popover placement="bottom">
              <Portal>
                <PopoverContent maxW="200px">
                  <PopoverArrow />
                  <Link to="/profile">
                    <PopoverBody
                      textAlign="center"
                      color="#6311CB"
                      className="web-text-medium pointer link"
                    >
                      View Profile
                    </PopoverBody>
                  </Link>

                  {/* <Link to={"/help-and-support"}>
                    <PopoverBody className="web-text-medium pointer ">
                      Help & Support
                    </PopoverBody>
                  </Link> */}
                  <PopoverBody className="web-text-medium pointer ">
                    <VStack alignItems="flex-start">
                      <Text
                        color="#A0ABBB"
                        textAlign="left"
                        fontSize={"x-small"}
                        fontWeight={600}
                      >
                        Switch Accounts
                      </Text>
                      {users.map((val) => {
                        return (
                          // <VStack
                          //   className="web-text-medium pointer link"
                          //   h="50px"
                          //   pt={1}
                          //   key={val.id}
                          //   w="100%"
                          // >
                          <HStack
                            alignItems="flex-start"
                            gap={4}
                            w="100%"
                            className="pointer link"
                          >
                            <Image
                              src={womenpfp}
                              h="31.79px"
                              alt="Profile Picture"
                            />
                            <Text
                              as={"span"}
                              fontSize="x-small"
                              fontWeight={600}
                              color="#191D23"
                            >
                              {val.user}
                              <Text
                                // as={"span"}
                                fontSize="x-small"
                                fontWeight={600}
                                color="#A0ABBB"
                              >
                                {val.role}
                              </Text>
                            </Text>
                          </HStack>
                          // </VStack>
                        );
                      })}
                    </VStack>
                  </PopoverBody>

                  <PopoverFooter
                    onClick={logOutHandler}
                    className="web-text-medium pointer link"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    gap={3}
                  >
                    <MdLogout />
                    <Text
                      as={"span"}
                      color="#868788"
                      fontWeight={600}
                      fontSize="x-small"
                    >
                      Sign out of all accounts
                    </Text>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
              {blur ? (
                <Box>
                  <Box className="d-flex pointer  align-items-center">
                    <Avatar size="sm" boxSize={37} bg={"#210a33"} />
                    <Box
                      style={{
                        display: "flex",
                      }}
                      className=" overflow-hidden ms-3  flex-column "
                    >
                      <Text as={"span"} className="web-text-small">
                        Hello, Developers
                      </Text>
                      <Text as={"span"} className="web-text-xsmall">
                        mailto:wdi@tanami.com
                      </Text>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <PopoverTrigger>
                  <Box className="d-flex pointer  align-items-center">
                    <Avatar size="sm" boxSize={37} bg={"#210a33"} />
                    <Box
                      style={{
                        display: "flex",
                      }}
                      className=" overflow-hidden ms-3  flex-column "
                    >
                      <Text as={"span"} className="web-text-small">
                        Hello, Developers
                      </Text>
                      <Text as={"span"} className="web-text-xsmall">
                        mailto:wdi@tanami.com
                      </Text>
                    </Box>
                  </Box>
                </PopoverTrigger>
              )}
            </Popover>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMain;
