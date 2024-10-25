import { Box, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import audioClick from "../assets/click-151673.mp3";

const DummyComponent = () => {
  // Define the state for the checkbox
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const audio = useRef();

  // Function to toggle the switch
  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
    if(audio.current){
        audio.current.play();
    }
  };

  return (
    <Box display={"flex"} justifyContent={"right"} p={"2rem"}>
      <label className="switch">
        <Input
          type="checkbox"
          checked={isSwitchOn}
          onChange={handleToggle} // Toggle the switch on change
        />
        <Box className="button">
          <div className="light"></div>
          <div className="dots"></div>
          <div className="characters"></div>
          <div className="shine"></div>
          <div className="shadow"></div>
        </Box>
      </label>
      
      <audio ref={audio} src={audioClick} />
    </Box>
  );
};

export default DummyComponent;
