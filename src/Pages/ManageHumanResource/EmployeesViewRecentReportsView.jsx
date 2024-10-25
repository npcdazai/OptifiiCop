import {
    Badge, Box, HStack, Image, Text,
    Heading, Menu, MenuButton, MenuItem, MenuList, VStack, Button,
    Tag,
    Divider,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import MiniHeader from '../../Components/MiniHeader'
import { GoDotFill } from 'react-icons/go'
import { LuListFilter, LuScrollText } from "react-icons/lu";
import NormalTable from "../../Components/DataTable/NormalTable";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import GlobalStateContext from '../../Contexts/GlobalStateContext'


const EmployeesViewRecentReportsView = () => {

    const { reimbursementStatus } = useContext(GlobalStateContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [ selectedRadio, setSelectedRadio] = useState([])

    console.log(selectedRadio);
    


    useEffect(() => {
        // Set isLoading to true
        setIsLoading(true);

        // Simulate a 3-second delay
        const timer = setTimeout(() => {
            setIsLoading(false); // Set isLoading to false after 3 seconds
        }, 500);

        // Cleanup the timer when the component unmounts or when the useEffect re-runs
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once after the component mounts

    // ===============================[ Table Header ]
    const tableHeadRow = [
        "Invoice",
        "Amount",
        "Paid from wallet",
        "Status",
        "",
    ];


    // const extractedArray = reportsHistory.map((item)=>({ }))

    const extractedArray = reimbursementStatus.map((item, index) => ({
        id:item.id,
        "Invoice": (
            <HStack>
                <Box p={2} bg={"#ebe0f8"} rounded={"full"}>
                    <LuScrollText color='#6311CB' />
                </Box>
                <Text mb={0} fontWeight={600} fontSize={"xs"}>
                    Food for June 30
                </Text>
            </HStack>
        ),
        "Amount": (
            <Text mb={0} fontWeight={500} fontSize={"xs"} color={"#00A438"}>
                ₹ 5000
            </Text>
        ),
        "Paid from wallet": (
            <Text mb={0} fontSize={"xs"}>
                Food
            </Text>
        ),

        "Status": (
            <Tag
                my={1}
                size={"sm"}
                borderRadius="full"
                color={
                    item?.orderStatus === "Approved"
                        ? "#027A48"
                        : item?.orderStatus === "Fully reimbursed"
                            ? "#3725EA"
                            : "red"
                }
            >
                Approved
            </Tag>
        ),
        "": (
            <Text mb={0} fontWeight={600} fontSize={"xs"} color={"#00A438"}>
                Download
            </Text>
        ),

    }));

    return (
        <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>

            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"} mb={4}>
                <HStack justifyContent={"space-between"} mb={4}>
                    <Box>
                        <Text mb={0} fontSize={"sm"} fontWeight={600}>
                            Food expense June 2024
                        </Text>
                    </Box>
                    <Box>
                        <Tag
                            size={"sm"}
                            py={2}
                            rounded="full"
                            color={"#6311CB"}
                            bg={"#f1eafa"}
                        >
                            <HStack>
                                <GoDotFill size={10} />
                                <Text mb={0}>
                                    Fully Reimbursed
                                </Text>
                            </HStack>

                        </Tag>
                    </Box>
                </HStack>
                <Divider />

                <HStack justifyContent={"space-between"}>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Report by
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            Kartikey Gautam
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Report amount
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            ₹ 10,000
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Date & time
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            22 June, 2024
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Approver
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            Pooja Patade
                        </Text>
                    </VStack>
                    <VStack alignItems={"start"}>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Disburser
                        </Text>
                        <Text mb={0} color={"#696969"} fontSize={"xs"} fontWeight={500}>
                            Pooja Patade
                        </Text>
                    </VStack>
                </HStack>

            </Box>

            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"}>
                <HStack justifyContent={"space-between"} mb={4}>
                    <Box>
                        <Text mb={0} fontSize={"sm"} fontWeight={500}>
                            Bills for the report
                        </Text>
                    </Box>
                    <Box>
                    <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<FaArrowUpFromBracket />}
                                rightIcon={<ChevronDownIcon />}
                                fontSize={"xs"}
                                colorScheme="gray"
                                color={"gray.700"}
                                variant="outline"
                                size={"sm"}
                                me={2}
                            >
                                Export
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize={"sm"}><Image src={pdfIcon} me={2} /> Export as PDF</MenuItem>
                                <MenuItem fontSize={"sm"}><Image src={ExcelIcon} me={2} /> Export as Excel</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </HStack>
                <NormalTable
                    emptyMessage={`We don't have any reports available`}
                    tableHeadRow={tableHeadRow}
                    data={extractedArray}
                    isLoading={isLoading}
                    showRadioButton={true}
                    setSelectedRadio={setSelectedRadio}
                    selectedRadio={selectedRadio}
                />
            </Box>
        </Box>
    )
}

export default EmployeesViewRecentReportsView


