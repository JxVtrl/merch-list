import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react'

export const Load: React.FC = () => {
    return (
        <Flex h='100%' w='100%' align='center' justify='center'>
            <Spinner size='xl'/>
        </Flex>
    );
}
