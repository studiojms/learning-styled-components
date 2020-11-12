import React from 'react';
import styled from 'styled-components';

import { IBankInfo } from '../BankStatement/IBankInfo';
import ImageFilter from '../Components/ImageFilter';
import Item from '../Item';

const ItemListStyle = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const ItemList = (bankInfo: IBankInfo) => {
  return (
    <ItemListStyle>
      <ImageFilter type={bankInfo.type} />
      <Item {...bankInfo} />
      {bankInfo.date}
    </ItemListStyle>
  );
};

export default ItemList;
