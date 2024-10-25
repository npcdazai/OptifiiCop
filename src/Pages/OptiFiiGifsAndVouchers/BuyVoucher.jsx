import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import parkeAvenue from "../../assets/parkeAvenue.png";
import bewakoof from "../../assets/bewakoof.png";
import hm from "../../assets/HM.png";
import nike from "../../assets/nike.png";
import amazon from "../../assets/amazon.png";
import myTrip from "../../assets/myTrip.png";
import myGlam from "../../assets/myGlam.png";
import Cards from "./Tabs/AllVouchers";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import {
  FaTv,
  FaShoppingCart,
  FaUtensils,
  FaTshirt,
  FaPlane,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    id: 1,
    img: parkeAvenue,
  },
  {
    id: 2,
    img: bewakoof,
  },
  {
    id: 3,
    img: hm,
  },
  {
    id: 3,
    img: nike,
  },
  {
    id: 4,
    img: amazon,
  },
  {
    id: 5,
    img: myTrip,
  },
  {
    id: 5,
    img: myGlam,
  },
  {
    id: 3,
    img: nike,
  },
];

const BuyVoucher = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleSelectCard = (index) => {
    setSelectedCard(index);
  };

  const handleProceed = () => {
    if (selectedCard !== null) {
      navigate("/brand-voucher/buy-voucher-card/preview"); // Proceed with the selected card
    }
  };

  const tabData = [
    {
      label: "All",
      icon: FaTv,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Electronics",
      icon: FaTv,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Ecommerce",
      icon: FaShoppingCart,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Lifestyle",
      icon: FaHeart,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Food & Beverages",
      icon: FaUtensils,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Clothing",
      icon: FaTshirt,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Travel",
      icon: FaPlane,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
    {
      label: "Lifestyle",
      icon: FaHeart,
      content: (
        <Cards
          handleSelectCard={handleSelectCard}
          handleProceed={handleProceed}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          navigate={navigate}
        />
      ),
    },
  ];

  return (
    <Box
      bgColor="#F3F3F9"
      h="100%"
      {...OPACITY_ON_LOAD}
      p={4}
      overflowX={"scroll"}
    >
      <Box p={4} bgColor="#FFFFFF" boxShadow="md" w="100%" mb={4} rounded={"md"}>
        <Text color="#222222" fontWeight={600} fontSize="small">
          Choose from popular brand
        </Text>

        <Box display="flex" gap={8} flexDirection="row" alignItems="center">
          {brands.map((val) => {
            return (
              <>
                <Image h="45px" src={val.img} />
              </>
            );
          })}
        </Box>
      </Box>

      <Box p={4} bgColor="#FFFFFF" boxShadow="md" w="100%" h="100%" rounded={"md"}>
        <Text color="#222222" fontSize="small" fontWeight={600}>
          Shop by category
        </Text>
        <Tabs variant="soft-rounded" colorScheme="purple" align="start">
          <TabList display="flex" flexDirection="row" gap={4}>
            {tabData.map((tab, index) => (
              <Tab fontSize="small" key={index}>
                <Icon as={tab.icon} mr={2} />
                {tab.label}
              </Tab>
            ))}
          </TabList>
          <Box w="100%" border="0.5px solid #6311CB5E" mt="2" />
          {/* Mapping through tabData to create tab panels */}
          <TabPanels>
            {tabData.map((tab, index) => (
              <TabPanel key={index} px={0}>
                <p>{tab.content}</p>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        <Button
          bgColor="#6311CB"
          color="white"
          px="3rem"
          _hover={{ bgColor: "#6311CB" }}
          onClick={handleProceed}
        >
          Proceed to add
        </Button>
      </Box>
    </Box>
  );
};

export default BuyVoucher;
