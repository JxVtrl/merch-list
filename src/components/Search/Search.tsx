import React, { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useGoogleSearch } from '../../services';
import { useApp, useFirebase } from '../../context';

export const Search: React.FC = () => {
    const { setImageSelection, setOpenModal  }: any = useApp()
    const { setSelectedOptions, selectedOptions }: any = useFirebase()
  
    const handleSearch = async () => {
        if (selectedOptions?.name) {
            setOpenModal(true)
            setImageSelection(await useGoogleSearch(selectedOptions.name))
        }
    }

    return (
        <Flex margin='15px auto'>
            <Input
                placeholder='Search'
                onChange={(e: any) => setSelectedOptions({...selectedOptions, name: e.target.value})}
                value={selectedOptions?.name}
            />
            <Button onClick={handleSearch}>Search</Button>
        </Flex>
    );
}
