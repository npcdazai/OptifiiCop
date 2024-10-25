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
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { TiTick } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";

const tableData = [
  {
    id:1,
    datetime:"Jan 12, 2022, 10 am",
    merchant:"Dine in",
    category :"Food",
    paymentmethod :"Expense card",
    reimburseAmount :"₹ 5000",
  },
  {
    id:2,
    datetime:"Jan 12, 2022, 10 am",
    merchant:"Airtel postpaid",
    category :"telecom",
    paymentmethod :"Expense card",
    reimburseAmount :"₹ 5000",
  },
  {
    id:3,
    datetime:"Jan 12, 2022, 10 am",
    merchant:"Lorem ipsum dolor  adipiscing elit.",
    category :"Fuel",
    paymentmethod :"Expense card",
    reimburseAmount :"₹ 5000",
  },
  {
    id:4,
    datetime:"Jan 12, 2022, 10 am",
    merchant:"Airtel postpaid",
    category :"Telecom",
    paymentmethod :"Cash",
    reimburseAmount :"₹ 5000",
  },
  {
    id:3,
    datetime:"Jan 12, 2022, 10 am",
    merchant:"Lorem ipsum dolor  adipiscing elit.",
    category :"Fuel",
    paymentmethod :"Cash",
    reimburseAmount :"₹ 5000",
  },
]

const ReimbursementRequestView = () => {
  const [alertStatus, setAlertStatus] = useState(null);


  const handleApprove = () => {
    setAlertStatus("success");
  };

  const handleReject = () => {
    setAlertStatus("error");
  };

  const { employees } = useContext(GlobalStateContext);
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
    "Sr. No",
    "Date & time",
    "Merchant",
    "Category",
    "Payment mode",
    "Reimburse Amount",
    "Bills",
  ];

  // const extractedArray = reportsHistory.map((item)=>({ }))

  const extractedArray = tableData.map((item, index) => ({
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
    "Date & time": item?.datetime,
    "Merchant": item?.merchant,
    "Category": item?.category,
    "Payment mode": item?.paymentmethod,
    "Reimburse Amount": item?.reimburseAmount,
    Bills: (
      <HStack>
        <Box p={2} bg={"#ebe0f8"} rounded={"full"}>
          <LiaFileInvoiceSolid color="#6311CB" fontSize={"18px"} />
        </Box>
        <Text color={"#3725EA"} fontSize={"xs"} fontWeight={500} mb={0}>
          Invoice243
        </Text>
      </HStack>
    ),
    Action: (
      <HStack>
        <Button
          display="flex"
          flexDirection="row"
          fontSize="small"
          fontWeight={400}
          p={2}
          bg={"#00A43824"}
          rounded={"medium"}
          borderRadius="7.25px"
          border="1px solid #00A438"
          color="#00A438"
        >
          <TiTick color="#00A438" />
          Approve
        </Button>
        <Button
          display="flex"
          flexDirection="row"
          fontSize="small"
          fontWeight={400}
          p={2}
          bg={"#EE1B241A"}
          border="1px solid #EE1B24"
          borderRadius="7.25px"
          color="#EE1B24"
          gap={1}
        >
          <ImCancelCircle color="red" />
          Reject
        </Button>
      </HStack>
    ),
  }));

  return (
    <Box h={"100%"} p={4} {...OPACITY_ON_LOAD} overflowX={"scroll"}>
      {/* <MiniHeader
        title={"My Requests"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        backButton={true}
      /> */}
      {alertStatus === "success" && (
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

      {alertStatus === "error" && (
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
          <Box
            bg={"#e5f6eb"}
            border={"1px solid #00A438"}
            px={4}
            py={1}
            rounded={"md"}
            h={14}
            flex={1}
          >
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
          <HStack
            bg={"#00A438"}
            px={4}
            py={1}
            rounded={"md"}
            h={14}
            justifyContent={"start"}
            flex={1}
          >
            <Text color={"#fff"} fontSize={"sm"} mb={0} fontWeight={400}>
              In progress
            </Text>
          </HStack>
          <VStack
            bg={"#f9f9f9"}
            px={4}
            py={1}
            rounded={"md"}
            h={14}
            spacing={1}
            alignItems={"start"}
            flex={1}
          >
            <Text color={"#79797B"} fontSize={"sm"} mb={0} fontWeight={400}>
              Pending
            </Text>
            <Text color={"#79797B"} fontSize={"xs"} mb={0} fontWeight={400}>
              By Sr. Manager
            </Text>
          </VStack>
          <VStack
            bg={"#f9f9f9"}
            px={4}
            py={1}
            rounded={"md"}
            h={14}
            spacing={1}
            alignItems={"start"}
            flex={1}
          >
            <Text color={"#79797B"} fontSize={"sm"} mb={0} fontWeight={400}>
              Pending
            </Text>
            <Text color={"#79797B"} fontSize={"xs"} mb={0} fontWeight={400}>
              By Sr. Manager
            </Text>
          </VStack>
          <VStack
            bg={"#f9f9f9"}
            px={4}
            py={1}
            rounded={"md"}
            h={14}
            spacing={1}
            alignItems={"start"}
            flex={1}
          >
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
          <Box>
            <Text color={"#667085"} fontSize={"xs"} mb={1}>
              Amount to be reimbursed
            </Text>
            <Text color={"#252C32"} fontSize={"sm"} fontWeight={500} mb={0}>
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
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Box>
                <Text color={"#000000"} fontSize={"sm"} mb={0} fontWeight={500}>
                  Pooja Shah
                </Text>
                <Text color={"#667085"} fontSize={"xs"} mb={0} fontWeight={400}>
                  poojashah @wdipl.com
                </Text>
              </Box>
            </HStack>

            <Text color={"#252C32"} fontSize={"xs"} mb={0} fontWeight={400}>
              Duration - 10 June - 28 June
            </Text>
          </Box>
          <Box textAlign={"end"}>
            <Text color={"#667085"} fontSize={"xs"} fontWeight={500} mb={2}>
              Pending approval
            </Text>
            <HStack mb={4} alignItems={"start"}>
              <Box>
                <Text color={"#000000"} fontSize={"sm"} mb={0} fontWeight={500}>
                  Manav sain
                </Text>
                <Text color={"#667085"} fontSize={"xs"} mb={0} fontWeight={400}>
                  manavsain@wdipl.com
                </Text>
              </Box>
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </HStack>
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

export default ReimbursementRequestView;
