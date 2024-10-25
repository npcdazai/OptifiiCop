import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo2.png";
import logoDark from "../../assets/logo.png";
import logoMini from "../../assets/logo-min.png";
import logoMiniDark from "../../assets/favicon.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slice/auth";
// import Button02 from "../Components/Buttons/Button02";
import {
  TbArrowBadgeLeftFilled,
  TbBriefcase,
  TbBuildingBank,
  TbListDetails,
  TbReportMoney,
  TbTransactionDollar,
} from "react-icons/tb";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { AddIcon, ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RouteLink } from "../../Routes/Routes";
import NotFound from "../../Pages/NotFound";
import { nav } from "../../Routes/Nav";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Alert,
  AlertIcon,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import Cookies from "js-cookie"; // Import the Cookies library
import HeaderMain from "../../Components/HeaderMain";
import SplashScreen from "../../Pages/SplashScreen";
import CustomBreadcrumb from "../../Components/CutomBreadcrumb";
import compLogo from "../../assets/complogo.svg";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import MiniHeader from "../../Components/MiniHeader";
import { RiUser2Line } from "react-icons/ri";

const StatusCheck = ({ isOnline = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const { setIsAuthenticate } = useContext(GlobalStateContext);
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const savedIndex = localStorage.getItem("openAccordionIndex");
    if (savedIndex !== null) {
      setOpenIndex(parseInt(savedIndex));
    }
  }, []);

  const handleAccordionChange = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    localStorage.setItem("openAccordionIndex", newIndex);
  };

  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 1000); // 3000ms = 3 seconds

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const logOutHandler = () => {
    // dispach(loginUser(false));
    setIsAuthenticate(false);
    Cookies.remove("isAuthenticated");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshTokenExp");
    navigate("/login");
  };

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <Box {...OPACITY_ON_LOAD}  height={"100vh"}>
      <HeaderMain
        blur={true}
        isDrawerOpen={isDrawerOpen}
        logOutHandler={logOutHandler}
        toggleDrawer={toggleDrawer}
      />
      <Box
        h={{ base: "92%", lg: "96%" }}
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        className="d-flex"
        pe={0.5}
      >
        <Alert
          transition={"0.5s"}
          h={53}
          transform={isOnline ? "translateY(-100px)" : "translateY(0px)"}
          position={"absolute"}
          zIndex={999}
          status="info"
          variant="solid"
          bgGradient="linear(to-r, red.500, yellow.500, red.500)"
          // bgGradient='linear(to-r, #1EBCA3, #22CAB3)'
          color={"white"}
          fontWeight={600}
          fontSize={"md"}
        >
          <AlertIcon color={"white"} />
          No Internet !
        </Alert>

        <Box
          className="h-100 position-relative sideBar"
          style={{
            width: isDrawerOpen ? 260 : 0,
            transition: "width 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition for width and transform
            backgroundColor: "#210A33",
            position: "relative",
            color: "#fff",
            transform: isDrawerOpen ? "translateX(-7px)" : "translateX(-260px)", // Move box to the left when closed
          }}
          filter="blur(5px)" // Apply the blur effect
        >
          <Box
            className="ps-2 scroll-bar pe-1 pt-3"
            style={{
              height: "100%",
              overflowY: "scroll",
              overflowX: "hidden",
              paddingBottom: "5rem",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              bg={" #FFFFFF26"}
              p={2}
              // m={2}.
              mb={2}
              rounded="md"
            >
              <Image me={2} src={compLogo} />
              <Text as={"span"} fontSize="10px">
                Website Developers India Pvt Ltd
              </Text>
            </Box>
            <Accordion
              m={0}
              // px={0}
              allowToggle
              defaultIndex={-1}
              index={openIndex}
              onChange={handleAccordionChange}
            >
              {nav.map(
                ({ title, type, Icon, submenu, path, colorCode }, index) => {
                  if (type === "accordion") {
                    return (
                      <AccordionItem
                        key={index}
                        border={"none"}
                        // style={{ borderRadius: "2px", marginBottom: "8px" }}
                      >
                        <AccordionButton
                          style={{ height: "auto", borderRadius: "2px" }}
                          _hover={{ bg: "#ced8e6a2" }}
                          className={`${
                            true
                              ? "p-2   web-text-medium ps-2 justify-content-between"
                              : "p-2 ps-1 web-text-xlarge justify-content-center"
                          }  link d-flex align-items-center gap-2 w-100 mb-1`}
                        >
                          <Box
                            display={"flex"}
                            gap={2}
                            alignItems={"center"}
                            style={{ height: "auto", borderRadius: "2px" }}
                            // _hover={{ bg: "#ced8e6a2" }}
                          >
                            {/* {Icon && title === "Admin" ? <Image w={15} src={shield} /> : <Icon className={`web-text-large`} />} */}
                            {Icon && (
                              <Icon
                                fontSize={title === "Admin" ? "18px" : "15px"}
                              />
                            )}
                            <Text
                              as={"span"}
                              display={true ? "flex" : "none"}
                              alignItems="center"
                              overflow="hidden"
                              textAlign={"left"}
                            >
                              {title}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                          p={0}
                          pb={1}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={1}
                        >
                          {submenu?.map(
                            (
                              {
                                title: subMenuTitle,
                                path: link,
                                icon: SubIcon,
                                colorCode,
                              },
                              i
                            ) => (
                              <Box
                                key={i}
                                style={{
                                  height: "auto",
                                  position: "relative",
                                }}
                                className={`${
                                  true
                                    ? " web-text-medium ps-4 "
                                    : " web-text-xlarge  justify-content-center"
                                }  d-flex align-items-center  p-0`}
                              >
                                <Link
                                  style={{ borderRadius: "2px" }}
                                  className={`${
                                    true
                                      ? "p-2 ps-1 ms-2 web-text-medium "
                                      : "p-2 ps-0 ms-0 zindex-3 ms-4 web-text-xlarge justify-content-center"
                                  }  link d-flex align-items-center gap-2 w-100  mx-2`}
                                >
                                  {SubIcon && (
                                    <SubIcon
                                      fontSize={"8px"}
                                      className="ms-2"
                                      // style={{ zIndex: 111, color:colorCode?colorCode:"" }}
                                    />
                                  )}
                                  <Text
                                    as={"span"}
                                    display={true ? "flex" : "none"}
                                    alignItems="center"
                                    overflow="hidden"
                                  >
                                    {subMenuTitle}
                                  </Text>
                                </Link>
                              </Box>
                            )
                          )}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  } else if (type === "title") {
                    return (
                      <Text
                        as={"span"}
                        key={index}
                        className="web-text-xxsmall fw-600  text-secondary fw-bold"
                      >
                        {title}
                      </Text>
                    );
                  } else if (type === "single") {
                    return (
                      <Link
                        key={index}
                        style={{
                          height: "auto",
                          position: "relative",
                          borderRadius: "2px",
                        }}
                        className={`${
                          true
                            ? "p-2 px-0 web-text-medium"
                            : "p-2 px-0  ps-0 web-text-xlarge justify-content-start"
                        }  link d-flex align-items-center gap-2 w-100 mb-2`}
                      >
                        {Icon && <Icon className="web-text-large ms-2" />}
                        <Text
                          as={"span"}
                          display={true ? "flex" : "none"}
                          alignItems="center"
                          overflow="hidden"
                        >
                          {title}
                        </Text>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </Accordion>
          </Box>
        </Box>

        <Box
          style={{
            width: `calc(100% - ${isDrawerOpen ? 260 : 0}px)`,
            transition: "width 0.3s ease-in-out",
            backgroundColor: "#F3F3F9",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <Box {...OPACITY_ON_LOAD} p={4} overflowX={"scroll"}>
            <Box
              rounded={"xl"}
              p={4}
              // pb={0}
              display={"flex"}
              flexDirection={"column"}
              bg={"#fff"}
              shadow={"md"}
              h={"88vh"}
            >
              <MiniHeader title={`welcome, ${localStorage?.getItem('fullname')}`} />
              <VStack overflow={"hidden"} rounded={"lg"} w={"100%"}>
                <VStack p={4} w={"100%"} bg={"#F0E8FA"} alignItems={"start"}>
                  <Text as={"span"} fontWeight={600} fontSize={"md"}>
                    You’ve successfully submitted details
                  </Text>
                  <Text
                    as={"span"}
                    fontWeight={500}
                    color={"gray.600"}
                    fontSize={"xs"}
                  >
                    Out team will review your details , wait for the
                    verification of documents
                  </Text>
                </VStack>
                <VStack p={4} px={5} w={"100%"} bg={"#F0E8FA"} alignItems={"start"}>
                  <Text as={"span"} fontWeight={600} fontSize={"md"}>
                    Progress Details :
                  </Text>



                  <HStack h={"auto"} pb={6} position={"relative"}justifyContent={"space-between"} w={"50%"} px={0} >
                    <VStack transform={"translateY(19px)"} bg={"#F0E8FA"} zIndex={999}  gap={0} >
                        <Icon mb={2} bgGradient="linear(to-r, #3725EA, #5E0FCD)" as={RiUser2Line} boxSize={9} rounded={'full'} p={2} color={'#fff'} />
                      <Text  as={"span"} fontWeight={600} fontSize={"xs"}>
                        Bank Details
                      </Text>
                      <Text
                        as={"span"}
                        fontWeight={500}
                        color={"gray.600"}
                        fontSize={"xs"}
                      >
                        (Under review)
                      </Text>
                    </VStack>


                    <VStack transform={"translateY(19px)"} bg={"#F0E8FA"} zIndex={999}  gap={0} >
                        <Icon mb={2} bgGradient="linear(to-r, #3725EA, #5E0FCD)" as={TbBuildingBank} boxSize={9} rounded={'full'} p={2} color={'#fff'} />
                      <Text  as={"span"} fontWeight={600} fontSize={"xs"}>
                        Bank Details
                      </Text>
                      <Text
                        as={"span"}
                        fontWeight={500}
                        color={"gray.600"}
                        fontSize={"xs"}
                      >
                        (Under review)
                      </Text>
                    </VStack>



                    <VStack transform={"translateY(19px)"} bg={"#F0E8FA"} zIndex={999}  gap={0} >
                        <Icon mb={2} bgGradient="linear(to-r, #3725EA, #5E0FCD)" as={TbBriefcase} boxSize={9} rounded={'full'} p={2} color={'#fff'} />
                      <Text  as={"span"} fontWeight={600} fontSize={"xs"}>
                      Business Details
                      </Text>
                      <Text
                        as={"span"}
                        fontWeight={500}
                        color={"gray.600"}
                        fontSize={"xs"}
                      >
                        (Under review)
                      </Text>
                    </VStack>
                    


                    <Box position={'absolute'} w={'100%'} as="span" borderTop={"1px dashed purple"}/>


                  </HStack>



                </VStack>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatusCheck;

const AppContent = () => {
  return (
    <Routes>
      {RouteLink.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
