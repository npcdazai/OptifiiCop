import { Box, HStack, Text, VStack, Link , Grid} from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { OPACITY_ON_LOAD, SLIDE_IN_BOTTOM } from "../../../Layout/animations";
import amazonVoucher from "../../../assets/amazonlogo.png";
import hAndm from "../../../assets/hAndM.png";
import bewakoof from "../../../assets/bewakoof.png";
import myGlam from "../../../assets/myGlam.png";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import VanillaTilt from "vanilla-tilt";
import myTrip from "../../../assets/myTrip.png";
import { useNavigate } from "react-router-dom";
import { Radio, RadioGroup } from "@chakra-ui/react";
import parkeAvenue from "../../../assets/parkAven.png";
const brandData = [
  {
    brandLogo: amazonVoucher,
    brandName: "Amazon",
    brandColor: "#000000",
    brandColor1: "#000000",
    cardWorth: "30% cashback",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: hAndm,
    brandName: "H&M",
    brandColor: "#EC1515",
    brandColor1: "#EC1515",
    cardWorth: "30% cashback",
    textColor: "#FFFFFF",
    capColor: "#E6E6E6",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: myGlam,
    brandName: "My Glam",
    brandColor: "#EEEEEE",
    brandColor1: "#888888",
    cardWorth: "30% cashback",
    textColor: "#000000",
    capColor: "#737373",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: bewakoof,
    brandName: "Amazon",
    brandColor: "#FCC700",
    brandColor1: "#E89600",
    cardWorth: "30% cashback",
    textColor: "#000000",
    capColor: "#171717",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: myTrip,
    brandName: "My Trip",
    brandColor: "#EC1515",
    brandColor1: "#EC1515",
    cardWorth: "30% cashback",
    textColor: "#FFFFFF",
    capColor: "#E6E6E6",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: myGlam,
    brandName: "My Glam",
    brandColor: "#EEEEEE",
    brandColor1: "#888888",
    cardWorth: "30% cashback",
    textColor: "#000000",
    capColor: "#737373",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: bewakoof,
    brandName: "Amazon",
    brandColor: "#FCC700",
    brandColor1: "#E89600",
    cardWorth: "30% cashback",
    textColor: "#000000",
    capColor: "#171717",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
  {
    brandLogo: parkeAvenue,
    brandName: "Park Avenue",
    brandColor: "#000000",
    brandColor1: "#000000",
    cardWorth: "30% cashback",
    dateTime: "Aug 17 - 30",
    caption: "lorem ipsum dolor sit amet dolor sit ",
    patternColor: "",
  },
];

const MyVoucher = ({handleSelectCard,handleProceed, selectedCard , setSelectedCard }) => {
    const navigate = useNavigate();

  return (
    <RadioGroup onChange={handleSelectCard} value={selectedCard}>
    <Grid
      {...SLIDE_IN_BOTTOM}
      mt={2}
      gap={4}
      w="100%"
      h="100%"
    //   gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
    gridTemplateColumns="repeat(4, 1fr)"
      justifyContent="center"
    >
      {brandData?.map(
        (
          {
            brandColor,
            brandLogo,
            cardWorth,
            brandName,
            caption,
            dateTime,
            brandColor1,
            textColor,
            capColor,
          },
          index
        ) => {
          const tiltRef = useRef(null);
  
          useEffect(() => {
            const node = tiltRef.current;
            if (node) {
              VanillaTilt.init(node, {
                max: 13,
                speed: 700,
                glare: true,
                scale: 1.05,
                "max-glare": 0.5,
                onEnter: () => {
                  node.style.zIndex = 10; // Bring to top on hover
                },
                onLeave: () => {
                  node.style.zIndex = 1; // Reset zIndex after hover
                },
              });
            }
            return () => {
              if (node && node.vanillaTilt) {
                node.vanillaTilt.destroy();
              }
            };
          }, [tiltRef]);
  
          return (
            <Box
              cursor="grab"
              key={index}
              ref={tiltRef}
              overflow="hidden"
              shadow="md"
              w="100%"
              h="100%"
              bg={`linear-gradient(179.86deg, ${brandColor} 0.12%, ${brandColor1} 231.77%)`}
              borderRadius="5px"
              p={1}
            >
              <HStack
                pb={1}
                justifyContent="space-between"
                pt={1}
                ps={1}
                pe={2}
              >
                <Radio value={index} />
                {/* <Image src={optifiiLogo} /> */}
              </HStack>
              <VStack
                color={brandLogo === "hAndm" ? "#E2231A" : "#fff"}
                gap={1}
              >
                <Image src={brandLogo} h="43px" />
                <Text
                  fontWeight={600}
                  color={`${textColor}`}
                  as="span"
                  fontSize="sm"
                >
                  30% cashback
                </Text>
                {/* <Text as={"span"} fontWeight={700} fontSize={"medium"}>
                  $ {cardWorth}
                </Text> */}
                <Text
                  align="center"
                  as="span"
                  fontWeight={600}
                  fontSize="x-small"
                  color={`${capColor}`}
                >
                  {caption}
                </Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  w="100%"
                  justifyContent="space-between"
                >
                  <Text color={`${textColor}`} fontSize="x-small">
                    {brandName}
                  </Text>
                  <Text color={`${textColor}`} fontSize="x-small">
                    {dateTime}
                  </Text>
                </Box>
              </VStack>
            </Box>
          );
        }
      )}
    </Grid>
  </RadioGroup>
  
  );
};

export default MyVoucher;
