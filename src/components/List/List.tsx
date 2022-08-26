import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Avatar, Flex, Text, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';
import { useFirebase } from '../../context';

export const List: React.FC = () => {
    const { items }: any = useFirebase()
    return (
        <Accordion allowToggle>
            {items.map((item: any, idx: number) => (
                <AccordionItem maxW='400px' margin='0 auto' key={idx}>
                    <AccordionButton>
                        <Flex align='center' justify='space-between' mr='15px' w='100%'>
                            <Avatar mr='10px' src={item.src} />
                            <Box flex='1' textAlign='left' textTransform='capitalize'>
                            {item.name}
                            </Box>
                            <Text>
                                R$ {item.price}
                            </Text>
                        </Flex>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} display='flex' w='100%' justifyContent='flex-end' gap='15px'>
                        <Button transition='all 0.3s ease' _hover={{ backgroundColor: '#1da1f2', color: 'white' }}>Editar</Button>
                        <Button transition='all 0.3s ease' _hover={{ backgroundColor: 'red', color: 'white' }} >Excluir</Button>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
