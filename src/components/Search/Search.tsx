import React, { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useApp } from '../../context';

export const Search: React.FC = () => {
    const { setSelectedOptions, selectedOptions, handleSearch }: any = useApp()
  
    const handleEnter = (e: any) => {
        if (e.code === 'Enter') {
            handleSearch()
        }
    }

    return (
        <Flex margin='15px auto'>
            <Input
                placeholder='Search'
                onChange={(e: any) => setSelectedOptions({ ...selectedOptions, name: e.target.value })}
                onKeyUp={handleEnter}
                value={selectedOptions?.name}
            />
            <Button onClick={handleSearch}>Search</Button>
        </Flex>
    );
}
