import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import './FullscreenLoaders.css'

const FullscreenLoaders = ({height}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={'column'}
      alignItems={"center"}
      w={"100%"}
      h={height ? height: "100vh"}
      gap={4}
    ><div className="dot-spinner">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
  {/* <Text color='#004717' fontSize={'md'} fontWeight={500}>Loading...</Text> */}
    </Box>
  );
};

export default FullscreenLoaders;
