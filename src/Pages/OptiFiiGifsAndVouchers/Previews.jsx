import React from "react";

const PreviewCard = ({ selectedCard }) => {
  if (!selectedCard) {
    return <Text>Select a card to preview</Text>;
  }

  return (
    <Box
      bgColor="#F3F3F9"
      h="100%"
      {...OPACITY_ON_LOAD}
      overflowX={"scroll"}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
    >
      <Text fontWeight="bold" mb={4}>
        Preview:
      </Text>
      <Image src={selectedCard.image} alt={selectedCard.title} />
      <Text fontWeight="bold">{selectedCard.title}</Text>
      <Text>{selectedCard.description}</Text>
    </Box>
  );
};

export default Previews;
