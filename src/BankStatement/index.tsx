import React from 'react';

import { Box, Button } from '../Components/UI';
import { bankInfoList } from '../info';
import ItemList from '../ItemList';
import { IBankInfo } from './IBankInfo';

const BankStatement = () => {
  return (
    <Box>
      {bankInfoList.updates.map((bankInfo: IBankInfo) => (
        <ItemList key={bankInfo.id} {...bankInfo} />
      ))}
      <Button>More</Button>
    </Box>
  );
};

export default BankStatement;
