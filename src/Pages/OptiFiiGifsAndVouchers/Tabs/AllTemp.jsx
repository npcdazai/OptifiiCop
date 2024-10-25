import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import temp1 from "../../../assets/temp1.png";
import temp2 from "../../../assets/temp2.png";
import temp3 from "../../../assets/temp3.png";
import temp5 from "../../../assets/temp5.png";
import temp6 from "../../../assets/temp6.png";
import temp7 from "../../../assets/temp7.png";
import temp8 from "../../../assets/temp8.png";
import { Box, Grid } from "@chakra-ui/react";

const cards = [
  {
    id: 1,
    image: temp1,
  },
  {
    id: 2,
    image: temp2,
  },
  {
    id: 3,
    image: temp3,
  },
  {
    id: 4, // Fix duplicate id
    image: temp5,
  },
  {
    id: 5, // Fix duplicate id
    image: temp6,
  },
  {
    id: 6, // Fix duplicate id
    image: temp7,
  },
  {
    id: 7, // Fix duplicate id
    image: temp8,
  },
];

const AllTemp = ({ selectedCard, handleCardSelect }) => {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((node) => {
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
    });

    // Cleanup VanillaTilt instances
    return () => {
      tiltRefs.current.forEach((node) => {
        if (node && node.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
    };
  }, [tiltRefs]);

  return (
    <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
      {cards.map((card, index) => (
        <Box
          ref={(el) => (tiltRefs.current[index] = el)}
          key={card.id}
          bgImage={`url(${card.image})`}
          bgSize="cover"
          bgPosition="center"
          border="2px"
          borderColor={selectedCard?.id === card.id ? "blue.500" : "gray.200"}
          borderRadius="md"
          overflow="hidden"
          cursor="pointer"
          onClick={() => handleCardSelect(card)}
          height="200px"
          w="100%"
        />
      ))}
    </Grid>
  );
};

export default AllTemp;
