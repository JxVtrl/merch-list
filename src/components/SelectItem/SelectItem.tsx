import React, { useEffect, useState } from 'react';
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image } from '@chakra-ui/react';
import { useApp } from '../../context';

export const SelectItem: React.FC = () => {
    const { openModal, setOpenModal, imageSelection }: any = useApp()
    const [modalPage, setModalPage] = useState<number>(0)

    useEffect(() => {
        if (openModal)
            setModalPage(0)
    },[openModal])

    const handleCreateItem = () => {
        setOpenModal(false)
    }
    
    return (
        <Modal
            isOpen={openModal}
            onOverlayClick={() => setOpenModal(false)}
            onClose={() => setOpenModal(false)}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalPage === 0 ? 'Selecione a imagem' : 'Informações do item'}</ModalHeader>
                <ModalCloseButton />
                <Flex as={ModalBody} flexWrap='wrap' align='center' justify='center' rowGap='15px' columnGap='15px'>
                    {modalPage === 0 ? (
                        <>
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
                        </>
                    ) : (
                            <>
                            </>
                    )}
                </Flex>

                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        mr={3}
                        onClick={() => {
                            if (modalPage === 0) {
                                setModalPage(modalPage + 1)
                            } else if (modalPage === 1) {
                                handleCreateItem()
                            }
                        }}
                    >
                        {modalPage === 0 ? 'Continuar' : 'Concluir'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal> 
    );
}
