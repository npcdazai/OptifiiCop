import {
    Box, HStack, Text, Tag,
    Image,
    VStack,
    InputGroup,
    InputLeftElement,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
    Button,
    Flex,
    Select,
    Checkbox
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import MiniHeader from '../../Components/MiniHeader'
import { LuListFilter, LuScrollText } from "react-icons/lu";
import NormalTable from "../../Components/DataTable/NormalTable";
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { FaArrowUpFromBracket } from 'react-icons/fa6';
import { BsFilterRight } from 'react-icons/bs';
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg"
import { MdNoFood } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';

const EmployeesTransactions = () => {

    const { recentTransaction } = useContext(GlobalStateContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // ===============================[ Table Header ]
    const tableHeadRow = [
        "Sr. No",
        "Wallet Name",
        "Email Address",
        "Wallet",
        "Amount",
        "Date & time",
    ];

    // Dynamically map the reports to the table
    const extractedArrayTransaction = recentTransaction.map((item, index) => ({
        "Sr. No": (
            <Text
            as={"span"}
            display={"flex"}
            gap={2}
            alignItems={"center"}
            fontSize={"xs"}
        >
            {index + 1}
        </Text>
        ),
        "Wallet Name": (
            <HStack>
                <Image
                    borderRadius='full'
                    boxSize='30px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <VStack spacing={0} alignItems={"start"}>
                    <Text mb={0} fontSize={"xs"}>
                        Olivia Rhye
                    </Text>
                    <Text mb={0} fontSize={"10px"}>
                        WD-887
                    </Text>
                </VStack>
            </HStack>
        ),
        "Email Address": (
            <Text mb={0} fontWeight={500} fontSize={"xs"}>
                in***@wdimails.com
            </Text>
        ),
        "Date & time": (
            <Text mb={0} fontSize={"xs"}>
                2 June 2024, 10 am
            </Text>
        ),
        "Amount": (
            <Text mb={0} fontWeight={500} fontSize={"xs"} color={"#00A438"}>
                {item?.Amount || "N/A"}
            </Text>
        ),
        "Wallet": (
            <Text mb={0} fontSize={"xs"}>
                Food
            </Text>
        ),
    }));


    return (
        <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"}>
                <HStack justifyContent={"space-between"} mb={4}>
                    <InputGroup width={300} size="sm">
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            type="search"
                            placeholder="Type to search..."
                            rounded="md"
                            focusBorderColor="#3725EA"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>


                    <HStack>
                        <Box
                            fontSize={"sm"}
                            display={"flex"}
                            alignItems={"center"}
                            bg={"#F2EEF8"}
                            p={"6px 10px"}
                            rounded={"md"}
                        >
                            <Text
                                as={"span"}
                                display={"flex"}
                                alignItems={"center"}
                                gap={1}
                            >
                                <AiOutlineCalendar fontSize={"16px"} /> Time Period :
                            </Text>
                            <Text
                                as={"span"}
                                display={"flex"}
                                alignItems={"center"}
                                color={"#6311CB"}
                                fontWeight={500}
                                mx={2}
                            >
                                <Text as={"span"} me={5}>
                                    Feb 20 - Jan 30, 2024{" "}
                                </Text>
                                <IoMdArrowDropdown />
                            </Text>
                        </Box>

                        <Menu>
                            <MenuButton
                                as={Button}
                                // leftIcon={<LuListFilter fontSize={"16px"} />}
                                rightIcon={<ChevronDownIcon />}
                                fontSize={"xs"}
                                color={"gray.700"}
                                variant="outline"
                                size={"sm"}
                                me={2}
                            >
                                Expense
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                                <MenuItem fontSize={"sm"}>Descending</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </HStack>
                <Divider />
                <HStack w={"100%"} justifyContent={"space-between"} mb={4}>
                    <HStack>
                        <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<BsFilterRight fontSize={"16px"} />}
                                rightIcon={<ChevronDownIcon />}
                                fontSize={"xs"}
                                color={"gray.700"}
                                variant="outline"
                                size={"sm"}
                                me={2}
                            >
                                Sort
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                                <MenuItem fontSize={"sm"}>Descending</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
                            </MenuList>
                        </Menu>
                        <Flex align={'center'} gap={2}>
                            <Text as={'span'} fontSize={'xs'}>Show</Text>
                            <Select borderRadius={5} size={"sm"}>
                                <option value='10'>10</option>
                                <option value='30'>30</option>
                                <option value='50'>50</option>
                                <option value='80'>80</option>
                            </Select>
                            <Text as={'span'} fontSize={'xs'}>entries</Text>
                        </Flex>
                    </HStack>
                    <HStack>
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
                        <Menu>
                            <MenuButton
                                as={Button}
                                leftIcon={<LuListFilter fontSize={"16px"} />}
                                rightIcon={<ChevronDownIcon />}
                                fontSize={"xs"}
                                color={"gray.700"}
                                variant="outline"
                                size={"sm"}
                                me={2}
                            >
                                Filter
                            </MenuButton>
                            <MenuList>
                                <MenuItem fontSize={"sm"}>Ascending</MenuItem>
                                <MenuItem fontSize={"sm"}>Descending</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Viewed</MenuItem>
                                <MenuItem fontSize={"sm"}>Recently Added</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </HStack>
                <NormalTable
                    emptyMessage={`We don't have any reports available`}
                    tableHeadRow={tableHeadRow}
                    data={extractedArrayTransaction}
                    isLoading={isLoading}
                    showRadioButton={true}
                />
            </Box>
        </Box>
    );
};

export default EmployeesTransactions;
