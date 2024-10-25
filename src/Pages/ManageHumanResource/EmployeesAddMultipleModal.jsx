import { Box, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import FileUploader from '../../Components/FileUploader/FileUploader'
import SuccessModal from '../../Components/SuccessModal/SuccessModal'
import { useDisclosure } from '@chakra-ui/react'

const EmployeesAddMultipleModal = ({ isOpen, onClose }) => {
    const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onClose: onSuccessClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFileUploadMultipleEmp = async (file, setPreview) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("document", file); // Append file

        const code = sessionStorage?.getItem("codeCorporate");
        try {
            const res = await sendFile({ data: formData, code }); // Upload file to server
            console.log(res);
            if (res?.data?.data) {
                setCorpData({ ...corpData, gst_file_path_name: res?.data?.data });
                setValue("gst_file_path_name", res?.data?.data);
                setPreview(res?.data?.data);
                toast({
                    render: () => <ToastBox message={res?.data?.message} />,
                });
                setIsLoading(false);
            } else if (res?.error?.data?.message) {
                toast({
                    render: () => <ToastBox status={'error'} message={res?.error?.data?.message} />,
                });
            } else if (res?.error) {
                toast({
                    render: () => <ToastBox status={'error'} message={"Something went wrong"} />,
                });
            }
            setIsLoading(false);
        } catch (error) {
            console.error("File upload failed", error);
            setIsLoading(false);
        }
    };

    const handleNextClick = () => {
        // Trigger success modal here
        onSuccessOpen();
    };

    return (
        <Box>
            {/* modal  */}
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={"center"}>Get your sheet from excel</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <Text fontSize={"sm"} fontWeight={500} mb={2} textAlign={"center"}>
                                Need help getting started?
                            </Text>
                            <Text fontSize={"sm"} fontWeight={500} mb={2} textAlign={"center"}>
                                <Text as={"span"} color={"#41A3FD"} me={1}> Read and learn</Text>
                                about importing to OptiFii
                            </Text>
                            <Text fontSize={"sm"} fontWeight={500} mb={2} textAlign={"center"}>
                                <Text as={"span"} color={"#41A3FD"} me={1}>Download</Text>
                                a sample Excel file
                            </Text>

                            <FileUploader
                                maxFileSize={3 * 1024 * 1024}  // Max 3MB size
                                onFileUpload={handleFileUploadMultipleEmp}
                            />
                        </Box>

                        <HStack py={4} justifyContent={"center"}>
                            <PrimaryButton onClick={handleNextClick} title={"Next"} w={"40%"} isLoading={isLoading} />
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* success modal*/}
            <SuccessModal isOpen={isSuccessOpen} onClose={onSuccessClose} />
        </Box>
    );
}

export default EmployeesAddMultipleModal;
