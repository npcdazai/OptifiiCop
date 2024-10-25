import React, { useEffect, useRef } from 'react'
import logo_card from "../assets/logo_card.svg";
import TRANSCORP_LOGO from "../assets/TRANSCORP_LOGO.svg";
import RuPay from "../assets/rupayImg.png";
// import VanillaTilt from 'vanilla-tilt';
import { Box, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';

const PayCard = () => {
    // const tiltRef = useRef(null); useEffect(() => {
    //     const node = tiltRef.current;
    //     if (node) {
    //         VanillaTilt.init(node, {
    //             max: 5,
    //             speed: 400,
    //             glare: true,
    //             "max-glare": 0.5,
    //         });
    //     }
    //     return () => {
    //         if (node && node.vanillaTilt) {
    //             node.vanillaTilt.destroy();
    //         }
    //     };
    // }, []);


    return (
        <VStack
            bg="linear-gradient(230deg, purple, #390A74, #390A74, #390A74, #390A74)"
            alignItems={"start"}
            justifyContent={"space-between"}
            height={"100%"}
            w={240}
            h={"372px"}
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
                <Image w={20} src={logo_card} />
                <Image w={24} src={TRANSCORP_LOGO} me={0.5} />
            </Box>

            <VStack
                width={"100%"}
                display={"flex"}
                alignItems={"start"}
                justifyContent={"space-between"}
            >
                <Text color={"#fff"} fontSize={"sm"}>
                    1234 5678 1234 5678
                </Text>
                <Button
                    size={"sm"}
                    rounded={"full"}
                    bg={"#ffffff30"}
                    fontSize={"sm"}
                    px={6}
                    border={"1px solid #fff"}
                    _hover={{ opacity: 0.8 }}
                    _active={{ opacity: 1 }}
                    color={"#fff"}
                    fontWeight={500}
                >
                    Tap to view details
                </Button>
            </VStack>

            <Box width={"100%"} display={"flex"} justifyContent={"end"}>
                {/* <Image w={32} src={logo_card} /> */}
                <Image w={24} src={RuPay} me={0.5} />
            </Box>

            <Text
                position={"absolute"}
                top={24}
                right={-6}
                transform="rotate(270deg)"
                fontSize={"xs"}
                color={"#9E9E9E"}
            >
                Valid in india
            </Text>
        </VStack>
    )
}

export default PayCard