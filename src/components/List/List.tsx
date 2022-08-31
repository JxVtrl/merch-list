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
    Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useApp } from '../../context';
import { iSelected } from '../../context/AppContext'
import { Exclude } from '../Exclude';

export const List: React.FC = () => {
    const [confirmModal, setConfirmModal] = useState<boolean>(false)
    const [confirmItem, setConfirmItem] = useState<iSelected>({})

    const { items }: any = useApp()

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
                        <Button transition='all 0.3s ease'>
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
            <Exclude
                confirmModal={confirmModal}
                setConfirmModal={setConfirmModal}
                confirmItem={confirmItem}
                setConfirmItem={setConfirmItem}
            />
        </Accordion>
    );
}
