import React, { useEffect, useRef } from 'react'
import logo_card from "../assets/logo_card.svg";
import TRANSCORP_LOGO from "../assets/TRANSCORP_LOGO.svg";
import bg from "../assets/platinium_bg.png";
import RuPay from "../assets/rupayImg.png";
import { Box, Text, VStack, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import splashPattern from '../assets/splash_pattern.svg'
import gift from '../assets/gift.svg'


import platinum from "../assets/Platinum.svg";

const PlatiniumGift = () => {
  const tiltRef = useRef(null); useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);


  return (
    <VStack
      ref={tiltRef} // Attach tilt to this ref
      // bg="linear-gradient(230deg, #6311CB, #481566, #851d70, #a71c71, #df2274)"
      //   bg="linear-gradient(230deg, purple, #390A74, #390A74, #390A74, #390A74)"
      bgImage={bg}
      bgPosition={"center"} // Position the background image (e.g., center)
      bgSize={"cover"} // Optional: Cover the entire area
      alignItems={"start"}
      justifyContent={"space-between"}
      height={"100%"}
      w={180}
      h={"280"}
      rounded={"xl"}
      p={4}
      boxShadow={"md"}
      position={"relative"}
    >
      <Box
        width={"100%"}
        cursor={"grab"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Image w={16} src={logo_card} />
        <Image w={14} src={TRANSCORP_LOGO} me={0.5} />
      </Box>

      <VStack
        width={"100%"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"space-between"}
        zIndex={9}
        gap={1}
        transform={'translateY(-40px)'}
      >
        <Text as={'span'} color={"#fff"} fontWeight={500} fontSize={"sm"}>
          8174 35XX XXXX 1234
        </Text>
        <Text as={'span'} color={"#E2E2E2"} fontSize={"8px"}>
          VALID THRU <br />
          01/12
        </Text>
        <Text as={'span'} color={"#E2E2E2"} fontSize={"8px"}>
          CVV <br />
          123
        </Text>
        <Text as={'span'} color={"#fff"} fontWeight={500} fontSize={"xs"} mt={2}>
        CARDHOLDER NAME
        </Text>
      </VStack>

    
      <Image h={"200px"} position={'absolute'} bottom={-10} left={0} src={splashPattern} />


      <Box>
        <Image w={50} position={'absolute'} bottom={"10px"} left={0} src={gift} />
        <Image w={14} position={'absolute'} bottom={"10px"} right={3} src={RuPay} me={0.5} />
      </Box>
    </VStack>
  )
}

export default PlatiniumGift