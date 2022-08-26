import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useFirebase } from '../../context';
import { formatCurrency } from '../../helpers';

export const Total: React.FC = () => {
  const { totalPrice }: any = useFirebase
  return (
    <Flex>{formatCurrency(totalPrice)}</Flex>
  );
}
