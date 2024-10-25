import React, { useState } from 'react';
import { Box, Text, HStack, Image, Checkbox, List, ListItem, ListIcon, IconButton, Button, useToast, useDisclosure } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import oBenefits from "../../assets/o-benefits.svg";
import oExpense from "../../assets/o-expense.svg";
import oGift from "../../assets/o-gift.svg";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useCorpReggisterMutation } from '../../Services/on.board.service';
import ToastBox from '../../Components/ToastBox';
import OnboardingSelectPackageModal from './OnboardingSelectPackageModal';

const OnboardingSelectPackage = ({
    corpData,
    setCorpData,
    setActiveStep,
    activeStep,
    steps,
    handleNext,
}) => {

    const navigate = useNavigate()
    const toast = useToast();
    const [ expence, setExpence ] = useState(false)
    const [ gifting, setGifting ] = useState(false)
    const [ benefits, setBenefits ] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [onBoard, setOnBoard] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()


const packages = [
    {
        id: 1,
        img: oExpense, 
        title: "OptiFii Expense",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
        ],
        onChange:()=>setExpence(!expence)
    },
    {
        id: 2,
        img: oBenefits,
        title: "OptiFii Benefits",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
        ],
        onChange:()=>setBenefits(!benefits)
    },
    {
        id: 3,
        img: oGift, 
        title: "OptiFii Gift & Vouchers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        benefits: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
        ],
        onChange:()=>setGifting(!gifting)
    }
];

const [ corpOnBoard ] = useCorpReggisterMutation()

const onSubmit = async () =>{
    
    setIsLoading(true)
    setCorpData({ ...corpData, opted_for_expence: expence, opted_for_gifting:gifting, opted_for_benefit:benefits });
    
    


    const code = localStorage?.getItem("codeCorporateId");
  // Update corporate data
  const updatedData ={
    ...corpData,
    code_corporateId:code,
    opted_for_expence: expence,
    opted_for_gifting: gifting,
    opted_for_benefit: benefits,
  };


  console.log(updatedData);

  try {
    const res = await corpOnBoard(updatedData)

    if(res?.data?.data){
        localStorage?.setItem('fullname',res?.data?.data?.fullName )

        toast({
            // position: "bottom-left",
            render: () => (
              <ToastBox status={"success"} message={res?.data?.message} />
            ),
          });
          setOnBoard(true)

        setIsLoading(false)
        
       
    }else if (res?.error?.data?.message){
        toast({
          render: () => <ToastBox status={'error'} message={res?.error?.data?.message} />,
        });
    
    }else if(res?.error){
        toast({
          render: () => <ToastBox status={'error'} message={"Somthing went wrong"} />,
        });

      }



    console.log(res?.data?.data?.fullname);
    
  } catch (error) {
    
  }



}

console.log(corpData);

    return (
        <Box>
            <Text color={'#49475A'} fontWeight={500} fontSize={'sm'} mb={1}>
                Select package
            </Text>
            <Text color={'#49475A'} fontWeight={500} fontSize={'xs'}>
                Lorem ipsum dolor sit amet, adipiscing elit.
            </Text>

            <HStack spacing={4} flexWrap={"wrap"} my={12}>
                {packages.map((pkg) => (
                    <Box
                        key={pkg.id}
                        bg={"linear-gradient(158.69deg, #C33FAD 1.29%, #0A006B 98.23%)"}
                        p={4}
                        borderRadius={"md"}
                        maxW={"260px"}
                    >
                        <HStack justifyContent={"space-between"} alignItems={"start"}>
                            <Image src={pkg.img} alt={`${pkg.title} image`} /> 
                            <Checkbox  onChange={pkg?.onChange}  colorScheme='white'></Checkbox>
                        </HStack>
                        <Text
                            fontSize={"sm"}
                            fontWeight={500}
                            color={"#fff"}
                            mb={0}
                            mt={2}
                        >
                            {pkg.title}
                        </Text>
                        <Text fontSize={"xs"} color={"#e7d4ea"}>
                            {pkg.description}
                        </Text>
                        <Text fontSize={"xs"} color={"#e8d5eb"} mb={2}>
                            This plan gets
                        </Text>
                        <Box bg={"#fff"} borderRadius={"md"} p={4}>
                            <List spacing={3} pl={0} mb={0}>
                                {pkg.benefits.map((benefit, index) => (
                                    <ListItem
                                        key={index}
                                        fontSize={"xs"}
                                        color={"#434343"}
                                        fontWeight={500}
                                    >
                                        <ListIcon as={MdCheckCircle} color='#3725EA'  />
                                        {benefit}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                ))}
            </HStack>
            
          <HStack mt={6}>
            <IconButton
              aria-label="Back"
              icon={<ArrowBackIcon />}
              variant="outline"
              size="sm"
              px={8}
              _hover={{ opacity: 0.8 }}
              color={"#d0b8ef"}
              border={"1px solid #d0b8ef"}
              isDisabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
            />

            <Button
              bg={"#6311CB"}
              color={"#fff"}
              fontSize={"xs"}
              fontWeight={500}
              size="sm"
              _hover={{ opacity: 0.8 }}
              rightIcon={<ArrowForwardIcon />}
              w={"100%"}
              type="submit"
            //   isLoading={isLoading}
            //   onClick={onSubmit}
              onClick={onOpen}
            >
              {activeStep === steps.length - 1 ? "Next step" : "Next step"}
            </Button>
          </HStack>
          <OnboardingSelectPackageModal onBoard={onBoard} isLoading={isLoading} onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default OnboardingSelectPackage;
