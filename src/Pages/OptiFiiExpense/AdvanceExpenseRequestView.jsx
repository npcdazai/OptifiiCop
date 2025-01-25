import {
    Box,
    Button,
    HStack,
    VStack,
    Icon,
    Checkbox,
    Tag,
    TagLabel,
    Text,
    Image,
    useDisclosure,
    Alert,
    CloseButton,
    AlertDescription,
    Flex,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import MiniHeader from "../../Components/MiniHeader";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import NormalTable from "../../Components/DataTable/NormalTable";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiReceipt } from "react-icons/pi";
import { MdOutlineNoFood } from "react-icons/md";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import PrimaryButton from "../../Components/Buttons/PrimaryButton"
import SecondaryButton from "../../Components/Buttons/SecondaryButton"
import { FaCheck } from "react-icons/fa";

const AdvanceExpenseRequestView = () => {

    const [alertStatus, setAlertStatus] = useState(null);

    const handleApprove = () => {
        setAlertStatus('success');
    };

    const handleReject = () => {
        setAlertStatus('error');
    };

    const { AdvanceExpenseRequestView } = useContext(GlobalStateContext);
    const [isLoading, setIsLoading] = useState(false);

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
        "Date & time",
        "Merchant",
        "Category",
        "Payment mode",
        "Reimburse Amount",
        "Bills",
        "Action",
    ];

    // const extractedArray = reportsHistory.map((item)=>({ }))

    const extractedArray = AdvanceExpenseRequestView.map((item, index) => ({
        "Date & time": item?.DateTime,
        "Merchant": item?.Merchant,
        "Category": item?.Category,
        "Payment mode": item?.Paymentmode,
        "Reimburse Amount": item?.ReimburseAmount,
        "Bills": (
            <HStack
            >
                <Box p={2} bg={"#ebe0f8"} rounded={"full"}>
                    <LiaFileInvoiceSolid color="#6311CB" fontSize={"18px"} />
                </Box>
                <Text color={"#3725EA"} fontSize={"xs"} fontWeight={500} mb={0}>
                    Invoice243
                </Text>
            </HStack>
        ),
        "Action": (
            <Flex align={'center'} gap={3}>
                <Text
                    as={'span'}
                    py={2} px={3} borderRadius={5} border={'1px solid #00A438'} color={'#00A438'} bg={'#dbf2e3'}
                    display={'flex'}
                    align={'center'}
                    justifyContent={'center'}
                    gap={1.5}
                >
                    <Flex align={'center'} as="span">
                        <FaCheck />
                    </Flex>
                    Approve
                </Text>
                <Text
                    as={'span'}
                    py={2} px={3} borderRadius={5} border={'1px solid #EE1B24'} color={'#EE1B24'} bg={'#fee9ea'}
                    display={'flex'}
                    align={'center'}
                    justifyContent={'center'}
                    gap={1.5}
                >
                    <Flex align={'center'} as="span">
                        <RxCross2 />
                    </Flex>
                    Reject
                </Text>

            </Flex>
        )
    }));

    return (





        <Box h={"100%"} p={4} {...OPACITY_ON_LOAD} overflowX={"scroll"}>
            {/* <MiniHeader
        title={"My Requests"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      /> */}
            {alertStatus === 'success' && (
                <Alert status="success" bg="#6311CB" color="#fff" rounded={"md"} mb={4}>
                    <Box>
                        <HStack>
                            <IoMdCheckmark size={16} />
                            <Text fontSize="xs" mb={0} fontWeight={500}>
                                Approved by giftryt
                            </Text>
                        </HStack>
                    </Box>
                </Alert>
            )}

            {alertStatus === 'error' && (
                <Alert status="error" bg="#EE1B24" color="#fff" rounded={"md"} mb={4}>
                    <Box>
                        <HStack>
                            <RxCross2 size={16} />
                            <Text fontSize="xs" mb={0} fontWeight={500}>
                                Rejected by giftryt
                            </Text>
                        </HStack>
                    </Box>
                </Alert>
            )}
            <Box bg={"#fff"} p={4} rounded={"md"} boxShadow={"md"}>
                <HStack width={"100%"} mb={8}>
                    <Box bg={"#e5f6eb"} border={"1px solid #00A438"} px={4} py={1} rounded={"md"} h={14} flex={1}>
                        <HStack>
                            <IoMdCheckmark color="#00A438" />
                            <Text color={"#00A438"} fontSize={"sm"} mb={1} fontWeight={500}>
                                Approved
                            </Text>
                        </HStack>
                        <Text color={"#667085"} fontSize={"xs"} fontWeight={400} mb={0}>
                            By Sr. Manager
                        </Text>
                    </Box>
                    <HStack bg={"#00A438"} px={4} py={1} rounded={"md"} h={14} justifyContent={"start"} flex={1}>
                        <Text color={"#fff"} fontSize={"sm"} mb={0} fontWeight={400}>
                            In progress
                        </Text>
                    </HStack>
                    <VStack bg={"#f9f9f9"} px={4} py={1} rounded={"md"} h={14} spacing={1} alignItems={"start"} flex={1}>
                        <Text color={"#79797B"} fontSize={"sm"} mb={0} fontWeight={400}>
                            Pending
                        </Text>
                        <Text color={"#79797B"} fontSize={"xs"} mb={0} fontWeight={400}>
                            By Sr. Manager
                        </Text>
                    </VStack>
                    <VStack bg={"#f9f9f9"} px={4} py={1} rounded={"md"} h={14} spacing={1} alignItems={"start"} flex={1}>
                        <Text color={"#79797B"} fontSize={"sm"} mb={0} fontWeight={400}>
                            Pending
                        </Text>
                        <Text color={"#79797B"} fontSize={"xs"} mb={0} fontWeight={400}>
                            By Sr. Manager
                        </Text>
                    </VStack>
                    <VStack bg={"#f9f9f9"} px={4} py={1} rounded={"md"} h={14} spacing={1} alignItems={"start"} flex={1}>
                        <Text color={"#79797B"} fontSize={"sm"} mb={0} fontWeight={400}>
                            Pending
                        </Text>
                        <Text color={"#79797B"} fontSize={"xs"} mb={0} fontWeight={400}>
                            By Sr. Manager
                        </Text>
                    </VStack>

                </HStack>

                <HStack justifyContent={"space-between"} mb={6}>
                    <Box>
                        <Text color={"#667085"} fontSize={"xs"} mb={1}>
                            Report number : 1254587841
                        </Text>
                        <Text color={"#252C32"} fontSize={"sm"} mb={0} fontWeight={500}>
                            Reimbursement report 2024
                        </Text>
                    </Box>
                    <Box >
                        <Text color={"#667085"} fontSize={"xs"} mb={1}>
                            Amount to be reimbursed
                        </Text>
                        <Text color={"#252C32"} textAlign={'right'} fontSize={"sm"} fontWeight={500} mb={0}>
                            ₹ 50,000
                        </Text>
                    </Box>
                </HStack>

                <HStack justifyContent={"space-between"} mb={6}>
                    <Box>
                        <Text color={"#667085"} fontSize={"xs"} fontWeight={500} mb={2}>
                            Submitted by
                        </Text>
                        <HStack mb={4} alignItems={"start"}>
                            <Image
                                borderRadius='full'
                                boxSize='40px'
                                src='https://bit.ly/dan-abramov'
                                alt='Dan Abramov'
                            />
                            <Box>
                                <Text color={"#000000"} fontSize={"sm"} mb={0} fontWeight={500}>
                                    Pooja Shah
                                </Text>
                                <Text color={"#667085"} fontSize={"xs"} mb={0} fontWeight={400}>
                                    poojashah @optifii.com
                                </Text>
                            </Box>
                        </HStack>

                        <Text color={"#252C32"} fontSize={"xs"} mb={0} fontWeight={400}>
                            Duration - 10 June - 28 June
                        </Text>
                    </Box>
                </HStack>

                <NormalTable
                    emptyMessage={`We don't have any Sponers `}
                    tableHeadRow={tableHeadRow}
                    data={extractedArray}
                    isLoading={isLoading}
                    showRadioButton={true}
                />

                <HStack justifyContent={"end"} my={4} spacing={4}>
                    <SecondaryButton title="Reject" onClick={handleReject} />
                    <PrimaryButton title="Approve" onClick={handleApprove} />
                </HStack>

            </Box>

      

        </Box>
    );
};

export default AdvanceExpenseRequestView;
