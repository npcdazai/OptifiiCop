import {
  Box,
  Button,
  FormLabel,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import {
  FaTv,
  FaShoppingCart,
  FaUtensils,
  FaTshirt,
  FaHeart,
} from "react-icons/fa";
import AllTemp from "./Tabs/AllTemp";
import amazon from "../../assets/amazonlogoF.png";
import { Link } from "react-router-dom";

const Preview = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const tabData = [
    {
      label: "All",
      icon: FaTv,
      content: (
        <AllTemp
          selectedCard={selectedCard}
          handleCardSelect={handleCardSelect}
        />
      ),
    },
    { label: "Thank you", icon: FaTv, content: "Content for Electronics" },
    {
      label: "Best wishes",
      icon: FaShoppingCart,
      content: "Content for Ecommerce",
    },
    {
      label: "Happy birthday",
      icon: FaHeart,
      content: "Content for Lifestyle",
    },
    {
      label: "Congratulations",
      icon: FaUtensils,
      content: "Content for Food & Beverages",
    },
    { label: "Thank you", icon: FaTshirt, content: "Content for Clothing" },
  ];

  return (
    <Box
      bgColor="#F3F3F9"
      h="100%"
      {...OPACITY_ON_LOAD}
      p={4}
      overflowX={"scroll"}
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
    >
      <Box display="flex" w="60%" flexDirection="column">
        <Text fontSize={"medium"} fontWeight={"semibold"}>
          Select template
        </Text>
        <Text fontSize={"medium"} fontWeight={400}>
          Category
        </Text>
        <Tabs
          w="100%"
          variant="soft-rounded"
          colorScheme="purple"
          align="start"
        >
          <TabList display="flex" flexDirection="row" gap={0}>
            {tabData.map((tab, index) => (
              <Tab fontSize="x-small" key={index} whiteSpace="nowrap">
                <Icon as={tab.icon} mr={2} />
                {tab.label}
              </Tab>
            ))}
          </TabList>
          <Box w="100%" border="0.5px solid #6311CB5E" mt="2" />
          {/* Mapping through tabData to create tab panels */}
          <TabPanels>
            {tabData.map((tab, index) => (
              <TabPanel
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#6311CB1A",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#6311CB",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                  },
                }}
                h={"450px"}
                overflowY="scroll"
                key={index}
              >
                <p>{tab.content}</p>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>

      <Box
        bgColor="#F3F3F9"
        h="100%"
        w="40%"
        {...OPACITY_ON_LOAD}
        overflowY={"scroll"}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p={4}
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#6311CB1A",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#6311CB",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Text fontWeight="bold" fontSize="medium">
          Preview:
        </Text>
        {selectedCard ? (
          <>
            <Image
              h="201px"
              src={selectedCard.image}
              alt={selectedCard.title}
            />

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={4}
              gap={1}
              w="100%"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                mt={4}
                gap={1}
                w="100%"
              >
                <Text fontSize="small" color="#2D2D2D" fontWeight={600}>
                  Hi Receiver,
                </Text>
                <Text fontSize="small" color="#2D2D2D" fontWeight={600}>
                  You’ve got a Amazon pay E-Gift card
                </Text>

                <FormLabel color="#666666" fontWeight={400} fontSize={"small"}>
                  Type your message
                </FormLabel>
                <Textarea />
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Image h="31px" src={amazon} />
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                  >
                    <Text fontSize="small" color="#3725EA" fontWeight={600}>
                      ₹ 500
                    </Text>
                    <Text fontSize="small" color="#3725EA" fontWeight={600}>
                      Validity: xxxxxx
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Link to="/brand-voucher/buy-voucher-card/preview/Apply-For-GiftCard">
                <Button
                  fontSize="small"
                  bgColor="#6311CB"
                  color="#fff"
                  p={4}
                  w="301px"
                >
                  {" "}
                  Proceed to add
                </Button>
              </Link>
            </Box>
            {/* <Text fontWeight="bold" mt={2}>
                {selectedCard.title}
              </Text>
              <Text>{selectedCard.description}</Text> */}
          </>
        ) : (
          <Text>No card selected</Text>
        )}
      </Box>
    </Box>
  );
};

export default Preview;
