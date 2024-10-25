import React, { useContext, useEffect, useState } from "react";
import { OPACITY_ON_LOAD } from "../../Layout/animations";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Button,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tooltip,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AddIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { TiWarning } from "react-icons/ti";
import GlobalStateContext from "../../Contexts/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import FormField from "../../Components/FormField";
import { v4 as uuidv4 } from "uuid";
import AddIOCharges from "./AddIOCharges";
import FormInputMain from "../../Components/FormInputMain";
import DataTable from "../../Components/DataTable/DataTable";
import { debounce } from "../Master/Sponser/AddSponser";
import CustomAlertDialog from "../../Components/CustomAlertDialog";
import { formatDate } from "../../Components/Functions/UTCConvertor";
import InvestmentDocuments from "./InvestmentDocuments";

const schema = yup.object().shape({
  ioName: yup.string().required("Arabic name is required"),
  ioNameArabic: yup.string().required("Investment Object name is required"),
  discription: yup.string().required("Sponser name is required"),
  discriptionArabic: yup.string().required("Arabic name is required"),
  typeName: yup.string().required("Investment Object name is required"),
  typeNameArabic: yup.string().required("Sponser name is required"),
  sponserName: yup.string().required("Arabic name is required"),
  sponserNameArabic: yup
    .string()
    .required("Investment Object name is required"),
  holdingPeriod: yup.string().required("Sponser name is required"),
  ioStartus: yup.string().required("Investment Object name is required"),
  ioStartusArabic: yup.string().required("Sponser name is required"),
  goalAmount: yup.string().required("Arabic name is required"),
  closingDate: yup.string().required("Investment Object name is required"),
  minInvestment: yup.string().required("Sponser name is required"),
  maxInvestment: yup.string().required("Arabic name is required"),
  expectedReturn: yup.string().required("Investment Object name is required"),
  originalValue: yup.string().required("Sponser name is required"),
  keyname: yup.string().required("Arabic name is required"),
  keyNameArabic: yup.string().required("Investment Object name is required"),
  keyDescription: yup.string().required("Sponser name is required"),
  keyDescriptionArabic: yup.string().required("Sponser name is required"),
  docType: yup.string().required("Sponser name is required"),

  destributedAmount: yup
    .number()
    .required("Distributed Amount is required")
    .positive("Must be a positive number"),
  year: yup.string().required("Year is required"),
  tenure: yup
    .number()
    .required("Tenure is required")
    .positive("Must be a positive number"),
  annualReturn: yup
    .number()
    .required("Annual Return is required")
    .positive("Must be a positive number"),
  miniInvest: yup
    .number()
    .required("Minimum Invest is required")
    .positive("Must be a positive number"),
  quaterly: yup.string().required("Quaterly is required"),
  targetClose: yup.date().required("Target close date is required"),
  annualyield: yup
    .number()
    .required("Annual Yield is required")
    .positive("Must be a positive number"),
  iconUpload: yup.mixed().required("Profile image is required"),
  bannerImages: yup.mixed().required("Profile image is required"),
  otherImage: yup.mixed().required("Profile image is required"),
  docAttach: yup.mixed().required("Profile image is required"),
  videos: yup.mixed().required("Profile image is required"),
});

const startYear = 2024;
const endYear = 2124;
const years = Array.from(
  { length: endYear - startYear + 1 },
  (_, i) => startYear + i
).map((year) => ({ value: year, label: year }));

const CreateIO = () => {
  const navigate = useNavigate();
  const { create, setCreate, sponser, setSponser, investment, setInvestment } =
    useContext(GlobalStateContext);
  const [bannerImageData, setBannerImageData] = useState(null);
  const [otherImageData, setOtherImageData] = useState(null);
  const [selectedBannerImageData, setSelectedBannerImageData] = useState(null);
  const [selectedOtherImageData, setSelectedOtherImageData] = useState(null);
  const [charges, setCharges] = useState([]);
  const [totalCharge, setTotalCharge] = useState(0.0);
  const [totalAmount, setTotalAmount] = useState(0.0);

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [actionId, setActionId] = useState(false);
  const [mouseEntered, setMouseEntered] = useState(false);
  const [mouseEnteredId, setMouseEnteredId] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const tableHeadRow = [
    "Sponsorer name",
    "Address",
    "Mobile no",
    "Created At",
    "Action",
  ];

  const handleUpdateStatus = debounce((id) => {
    setCreate((prevCreate) =>
      prevCreate.map((create) =>
        create.id === id ? { ...create, status: !create.status } : create
      )
    );
    toast({
      render: () => <ToastBox message={"Status changed succesfully.!"} />,
    });
  }, 300);

  const filteredData = create?.filter((item) => {
    // Filter by name (case insensitive)
    const name = item.sponserName;
    const searchLower = searchTerm.toLowerCase();
    const nameMatches = name.toLowerCase().includes(searchLower);

    return nameMatches;
  });

  const handleDelete = () => {
    const updatedCreate = create.filter((create) => create.id !== actionId);

    setTimeout(() => {
      setSponser(updatedCreate);
      setDeleteAlert(false);
      setIsLoading(false);
    }, 100);
    setIsLoading(true);
  };

  const extractedArray = filteredData?.map((item) => ({
    id: item?.id,
    "Sponsorer name": (
      <Text
        justifyContent={"left"}
        as={"span"}
        color={"teal.900"}
        fontWeight={"500"}
        className="d-flex align-items-center web-text-small"
      >
        "{item.sponserName}"
      </Text>
    ),
    Address: (
      <Box w={350} isTruncated={true}>
        <Text as={"span"} color={"teal.900"} fontWeight={"500"}>
          " {item.sponserAddress}"
        </Text>
      </Box>
    ),
    "Mobile no": (
      <Box w={"auto"} isTruncated={true}>
        <Text as={"span"} color={"teal.900"} fontWeight={"500"}>
          "{item.mobileNo}"
        </Text>
      </Box>
    ),

    "Created At": (
      <span className="d-flex justify-content-between align-items-center">
        <Text as={"span"} color={"gray.600"} fontWeight={"500"}>
          {formatDate(item.createdAt)}
        </Text>
      </span>
    ),
    Action: <Box display={"flex"} justifyContent={"space-between"}></Box>,
  }));


  const destributedAmount = Number(watch().destributedAmount) || 0;

  useEffect(() => {
    const calculateTotalCharge = () => {
      const totalChargeValue = charges.reduce(
        (acc, { value }) => acc + Number(value),
        0
      );
      setTotalCharge(totalChargeValue);
    };

    const calculateTotalAmount = () => {
      const totalChargeValue = charges.reduce(
        (acc, { value }) => acc + Number(value),
        0
      );
      setTotalAmount(destributedAmount + totalChargeValue);
    };

    calculateTotalCharge();
    calculateTotalAmount();
  }, [charges, destributedAmount]);

  const onSubmit = (data) => {
    // setValue("banner_image", selectedBannerImageData);
    data.banner_image = selectedBannerImageData;
    const updatedData = { ...data, status: "Available" };
    setInvestment([...investment, updatedData]);
    navigate("/view-io");
    reset();
  };

  // Extract options for the select input
  const createOptions = create.map((item) => ({
    value: item.sponserName,
    label: item.sponserName,
  }));

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    setBannerImageData(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedBannerImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  // Handler for file input
  const handleOtherImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImageData = [...(otherImageData || []), ...files]; // Ensure otherImageData is an array

    setOtherImageData(newImageData);

    const readers = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers)
      .then((results) => {
        setSelectedOtherImageData([
          ...(selectedOtherImageData || []),
          ...results,
        ]); // Ensure selectedOtherImageData is an array
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };
  // Function to remove a specific image
  const removeOtherImage = (index) => {
    const newImageData = otherImageData.filter((_, i) => i !== index);
    const newSelectedImageData = selectedOtherImageData.filter(
      (_, i) => i !== index
    );

    setOtherImageData(newImageData);
    setSelectedOtherImageData(newSelectedImageData);
  };

  const formFields = [
    {
      label: "IO Name (English)",
      placeHolder: " ",
      name: "ioName",
      type: "text",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "IO Name (Arabic)",
      placeHolder: " ",
      name: "ioNameArabic",
      type: "text",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "Description (English)",
      placeHolder: " ",
      name: "discription",
      type: "textarea",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "Description (Arabic)",
      placeHolder: " ",
      name: "discriptionArabic",
      type: "textarea",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "Investment Type (English)",
      placeHolder: " ",
      name: "typeName",
      type: "select",
      isRequired: true,
      section: " ",
      width: "49%",
      options: [
        {
          label: "option 1",
          value: "option 1",
        },
        {
          label: "option 2",
          value: "option 2",
        },
        {
          label: "option 3",
          value: "option 3",
        },
        {
          label: "option 4",
          value: "option 4",
        },
      ],
    },
    {
      label: "Investment Type (Arabic)",
      placeHolder: " ",
      name: "typeNameArabic",
      type: "select",
      isRequired: true,
      section: " ",
      width: "49%",
      options: [
        {
          label: "option 1",
          value: "option 1",
        },
        {
          label: "option 2",
          value: "option 2",
        },
        {
          label: "option 3",
          value: "option 3",
        },
        {
          label: "option 4",
          value: "option 4",
        },
      ],
    },
    {
      label: "Sponsorer Name (English)",
      placeHolder: " ",
      name: "sponserName",
      type: "text",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "Goal Amount (English)",
      placeHolder: " ",
      name: "goalAmount",
      type: "Number",
      isRequired: true,
      section: " ",
      width: "49%",
    },
    {
      label: "Minimum Investment Amount (English)",
      placeHolder: " ",
      name: "minInvestment",
      type: "number",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Maximum Investment Amount (English)",
      placeHolder: " ",
      name: "maxInvestment",
      type: "number",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Holding Period (English)",
      placeHolder: " ",
      name: "holdingPeriod",
      type: "number",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Expected Return Estimated (English)",
      placeHolder: " ",
      name: "expectedReturn",
      type: "number",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Closing Date (English)",
      placeHolder: " ",
      name: "closingDate",
      type: "date",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "IO Status (English)",
      placeHolder: " ",
      name: "minInvestment",
      type: "text",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
  ];

  const keyMerits = [
    {
      label: "Name (English)",
      placeHolder: " ",
      name: "keyname",
      type: "text",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Name (Arabic)",
      placeHolder: " ",
      name: "keyNameArabic",
      type: "text",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Icon",
      placeHolder: " ",
      name: "iconUpload",
      type: "fileNormal",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Description (English)",
      placeHolder: " ",
      name: "keyDescription",
      type: "textarea",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Description (Arabic)",
      placeHolder: " ",
      name: "keyDescriptionArabic",
      type: "textarea",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
  ];

  const images = [
    {
      label: "Banner Images ",
      placeHolder: " ",
      name: "bannerImages",
      type: "fileNormal",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },

    {
      label: "Other Images",
      placeHolder: " ",
      name: "otherImage",
      type: "fileNormal",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
  ];

  const documents = [
    {
      label: "Type",
      placeHolder: " ",
      name: "docType",
      type: "text",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
    {
      label: "Attachment",
      placeHolder: " ",
      name: "type",
      type: "docAttach",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
  ];

  const Videos = [
    {
      label: "Videos",
      placeHolder: " ",
      name: "videos",
      type: "fileNormal",
      isRequired: true,
      section: " ",
      width: "32.3%",
    },
  ];

  const groupedFields = formFields.reduce((groups, field) => {
    const { section } = field;
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(field);
    return groups;
  }, {});

  const groupedFieldsTwo = keyMerits.reduce((groups, field) => {
    const { section } = field;
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(field);
    return groups;
  }, {});

  const groupedFieldsThree = images.reduce((groups, field) => {
    const { section } = field;
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(field);
    return groups;
  }, {});

  const groupedFieldsFour = documents.reduce((groups, field) => {
    const { section } = field;
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(field);
    return groups;
  }, {});

  const groupedFieldsFive = Videos.reduce((groups, field) => {
    const { section } = field;
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(field);
    return groups;
  }, {});

  return (
    <Box {...OPACITY_ON_LOAD} overflowY={"scroll"} height={"100vh"} pb={14}>
      <Tabs mt={4}>
        <TabList>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            IO Details
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            Investment Documents
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            Key Merits
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            IO artifacts
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            Investors
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            IO Cash detail
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            IO NAV detail
          </Tab>
          <Tab
            fontSize={"sm"}
            _selected={{ color: "#004118", borderBottom: "2px solid #38a169" }}
          >
            Distribution
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormInputMain
              width={"23.8%"}
              groupedFields={groupedFields}
              control={control}
              errors={errors}
            ></FormInputMain>
          </TabPanel>
          <TabPanel>
            <Box display={'flex'} justifyContent={'space-between'} mb={4}>
              <Input
                type="search"
                width={300}
                placeholder="Search..."
                size="sm"
                rounded="sm"
                focusBorderColor="green.500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button leftIcon={<AddIcon />} onClick={onOpen}
                size={"sm"}
                // width={"44.5%"}
                fontSize={'xs'}
                rounded={"sm"}
                colorScheme='green'
              >
                 Add
              </Button>
              <InvestmentDocuments isOpen={isOpen} onClose={onClose} firstField={firstField} />
            </Box>
            <DataTable
              emptyMessage={`We don't have any Sponers `}
              tableHeadRow={tableHeadRow}
              data={extractedArray}
              isLoading={isLoading}
              viewActionId={actionId}
              setViewActionId={setActionId}
              // totalPages={10}

              setMouseEnteredId={setMouseEnteredId}
              setMouseEntered={setMouseEntered}
            />
            <CustomAlertDialog
              onClose={() => setDeleteAlert(false)}
              isOpen={deleteAlert}
              message={"Are you sure you want to delete sponers?"}
              alertHandler={handleDelete}
              isLoading={isLoading}
            />
          </TabPanel>
          <TabPanel>
            <FormInputMain
              width={"23.8%"}
              groupedFields={groupedFieldsThree}
              control={control}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
            ></FormInputMain>
          </TabPanel>
          <TabPanel>
            <FormInputMain
              width={"23.8%"}
              groupedFields={groupedFieldsFour}
              control={control}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
            ></FormInputMain>
          </TabPanel>
          <TabPanel>
            <FormInputMain
              width={"23.8%"}
              groupedFields={groupedFieldsFive}
              control={control}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
            ></FormInputMain>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CreateIO;
