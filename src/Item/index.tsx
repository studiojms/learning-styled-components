import React from 'react';
import styled from 'styled-components';

import { IBankInfo } from '../BankStatement/IBankInfo';

const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

const Item = ({ type, from, value }: IBankInfo) => {
  return (
    <ItemStyle>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemStyle>
  );
};

export default Item;
