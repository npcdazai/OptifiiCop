import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import logoDark from "../assets/logo.png";
import logoMini from "../assets/logo-min.png";
import logoMiniDark from "../assets/favicon.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Slice/auth";
import { RiNotification3Line } from "react-icons/ri";
// import Button02 from "../Components/Buttons/Button02";
import goth from "../assets/goth.png";
import { SlOptions } from "react-icons/sl";
import {
  TbArrowBadgeLeftFilled,
  TbListDetails,
  TbReportMoney,
  TbTransactionDollar,
} from "react-icons/tb";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RouteLink } from "../Routes/Routes";
import NotFound from "../Pages/NotFound";
import { nav } from "../Routes/Nav";
import {
  Avatar,
  Box,
  Text,
  WrapItem,
  Popover,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Alert,
  AlertIcon,
  Breadcrumb,
  Divider,
  Button,
  Flex,
  HStack,
  VStack,
  Circle,
} from "@chakra-ui/react";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import Cookies from "js-cookie"; // Import the Cookies library
import Header from "../Components/Header";
import HeaderMain from "../Components/HeaderMain";
import { IoMdSwap } from "react-icons/io";
import {
  RiBankLine,
  RiExchangeBoxLine,
  RiFileUserLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { VscSymbolClass } from "react-icons/vsc";
import {
  MdNotificationsNone,
  MdOutlineAddChart,
  MdOutlineTaskAlt,
} from "react-icons/md";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GrManual, GrNotification } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import shield from "../assets/shield.png";
import SplashScreen from "../Pages/SplashScreen";
import CutomBreadcrumb from "../Components/CutomBreadcrumb";
import CustomBreadcrumb from "../Components/CutomBreadcrumb";
import { getCountdownTimer } from "../Constants/Constants";
import { FiHome } from "react-icons/fi";
import compLogo from "../assets/complogo.svg";

const DashboardLayout = ({ isOnline }) => {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const {
    setIsAuthenticate,
    colorMode,
    toggleColorMode,
    setSlideFormRight,
    slideFromRight,
  } = useContext(GlobalStateContext);
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
    <Box height={"100vh"} overflow="hidden" className="gilroy">
      <HeaderMain
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
            width: isDrawerOpen ? 250 : 0,
            transition: "width 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition for width and transform
            backgroundColor: "#210A33",
            position: "relative",
            color: "#fff",
            transform: isDrawerOpen ? "translateX(0)" : "translateX(-250px)", // Move box to the left when closed
          }}
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
                              ? "p-2  web-text-medium ps-2 justify-content-between"
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
                          {/* {submenu?.map(
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
                                <NavLink
                                  style={{ borderRadius: "2px" }}
                                  className={`${
                                    true
                                      ? "p-2 ps-1 ms-2 web-text-medium "
                                      : "p-2 ps-0 ms-0 zindex-3 ms-4 web-text-xlarge justify-content-center"
                                  }  link d-flex align-items-center gap-2 w-100  mx-2`}
                                  to={link}
                                >
                                  {SubIcon && (
                                    <SubIcon
                                      fontSize={"8px"}
                                      className="ms-2"
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
                                </NavLink>
                              </Box>
                            )
                          )} */}
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
                                <NavLink
                                  style={{ borderRadius: "2px" }}
                                  className={`${
                                    true
                                      ? "p-2 ps-1 ms-2 web-text-medium "
                                      : "p-2 ps-0 ms-0 zindex-3 ms-4 web-text-xlarge justify-content-center"
                                  }  link d-flex align-items-center gap-2 w-100  mx-2`}
                                  to={link}
                                  end
                                >
                                  {({ isActive }) => (
                                    <>
                                      {/* {SubIcon && (
                                        <SubIcon
                                          fontSize={"18px"}
                                          className="ms-2"
                                        />
                                      )} */}
                                      {isActive && (
                                        <Box
                                        as="span"
                                          w="7px"
                                          h="7px"
                                          bg="#3725EA" 
                                          borderRadius="50%"
                                          ml={"-1rem"}
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
                                      
                                    </>
                                  )}
                                </NavLink>
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
                        fontSize="small"
                        className=" fw-600 text-secondary fw-bold"
                      >
                        {title}
                      </Text>
                    );
                  } else if (type === "single") {
                    return (
                      <NavLink
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
                        to={path}
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
                      </NavLink>
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </Accordion>
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              w="100%"
              gap={1}
              p={0}
              mt={"2rem"}
            >
              <Box position="relative">
                <RiNotification3Line color="#A0ABBB" fontSize="large" />
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="50%"
                  bgColor="#3725EA"
                  position="absolute"
                  top={0}
                  right={0}
                ></Box>
              </Box>
              <HStack alignItems="flex-start" p={0}>
                <Image src={goth} h="35px" w="35px" />
                <VStack alignItems="flex-start">
                  <Text
                    as="span"
                    color="#A0ABBB"
                    fontWeight={500}
                    fontSize="small"
                  >
                    Jenny Wilson
                  </Text>
                  <Text color="#A0ABBB" fontWeight={500} fontSize="small">
                    jen.wilson@wdipl.com
                  </Text>
                </VStack>
                <SlOptions fontSize="large" style={{ marginRight: "3px" }} />
              </HStack>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{
            width: `calc(100% - ${isDrawerOpen ? 250 : 0}px)`,
            transition: "width 0.3s ease-in-out",
            backgroundColor: "#F3F3F9",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* <HeaderBox
          slideDirecttion={slideFromRight}
          logOutHandler={logOutHandler}
          icon
          title={getTitle()}
        /> */}

          <CustomBreadcrumb />

          <AppContent />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

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
