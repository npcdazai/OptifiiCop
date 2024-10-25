import { Box, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import audioClick from "../assets/click-151673.mp3";

const SwitchButton = ({ isSwitchOn, setIsSwitchOn }) => {

  // const [isSwitchOn, setIsSwitchOn] = useState(false);

  const audio = useRef();

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    if (audio.current) {
      audio.current.play();
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Box
        as="button"
        display="flex"
        justifyContent="normal"
        alignItems="center"
        // justifyContent={isSwitchOn ? "flex-end" : "flex-start"}
        width="90px"
        height="25px"
        borderRadius="20px"
        backgroundColor={isSwitchOn ? "#59C36A" : "#ef0000"}
        onClick={switch_onChange_handle}
        position="relative"
        fontSize="13px"
        fontWeight="100"
        transition="background-color 0.2s"
        _before={{
            content: '""',
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transform: isSwitchOn ? "translateX(65px)" : "translateX(0)",
            transition: "transform 0.2s",
            left:'2px'

          // content: '""',
          // position: "absolute",
          // height: "25px",
          // width: "25px",
          // left: "0px",
          // background:
          //   "conic-gradient(rgb(104, 104, 104), white, rgb(104, 104, 104), white, rgb(104, 104, 104))",
          // borderRadius: "50%",
          // transitionDuration: ".3s",
          // boxShadow: " 5px 2px 7px rgba(8, 8, 8, 0.308)",
          // transform: isSwitchOn ? "translateX(65px)" : "translateX(0)",
        }}
      >
        <Text
          // color="#FFF"
          fontWeight="500"
          zIndex={1}
          position="absolute"
          mb={0}
          color={isSwitchOn ? "#fff" : "#fff"}
          left={isSwitchOn ? "10px" : "auto"}
          right={isSwitchOn ? "auto" : "10px"}
        >
          {isSwitchOn ? "Active" : "InActive"}
        </Text>
      </Box>
      <audio ref={audio} src={audioClick} />
    </Box>
  );
};

export default SwitchButton;
