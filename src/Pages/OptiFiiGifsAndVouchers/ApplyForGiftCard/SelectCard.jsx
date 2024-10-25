import { Box, Button, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import mobilepng from "../../../assets/mobileCard.png";
import cardfooter from "../../../assets/cardFooter.png";
import cardfooter2 from "../../../assets/cardFooter2.png";
import cardfooter3 from "../../../assets/cardFooter3.png";
import { IoMdCheckmark } from "react-icons/io";
import DigiTable from "./DigiTable";
import WhereToShare from "./WhereToShare";
import GlobalStateContext from "../../../Contexts/GlobalStateContext";

const SelectCard = ({ handleNext }) => {
  const {
    selectedCardIndex,
    setSelectedCardIndex,
    selectionCount,
    setSelectionCount,
    hasProceeded,
  } = useContext(GlobalStateContext);
  const tiltRefs = useRef([]);

  const cards = [
    {
      title: "Save More",
      subtitle: "Digital Gift Card",
      description:
        "Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.",
      image: mobilepng,
      img: cardfooter,
      component: <WhereToShare />,
    },
    {
      title: "Save More",
      subtitle: "Physical Gift Card",
      description:
        "Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.",
      img: cardfooter2,
      component: <DigiTable />,
    },
    {
      title: "Save More",
      subtitle: "Insta Gift Card",
      description:
        "Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.",
      img: cardfooter3,
      component: <WhereToShare />,
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setSelectionCount(selectionCount + 1);
  };

  // VanillaTilt effect
  useEffect(() => {
    tiltRefs.current.forEach((node) => {
      if (node) {
        VanillaTilt.init(node, {
          max: 8,
          speed: 700,
          glare: true,
          scale: 1.01,
          "max-glare": 0.5,
          onEnter: () => {
            node.style.zIndex = 10; // Bring to top on hover
          },
          onLeave: () => {
            node.style.zIndex = 1; // Reset zIndex after hover
          },
        });
      }
    });

    // Cleanup VanillaTilt
    return () => {
      tiltRefs.current.forEach((node) => {
        if (node?.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <Box>
      {hasProceeded && selectedCardIndex !== null ? (
        <Box>{cards[selectedCardIndex].component}</Box>
      ) : (
        <Box
          display="flex"
          justifyContent={"start"}
          alignItems={"start"}
          gap={6}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              ref={(el) => (tiltRefs.current[index] = el)}
              bgGradient="linear-gradient(180deg, #6311CB 0%, #1F1584 100%)"
              color="white"
              borderRadius="lg"
              overflow="hidden"
              width={{ base: "100%", md: "300px" }}
              padding={6}
              textAlign="center"
              boxShadow="lg"
              position="relative"
            >
              <VStack
                h="373px"
                alignItems="flex-start"
                spacing={0}
                position="relative"
              >
                <Button
                  h={8}
                  px={6}
                  bgColor={selectedCardIndex === index ? "#fff" : "transparent"}
                  color={selectedCardIndex === index ? "purple.500" : "#fff"}
                  border="1px solid #fff"
                  fontSize="small"
                  fontWeight={500}
                  _hover={{ bgColor: "transparent", color: "white" }}
                  onClick={() => handleCardClick(index)}
                >
                  {selectedCardIndex === index ? (
                    <>
                      <Icon as={IoMdCheckmark} mr={2} />
                      Selected
                    </>
                  ) : (
                    "Select"
                  )}
                </Button>

                <Text as="span" fontSize="lg" fontWeight={400} mb={0} mt={4}>
                  {card.title}
                </Text>

                <Text as="span" fontSize="lg" fontWeight={500} mb={2}>
                  {card.subtitle}
                </Text>

                <Text as="span" fontSize="xs" textAlign="start">
                  {card.description}
                </Text>

                {card.image && (
                  <Image
                    src={card.image}
                    h="190px"
                    objectFit="cover"
                    position="absolute"
                    bottom="-1.5rem"
                    right="-1.5rem"
                    borderRadius="md"
                  />
                )}

                {card.img && (
                  <Image
                    src={card.img}
                    h="111px"
                    objectFit="cover"
                    position="absolute"
                    bottom="-1.5rem"
                    left="-1.5rem"
                    borderRadius="md"
                  />
                )}
              </VStack>
            </Box>
          ))}
        </Box>
      )}
      {/* <Box mt={8}>
        <Button colorScheme="purple" onClick={handleProceed}>
          Save and Proceed
        </Button>
      </Box> */}
    </Box>
  );
};

export default SelectCard;
