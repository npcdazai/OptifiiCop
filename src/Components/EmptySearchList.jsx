import { Box, Image, Text } from "@chakra-ui/react"
// import EmptySearchListImage from "../assets/empty_state_empty_folder.svg"
// import EmptySearchListImage from "../assets/EmptySearchList.png"

const EmptySearchList = ({message}) => {
  return (
    <Box
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    w={"100%"} h={"40vh"}  
    >
        {/* <Image w={200} mb={8}  src={EmptySearchListImage} alt='empty list' /> */}
        {/* <Text className=" fw-bold fs-5" >{message}</Text> */}
        <Text className=" fw-bold fs-5" >We do not have any records</Text>
        {/* <Text as={'p'} className="web-text-medium">Posts of tanami will appear here.</Text> */}
        
    </Box>
  )
}

export default EmptySearchList