import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Search, SelectItem } from '../../components';
import { useApp } from '../../context';

export const Home: React.FC = () => {
  return (
    <Flex pos='relative' flexDir='column'>
      <Search />

      <SelectItem />
    </Flex>
  );
}
