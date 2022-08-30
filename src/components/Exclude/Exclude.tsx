import React, { SetStateAction } from 'react';
import { useApp } from '../../context';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { iSelected } from '../../context/AppContext'

interface iExclude {
    confirmModal: boolean
    confirmItem: iSelected
    setConfirmModal: React.Dispatch<SetStateAction<boolean>>
    setConfirmItem: React.Dispatch<SetStateAction<iSelected>>
}

export const Exclude: React.FC<iExclude> = ({
    confirmModal,
    confirmItem,
    setConfirmModal,
    setConfirmItem
}) => {
    const { removeItem }: any = useApp()

    return (
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
                            variant='ghost'
                        mr={3}
                        onClick={() => {
                            setConfirmItem({})
                            setConfirmModal(false)
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                            variant='solid'
                            colorScheme='red'
                        onClick={() => removeItem(confirmItem.id)}
                    >
                        Confirmar
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
    );
}
