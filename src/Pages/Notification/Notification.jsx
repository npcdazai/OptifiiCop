import {
    Box,
    HStack,
    Text,
    Image,
    VStack,
    Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { MdDeleteOutline, MdOutlineDelete } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";

const Notification = () => {
    // Define an array of notification objects with unique data
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            avatar: 'https://bit.ly/dan-abramov',
            sender: 'Admin',
            time: '1 Min ago',
            message: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
            id: 2,
            avatar: 'https://bit.ly/code-beast',
            sender: 'Support',
            time: '5 Min ago',
            message: 'Your ticket has been updated.',
        },
        {
            id: 3,
            avatar: 'https://bit.ly/ryan-florence',
            sender: 'System',
            time: '10 Min ago',
            message: 'System maintenance scheduled for tonight.',
        },
        {
            id: 4,
            avatar: 'https://bit.ly/kent-c-dodds',
            sender: 'John Doe',
            time: '20 Min ago',
            message: 'Your profile has been viewed 10 times.',
        },
        {
            id: 5,
            avatar: 'https://bit.ly/sage-adebayo',
            sender: 'Jane Smith',
            time: '30 Min ago',
            message: 'New comment on your post.',
        },
    ]);

    // Handler to delete a notification
    const handleDelete = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    // Handler to delete all notifications
    const handleDeleteAll = () => {
        setNotifications([]);
    };

    return (
        <Box h="100%" p={4} {...OPACITY_ON_LOAD} overflowY="auto">
            <HStack alignItems={"start"} justifyContent={"space-between"}>
                <MiniHeader
                    title="Notification"
                />
                <HStack>
                    <HStack
                        as={"button"}
                        spacing={0}
                        border={"1px solid #D2D2D2"}
                        bg={"#fff"}
                        px={2}
                        py={1}
                        rounded={"md"}
                        color={"#1C1C1C"}
                    >
                        <Icon as={IoIosCheckmark} />
                        <Text mb={0} fontSize={"xs"} fontWeight={500}>Mark as read</Text>
                    </HStack>
                    <HStack
                        as={"button"}
                        spacing={0}
                        border={"1px solid #EE1B24"}
                        bg={"#fff"}
                        px={2}
                        py={1}
                        rounded={"md"}
                        color={"#EE1B24"}
                        onClick={handleDeleteAll}
                    >
                        <Icon as={MdDeleteOutline} boxSize={3} />
                        <Text mb={0} ms={1} fontSize={"xs"} fontWeight={500}>Delete All</Text>
                    </HStack>
                </HStack>
            </HStack>

            <Box
                bg="#fff"
                p={4}
                rounded="md"
                boxShadow="md"
                minH={"76vh"}
            >
                {/* Wrap all notifications inside a single VStack */}
                <VStack spacing={4} align="stretch">
                    {notifications.map((notification) => (
                        <HStack
                            key={notification.id}
                            justifyContent="space-between"
                            bg="#F3F7F9"
                            p={2}
                            rounded="sm"
                            boxShadow="md"
                        >
                            <HStack spacing={2}>
                                <Box bg="#d7d3fb" p={1} rounded="full">
                                    <Image
                                        borderRadius="full"
                                        boxSize="30px"
                                        src={notification.avatar}
                                        alt={notification.sender}
                                    />
                                </Box>
                                <Box>
                                    <Box mb={0}>
                                        <Text as="span" fontSize="sm" fontWeight={600} mb={0}>
                                            {notification.sender}
                                        </Text>
                                        <Text as="span" color="#A0A0A0" fontSize="xs" ms={2} fontWeight={500} mb={0}>
                                            {notification.time}
                                        </Text>
                                    </Box>
                                    <Text color="#A0A0A0" fontSize="xs" mb={0}>
                                        {notification.message}
                                    </Text>
                                </Box>
                            </HStack>
                            <Box
                                onClick={() => handleDelete(notification.id)}
                                cursor="pointer"
                            >
                                <MdOutlineDelete color="#686868" size={16} />
                            </Box>
                        </HStack>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};

export default Notification;
