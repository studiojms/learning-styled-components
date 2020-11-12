import React, { useState } from 'react';
import styled from 'styled-components';

import privateIcon from '../../assets/images/private.svg';
import eyeIcon from '../../assets/images/eye.svg';
import moneyIcon from '../../assets/images/money.svg';
import { Balance, Box, Button, Detail, Icon } from '../UI';

const IconMargin = styled(Icon)`
  margin-top: 2px;
`;

const BalanceSection = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Account</h2>
      <BalanceSection>
        Balance{' '}
        <span>
          <Icon src={moneyIcon} alt="Balance Icon" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>US$</Detail> 0,00
          </Balance>
        ) : null}
      </BalanceSection>

      <Button onClick={toggleHandler}>
        <IconMargin src={toggleState ? privateIcon : eyeIcon} alt="Balance Privacy" />
      </Button>
    </Box>
  );
};

export default Account;
