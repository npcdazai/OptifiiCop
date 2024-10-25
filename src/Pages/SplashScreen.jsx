import { Box, Image, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo2.png'
import mainLogo from "../assets/optifii_logo.svg";

const SplashScreen = () => {
  return (
    <Box
    h={'100vh'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={10}
    >
        <Image w={"150px"} src={mainLogo} />
        {/* <Spinner color='green.900' size='md' /> */}
        {/* <div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div> */}
    </Box>
  )
}

export default SplashScreen