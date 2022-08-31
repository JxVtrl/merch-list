import React, { useEffect, useState } from 'react';
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image, FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Load } from '../'
import { useApp } from '../../context';
import { formatCurrency } from '../../helpers';
import { useDevice } from '../../hooks';

export const SelectItem: React.FC = () => {
    const { setSelectedOptions, selectedOptions, createItem, openModal, setOpenModal, imageSelection, load }: any = useApp()
    const [modalPage, setModalPage] = useState<number>(0)
    const { device: { isMobile }} = useDevice()


    const handlePhotoSelect = (e: any) => {
        if(e.target.src)
            setSelectedOptions({...selectedOptions, src: e.target.src})
    }

    const handleReset = () => {
        setOpenModal(false)
        setSelectedOptions({})
        setModalPage(0)
    }
    
    return (
        <Modal
            isOpen={openModal}
            onOverlayClick={handleReset}
            onClose={handleReset}
        >
            <ModalOverlay />
            <ModalContent h={load ? '550px' : undefined}>
                {load ? (<Load />): (
                    <>
                        <ModalHeader>{modalPage === 0 ? 'Selecione a imagem' : 'Informações do item'}</ModalHeader>
                        <ModalCloseButton />
                        <Flex as={ModalBody} flexWrap='wrap' align='center' justify='center' rowGap='15px' columnGap='15px'>
                            {modalPage === 0 ? (
                                <>
                                    {imageSelection?.map((item: any, index: number) => {
                                        if(index < 9 || isMobile)
                                            return (
                                                <Flex
                                                    border={selectedOptions.src === item.link ? '1px solid green' : undefined}
                                                    transform={selectedOptions.src === item.link ? 'scale(1.05)' : undefined}
                                                    key={index}
                                                    w='120px'
                                                    h='120px'
                                                    cursor='pointer'
                                                    _hover={{
                                                        transform: 'scale(1.05)'
                                                    }}
                                                    onClick={e => handlePhotoSelect(e)}
                                                >
                                                    <Image src={item.link} objectFit='cover' />
                                                </Flex>
                                            )
                                    })}
                                </>
                            ) : (
                                <>
                                    <FormControl>
                                        <FormLabel>Nome</FormLabel>
                                        <Input
                                            placeholder='Nome do item'
                                            value={selectedOptions?.name}
                                            onChange={(e: any) => setSelectedOptions({ ...selectedOptions, name: e.target.value })}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Preço</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                color='gray.500'
                                                fontSize='1em'
                                                children='R$'
                                            />
                                            <Input
                                                value={formatCurrency(selectedOptions.price)}
                                                onChange={(e: any) => setSelectedOptions({ ...selectedOptions, price: formatCurrency(e.target.value) })}
                                                placeholder='Valor do item'
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </>
                            )}
                        </Flex>
                        <ModalFooter>
                            <Button
                                colorScheme='blue'
                                mr={3}
                                disabled={modalPage === 0 ? !selectedOptions.src ? true : false : selectedOptions.name && selectedOptions.price ? false : true}
                                onClick={() => {
                                    if (modalPage === 0) {
                                        setModalPage(modalPage + 1)
                                    } else if (modalPage === 1) {
                                        createItem()
                                        setOpenModal(false)
                                    }
                                }}
                            >
                                {modalPage === 0 ? 'Continuar' : 'Concluir'}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal> 
    );
}
