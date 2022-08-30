import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useFirebase } from '../../context';
import { formatCurrency } from '../../helpers';

export const Total: React.FC = () => {
  const { totalPrice }: any = useFirebase()
  return (
    <Flex w='100%' align='center' justify='center' flexDir='column' bgColor='white' mb='15px'>
      {totalPrice && (
        <>
          <Text>
            Total
          </Text>
          <Text>
            R$ {formatCurrency(`${totalPrice}`)}
          </Text>
        </>
      )}
    </Flex>
  );
}
