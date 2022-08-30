import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Avatar,
    Flex,
    Text,
    ButtonGroup,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useApp } from '../../context';
import { iSelected } from '../../context/AppContext'

export const List: React.FC = () => {
    const [confirmModal, setConfirmModal] = useState<boolean>(false)
    const [confirmItem, setConfirmItem] = useState<iSelected>({})

    const { items, removeItem }: any = useApp()


    const handleExclude = (item: any) => {
        setConfirmItem(item)
        setConfirmModal(true)
    }


    return (
        <Accordion allowToggle position='relative'>
            {items.map((item: any, idx: number) => (
                <AccordionItem maxW='400px' margin='0 auto' key={idx}>
                    <AccordionButton>
                        <Flex
                            align='center'
                            justify='space-between'
                            mr='15px'
                            w='100%'
                        >
                            <Avatar mr='10px' src={item.src} />
                            <Box
                                flex='1'
                                textAlign='left'
                                textTransform='capitalize'
                            >
                                {item.name}
                            </Box>
                            <Text>
                                R$ {item.price}
                            </Text>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                        pb={4}
                        as={Flex}
                        w='100%'
                        justify='flex-end'
                        gap='15px'
                    >
                        <Button
                            transition='all 0.3s ease'
                            _hover={{
                                backgroundColor: '#1da1f2',
                                color: 'white'
                            }}
                        >
                            Editar
                        </Button>
                        <Button
                            transition='all 0.3s ease'
                            _hover={{
                                backgroundColor: 'red',
                                color: 'white'
                            }}
                            onClick={() => handleExclude(item)}
                        >
                            Excluir
                        </Button>
                    </AccordionPanel>
                </AccordionItem>
            ))}
            <Modal
                isOpen={confirmModal}
                onOverlayClick={() => {
                    setConfirmItem({})
                    setConfirmModal(false)
                }}
                onClose={() => {
                    setConfirmItem({})
                    setConfirmModal(false)
                }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Excluir item {confirmItem.id}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Você está prestes a excluir o item: {confirmItem.name}
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        mr={3}
                        onClick={() => {
                            setConfirmItem({})
                            setConfirmModal(false)
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant='ghost'
                        onClick={() => removeItem(confirmItem.id)}
                    >
                        Confirmar
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Accordion>
    );
}
