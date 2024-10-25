import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const ProfileImageViewer = ({ isOpen, onOpen, onClose, imgLink, rounded, snap }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        css={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <ModalContent rounded={rounded? "full":"md"} maxW={{base: rounded ? "65%" :'98%', md:rounded ? "20%" :'45%', "2xl":rounded ? "25%" :'55%'}}  bg={"transparent"}>
        <Image transform={snap ? "scaleX(-1)" :""}  alt="Null" rounded={rounded? "full":"md"} w={"100%"} h={"100%"} src={imgLink} />
      </ModalContent>
    </Modal>
  );
};

export default ProfileImageViewer;
