import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
// import noInternet from "../assets/Error.svg"
import robot from "../assets/robot.png"

const UnderConstruction = ({title, h}) => {
  return (
    <Box
    h={h?h:'100vh'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={8}
    >
        <Image src={robot} w={200} />
        <Text color={'green.800'} as={'span'} mt={4} fontSize={'small'}>🚧 Building Something Amazing Just for You! 🚧</Text>
    </Box>
  )
}

export default UnderConstruction