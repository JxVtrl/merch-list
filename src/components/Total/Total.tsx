import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useApp } from '../../context';
import { formatCurrency } from '../../helpers';

export const Total: React.FC = () => {
  const { totalPrice }: any = useApp()
  return (
    <Flex w='100%' align='center' justify='center' flexDir='column' mb='15px'>
      {totalPrice > 0 && (
        <Text textAlign='center'>
          Total
          <br />
          R$ {formatCurrency(`${totalPrice}`)}
        </Text>
      )}
    </Flex>
  );
}
