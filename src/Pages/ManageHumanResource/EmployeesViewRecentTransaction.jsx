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
    Button
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

const EmployeesViewRecentTransaction = () => {

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
        "Wallet Name",
        "Card",
        "Date & time",
        "Amount",
        "Merchant",
    ];

    // Dynamically map the reports to the table
    const extractedArrayTransaction = recentTransaction.map((item, index) => ({
        "Wallet Name": (
            <HStack>
                <Box p={2} bg={"#ebe0f8"} rounded={"full"}>
                    <MdNoFood color='#6311CB' />
                </Box>
                <Text mb={0} fontSize={"xs"}>
                    {item?.walletName || "N/A"}
                </Text>
            </HStack>
        ),
        "Card": (
            <Text mb={0} fontWeight={600} fontSize={"xs"}>
                {item?.Card || "N/A"}
            </Text>
        ),
        "Date & time": (
            <Text mb={0} fontSize={"xs"}>
                {item?.dateTime || "N/A"}
            </Text>
        ),
        "Amount": (
            <Text mb={0} fontWeight={500} fontSize={"xs"} color={"#00A438"}>
                {item?.Amount || "N/A"}
            </Text>
        ),
        "Merchant": (
            <Text mb={0} fontSize={"xs"}>
                {item?.Merchant || "N/A"}
            </Text>
        ),
    }));


    return (
        <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"}>
                <HStack justifyContent={"space-between"} mb={4}>
                    <Box>
                        <HStack>
                            <Image
                                borderRadius='full'
                                boxSize='40px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                            <VStack spacing={"1"} alignItems={"start"}>
                                <Text mb={0} fontSize={"md"} fontWeight={500}>
                                    Pooja Shah
                                </Text>
                                <Text fontSize={"xs"} color={"#999999"} mb={0}>Design - UI/UX Designer</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box>
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
                    </Box>
                </HStack>
                <Divider />
                <HStack w={"100%"} justifyContent={"space-between"} mb={4}>
                    <Box>
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
                    </Box>
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
                />
            </Box>
        </Box>
    );
};

export default EmployeesViewRecentTransaction;
