import { Box, Container, HStack, Image, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import optifii_logo from '../../assets/optifii_logo.svg';

const Header = () => {
    const navLinks = ["How it works?", "Benefits", "FAQ", "Testimonials", "Pricing"];

    return (
        <Box bg={"#FFFFFF"}>
            <Container maxW='container.xl' py={2}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    {/* Logo on the left */}
                    <Box>
                        <Image src={optifii_logo} alt="Optifii Logo" />
                    </Box>

                    {/* Centered Navigation Links */}
                    <Flex flex={1} justifyContent="center">
                        <HStack spacing={8}>
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={`#${link.replace(/\s+/g, '-').toLowerCase()}`} 
                                    color={"#000000"}
                                    fontWeight="500"
                                    fontSize="sm"
                                    _hover={{ textDecoration: "none", color: "#6E34F9" }} // Hover effect
                                >
                                    {link}
                                </Link>
                            ))}
                        </HStack>
                    </Flex>
                    
                    {/* Empty Box to balance space on the right */}
                    <Box w="50px" /> 
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
