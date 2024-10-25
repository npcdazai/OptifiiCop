import {
    Badge, Box, HStack, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text,
    Heading, Menu, MenuButton, MenuItem, MenuList, VStack, Button,
    Tag,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { OPACITY_ON_LOAD } from '../../Layout/animations'
import MiniHeader from '../../Components/MiniHeader'
import { GoDotFill } from 'react-icons/go'
import PayCard from '../../Components/PayCard'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import { BsPrinter } from 'react-icons/bs'
import { LuListFilter, LuScrollText } from "react-icons/lu";
import NormalTable from "../../Components/DataTable/NormalTable";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import pdfIcon from "../../assets/pdfIcon.svg";
import ExcelIcon from "../../assets/ExcelIcon.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowsAngleExpand, BsFilterRight } from "react-icons/bs";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import GlobalStateContext from '../../Contexts/GlobalStateContext'
import { MdDeleteOutline, MdNoFood, MdOutlineModeEdit } from 'react-icons/md'
import SecondaryButton from '../../Components/Buttons/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import SwitchButton from '../../Components/SwitchButton'



const EmployeesView = () => {

    const { reimbursementStatus, advanceStatus, walletExpense } = useContext(GlobalStateContext); 
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(true);


    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simulated delay

        return () => clearTimeout(timer);
    }, []);

    // ===============================[ Table Headers ]
    const tableHeadRow = [
        'Report name',
        'Report amount',
        'Date & time',
        'Order Status',
        'Approver',
        'Disburser',
        '',
    ];

    const tableHeadRowAdvance = [
        'Wallet Name',
        'Card',
        'Date & time',
        'Amount',
        'Merchant',
    ];

    const walletExpenseHeader = [
        'Wallet',
        'Wallet amount',
        'Balance remaining',
        'Status',
    ];

    // ===============================[ Extracted Data for Reimbursement Status ]
    const extractedArray = reimbursementStatus.map((item) => ({
        'Report name': (
            <HStack>
                <Box p={2} bg="#ebe0f8" rounded="full">
                    <LuScrollText color="#6311CB" />
                </Box>
                <Text mb={0} fontWeight={600} fontSize="xs">
                    {item.reportName || 'Food for June 30'}
                </Text>
            </HStack>
        ),
        'Report amount': (
            <Text mb={0} fontWeight={500} fontSize="xs" color="#00A438">
                ₹ {item.reportAmount || 5000}
            </Text>
        ),
        'Date & time': (
            <Text mb={0} fontSize="xs">
                {item.date || 'Jun 10, 2024'}
            </Text>
        ),
        'Status': (
            <Tag
                my={1}
                size="sm"
                borderRadius="full"
                color={
                    item.orderStatus === 'Approved'
                        ? '#027A48'
                        : item.orderStatus === 'Fully reimbursed'
                            ? '#3725EA'
                            : 'red'
                }
            >
                {item.orderStatus}
            </Tag>
        ),
        Approver: (
            <Text mb={0} fontSize="xs">
                {item.approver || 'Reethik Thota'}
            </Text>
        ),
        Disburser: (
            <Text mb={0} fontSize="xs">
                {item.disburser || 'Reethik Thota L1'}
            </Text>
        ),
        '': (
            <Text mb={0} size="xs" bg="#6311CB" rounded="md" p={1} fontWeight={400} color="#fff">
                View Reports
            </Text>
        ),
    }));

    // ===============================[ Extracted Data for Advance Status ]
    const extractedArrayAdvance = advanceStatus.map((item) => ({
        'Wallet Name': (
            <HStack>
                <Box p={2} bg="#ebe0f8" rounded="full">
                    <MdNoFood color="#6311CB" />
                </Box>
                <Text mb={0} fontSize="xs">
                    {item.walletName || 'Food'}
                </Text>
            </HStack>
        ),
        Card: (
            <Text mb={0} fontWeight={600} fontSize="xs">
                {item.card || 'Visa card  **** 4831'}
            </Text>
        ),
        'Date & time': (
            <Text mb={0} fontSize="xs">
                {item.date || 'Jun 10, 2024'}
            </Text>
        ),
        Amount: (
            <Text mb={0} fontWeight={500} fontSize="xs" color="#00A438">
                ₹ {item.amount || 5000}
            </Text>
        ),
        Merchant: (
            <Text mb={0} fontSize="xs">
                {item.merchant || 'Dine in'}
            </Text>
        ),
    }));

    // ===============================[ Wallet Expense Table ]
    const extractedWalletExpense = walletExpense.map((item, index) => ({
        Wallet: (
          <HStack key={`wallet-${index}`}>
            <Box p={2} bg="#ebe0f8" rounded="full">
              <MdNoFood color="#6311CB" />
            </Box>
            <Text mb={0} fontSize="xs">
              {item.wallet || 'Food'} {/* Render wallet name */}
            </Text>
          </HStack>
        ),
        'Wallet amount': (
          <Text key={`walletAmount-${index}`} mb={0} color={"#00A438"} fontSize="xs">
             {item.walletAmount || 5000} {/* Render walletAmount */}
          </Text>
        ),
        'Balance remaining': (
          <Text key={`balance-${index}`} mb={0} color={"#00A438"} fontSize="xs">
            {item.balanceRemaining || '₹ 2000'} {/* Render balanceRemaining */}
          </Text>
        ),
        Status: (
            <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <SwitchButton isSwitchOn={isSwitchOn} setIsSwitchOn={setIsSwitchOn} />
          </Box>
        ),
      }));



    return (
        <Box as={"span"} {...OPACITY_ON_LOAD} p={4} pb={3} overflowX={"scroll"}>
            <MiniHeader backButton={true} title={""} />
            <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"}>
                <HStack justifyContent={"space-between"}>
                    <Text color={"#777777"} fontWeight={400} fontSize={"xs"} mb={4}>
                        Employee Details
                    </Text>
                    <HStack>
                        <SecondaryButton
                            leftIcon={<MdOutlineModeEdit size={16} />}
                            title={"Edit"} />
                        <SecondaryButton
                            border={"1px solid #EE1B24"}
                            color={"#EE1B24"}
                            leftIcon={<MdDeleteOutline size={16} />}
                            title={"Delete"} />
                    </HStack>
                </HStack>

                <HStack spacing={6} alignItems={"start"}>
                    <HStack spacing={4} alignItems={"start"}>
                        <Image
                            borderRadius='full'
                            boxSize='80px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <VStack spacing={"1"} alignItems={"start"}>
                            <Text mb={0} fontSize={"md"} fontWeight={500}>
                                Pooja Shah
                            </Text>
                            <Text fontSize={"xs"} color={"#999999"} mb={0}>Design - UI/UX Designer</Text>
                            <Text mb={0} fontSize={"xs"} fontWeight={500}>
                                Employee ID : WD-0067
                            </Text>
                            <Text fontSize={"xs"} color={"#999999"}>Member Since : 1st Jan 2022</Text>
                        </VStack>

                        <Badge
                            bg={"#ebf8ef"}
                            color={"#00A438"}
                            fontSize={"xs"}
                            borderRadius={"full"}
                            border={"1px solid #00A438"}
                            fontWeight={400}
                            py={1}
                            px={3}
                        >
                            <HStack>
                                <GoDotFill color={"#00A438"} />
                                <Text mb={0}>Active</Text>
                            </HStack>
                        </Badge>
                    </HStack>
                    <Box
                        borderLeft="1px dashed #BCBCBC"
                        pl={6}
                    >
                        <HStack mb={2}>
                            <Text fontSize={"xs"} color={"#999999"} mb={0}>Phone :</Text>
                            <Text mb={0} fontSize={"xs"} fontWeight={500}>
                                +91 4578451245
                            </Text>
                        </HStack>
                        <HStack mb={2}>
                            <Text fontSize={"xs"} color={"#999999"} mb={0}>Email :</Text>
                            <Text mb={0} fontSize={"xs"} fontWeight={500}>
                                poojashah@wdipl.com
                            </Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={"xs"} color={"#999999"} mb={0}>Grade :</Text>
                            <Text mb={0} fontSize={"xs"} fontWeight={500}>
                                A01
                            </Text>
                        </HStack>
                    </Box>

                </HStack>
            </Box>
            <HStack spacing={4} alignItems={"start"} my={4}>
                <Box shadow={'md'} p={4} bg={'#fff'} rounded={"md"}>
                    <Text color={"#777777"} fontWeight={400} fontSize={"xs"} mb={4}>
                        Card Details
                    </Text>

                    <HStack spacing={6} alignItems={"start"}>
                        <HStack spacing={8} alignItems={"center"}>
                            <PayCard />

                            <VStack alignItems={"start"} spacing={10}>
                                <Box>
                                    <Text fontSize={"sm"} color={"#999999"} mb={1}>Card ID</Text>
                                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                                        0067445
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={"sm"} color={"#999999"} mb={1}>Card limit</Text>
                                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                                        ₹ 10,000
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize={"sm"} color={"#999999"} mb={1}>Card type</Text>
                                    <Text mb={0} fontSize={"sm"} fontWeight={500}>
                                        Reloadable
                                    </Text>
                                </Box>
                            </VStack>
                        </HStack>


                    </HStack>
                </Box>
                <Box w={"60%"} shadow={'md'} p={4} bg={'#fff'} rounded={"md"} flex={1}>
                    <HStack justifyContent={"space-between"} mb={4}>
                        <Text color={"#777777"} fontWeight={400} fontSize={"xs"} mb={0}>
                            Wallets
                        </Text>
                        <PrimaryButton
                            leftIcon={<BsPrinter size={"16"} />}
                            title={"Pull back funds"}
                            onClick={()=>navigate("/employees/view/wallet-pull-back-funds")}
                        />
                    </HStack>
                    <Box>
                        <Tabs  position='relative' variant='unstyled'>
                            <TabList>
                                <Tab
                                    color={"#313039"}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    mr={6}
                                    _selected={{
                                        color: "#5E0FCD",
                                    }}>
                                    Expense
                                </Tab>
                                <Tab
                                    color={"#313039"}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    mr={6}
                                    _selected={{
                                        color: "#5E0FCD",
                                    }}>Benefit</Tab>
                                <Tab
                                    color={"#313039"}
                                    fontSize={"sm"}
                                    fontWeight={500}
                                    mr={6}
                                    _selected={{
                                        color: "#5E0FCD",
                                    }}>Gift & reward</Tab>
                            </TabList>
                            <TabIndicator mt='-1.5px' height='2px' bg='#5E0FCD' borderRadius='1px' />
                            <TabPanels>
                                <TabPanel px={0}>
                                    <NormalTable
                                        emptyMessage={`We don't have any Sponers `}
                                        tableHeadRow={walletExpenseHeader}
                                        data={extractedWalletExpense}
                                        isLoading={isLoading}
                                    />
                                </TabPanel>
                                <TabPanel px={0}>
                                    <NormalTable
                                        emptyMessage={`We don't have any Sponers `}
                                        tableHeadRow={walletExpenseHeader}
                                        data={extractedWalletExpense}
                                        isLoading={isLoading}
                                    />
                                </TabPanel>
                                <TabPanel px={0}>
                                    <NormalTable
                                        emptyMessage={`We don't have any Sponers `}
                                        tableHeadRow={walletExpenseHeader}
                                        data={extractedWalletExpense}
                                        isLoading={isLoading}
                                    />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>

                </Box>

            </HStack>
            {/* dhbfdbf */}

            <Box
                rounded={"xl"}
                py={3}
                // pb={0}
                display={"flex"}
                flexDirection={"column"}
                bg={"#fff"}
                shadow={"md"}
                mb={5}
            >
                <VStack px={3} alignItems={"start"} gap={0}>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        w={"100%"}
                    >
                        <Heading fontSize={"md"} fontWeight={500}>
                            Recent Reports
                        </Heading>
                        <HStack mb={3} spacing={4}>
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
                                    leftIcon={<FaArrowUpFromBracket />}
                                    rightIcon={<ChevronDownIcon />}
                                    fontSize={"xs"}
                                    colorScheme="gray"
                                    color={"gray.700"}
                                    variant="outline"
                                    size={"sm"}
                                >
                                    Export
                                </MenuButton>
                                <MenuList>
                                    <MenuItem fontSize={"sm"}>
                                        <Image src={pdfIcon} me={2} /> Export as PDF
                                    </MenuItem>
                                    <MenuItem fontSize={"sm"}>
                                        <Image src={ExcelIcon} me={2} /> Export as Excel
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <BsArrowsAngleExpand
                                onClick={() => navigate("/employees/view/recent-reports")}
                                as={Button}
                                color={"#6311CB"}
                                size={18}
                                cursor={"pointer"}
                            />
                        </HStack>
                    </Box>
                </VStack>

                <NormalTable
                    emptyMessage={`We don't have any reports `}
                    tableHeadRow={tableHeadRow}
                    data={extractedArray}
                    isLoading={isLoading}
                />
            </Box>

            <Box
                rounded={"xl"}
                py={3}
                // pb={0}
                display={"flex"}
                flexDirection={"column"}
                bg={"#fff"}
                shadow={"md"}
            >
                <VStack px={3} alignItems={"start"} gap={0}>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        w={"100%"}
                    >
                        <Heading fontSize={"md"} fontWeight={500}>
                            Recent Transaction
                        </Heading>
                        <HStack mb={3} spacing={4}>
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
                            <BsArrowsAngleExpand
                                onClick={() => navigate("/employees/view/recent-transaction")}
                                as={Button}
                                color={"#6311CB"}
                                size={18}
                                cursor={"pointer"}
                            />
                        </HStack>
                    </Box>
                </VStack>
                <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={tableHeadRowAdvance}
                    data={extractedArrayAdvance}
                    isLoading={isLoading}
                />
            </Box>

        </Box>
    )
}

export default EmployeesView


