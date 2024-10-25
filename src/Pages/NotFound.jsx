import { Box, Image, Text } from "@chakra-ui/react"
import error from "../assets/Error.svg"
import robot from "../assets/commingsoon2.png"
// import robot from "../assets/robot.png"
const NotFound = () => {
  return (
    
    <Box
    h={'100vh'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={8}
    >
        {/* <Image src={robot} w={"500px"} /> */}<Text
  bgGradient='linear(to-l, #5000FF, #50006B)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='bold'
>
  Comming Soon...
</Text>
        <Text color={'green.800'} as={'span'} fontSize={'small'}>🚧 Developing something amazing for you. 🚧</Text>
    </Box>
  )
}

export default NotFound