import React from 'react';
import { Flex } from '@chakra-ui/react';
import { List, Search, SelectItem, Total } from '../../components';

export const Home: React.FC = () => {
  return (
    <Flex pos='relative' flexDir='column'>
      <Search />
      <List />
      <Total />
      <SelectItem />
    </Flex>
  );
}
