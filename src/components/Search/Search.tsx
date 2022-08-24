import React, { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { getSearch } from '../../services';
import { useApp } from '../../context';

export const Search: React.FC = () => {
    const { setImageSelection, setOpenModal }: any = useApp()
    const [search, setSearch] = useState<string>('')
  
    const handleSearch = async () => {
        if (search) {
            setOpenModal(true)
            setImageSelection(await getSearch(search))
        }
    }

    return (
        <Flex w='500px' margin='15px auto'>
            <Input
                placeholder='Search'
                onChange={(e: any) => setSearch(e.target.value)}
                value={search}
            />
            <Button onClick={handleSearch}>Search</Button>
        </Flex>
    );
}
