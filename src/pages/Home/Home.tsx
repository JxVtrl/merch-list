import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Search, SelectImage } from '../../components';
import { useApp } from '../../context';

export const Home: React.FC = () => {
  return (
    <Flex pos='relative' flexDir='column'>
      <Search />

      <SelectImage />
    </Flex>
  );
}
