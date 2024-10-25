import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ImageViewer = ({ src, isOpen, onClose }) => {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={500}>
          {/* <ModalCloseButton /> */}
          <ModalBody p={0} bg={'transparent'} width={'100%'}>
            <Image
              rounded={6}
              w={"100%"}
              h={"100%"}
              src={src}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageViewer;
