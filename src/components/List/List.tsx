import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useFirebase } from '../../context';

export const List: React.FC = () => {
    const { items }: any = useFirebase()
    return (
        <Accordion allowToggle>
            {items.map((item: any) => (
                <AccordionItem>
                    <h2>
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
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
