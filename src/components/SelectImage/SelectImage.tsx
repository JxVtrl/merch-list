import React, { useEffect, useState } from 'react';
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image } from '@chakra-ui/react';
import { useApp } from '../../context';

export const SelectImage: React.FC = () => {
    const { openModal, setOpenModal, imageSelection }: any = useApp()
    console.log(imageSelection)
    
    return (
        <Modal
            isOpen={openModal}
            onOverlayClick={() => setOpenModal(false)}
            onClose={() => setOpenModal(false)}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Select Image</ModalHeader>
                <ModalCloseButton />
                <Flex as={ModalBody} flexWrap='wrap' align='center' justify='center' rowGap='15px' columnGap='15px'>
                    {imageSelection?.map((item: any, index: number) => {
                        if(index != imageSelection.length-1)
                            return (
                                <Flex
                                    key={index}
                                    w='120px'
                                    h='120px'
                                    cursor='pointer'
                                    _hover={{
                                        transform: 'scale(1.05)'
                                    }}
                                >
                                    <Image src={item.link} objectFit='cover' />
                                </Flex>
                            )
                    })}
                </Flex>

                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        mr={3}
                        onClick={() => setOpenModal(false)}
                    >
                    Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal> 
    );
}
