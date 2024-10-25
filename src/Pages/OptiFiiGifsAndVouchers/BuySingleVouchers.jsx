// import React, { useState } from "react";
// import { Box, Image, Text, Grid, Button, Stack } from "@chakra-ui/react";
// import { OPACITY_ON_LOAD } from "../../Layout/animations";
// import temp1 from "../../assets/temp1.png";

// const cards = [
//   {
//     id: 1,
//     image: temp1,
//     // title: "You Deserve a Treat",
//     // description: "Thank you for everything!",
//   },
// ];

// const BuySingleVouchers = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardSelect = (card) => {
//     // setSelectedCard(card);
//   };

//   return (
//     <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//       {cards.map((card) => (
//         <Box
//           bgImage={`url(${card.image})`}
//           bgSize="cover"
//           bgPosition="center"
//           key={card.id}
//           border="1px"
//           borderColor="gray.200"
//           borderRadius="md"
//           overflow="hidden"
//           cursor="pointer"
//           onClick={() => handleCardSelect(card)}
//         >
//           {/* <Box p={4}>
//             <Text fontWeight="bold">{card.title}</Text>
//             <Text>{card.description}</Text>
//           </Box> */}
//         </Box>
//       ))}
//       <PreviewCard selectedCard={selectedCard} />
//     </Grid>
//   );
// };

// const PreviewCard = ({ selectedCard }) => {
//   if (!selectedCard) {
//     return <Text>Select a card to preview</Text>;
//   }

//   return (
//     <Box
//       bgColor="#F3F3F9"
//       h="100%"
//       {...OPACITY_ON_LOAD}
//       overflowX={"scroll"}
//       border="1px"
//       borderColor="gray.200"
//       borderRadius="md"
//       p={4}
//     >
//       <Text fontWeight="bold" mb={4}>
//         Preview:
//       </Text>
//       <Image src={selectedCard.image} alt={selectedCard.title} />
//       <Text fontWeight="bold">{selectedCard.title}</Text>
//       <Text>{selectedCard.description}</Text>
//     </Box>
//   );
// };

// export default BuySingleVouchers;
import React from 'react'

const BuySingleVouchers = () => {
  return (
    <div>BuySingleVouchers</div>
  )
}

export default BuySingleVouchers