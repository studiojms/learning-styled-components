import React from 'react';

import { IconTheme } from './UI';

import food from '../assets/images/food.svg';
import health from '../assets/images/health.svg';
import others from '../assets/images/others.svg';
import transport from '../assets/images/transport.svg';
import utilities from '../assets/images/utilities.svg';

enum ImageType {
  Food = 'Food',
  Utilities = 'Utilities',
  Health = 'Health',
  Transport = 'Transport',
  Others = 'Others',
}

const ImageFilter: React.FC<{ type: string }> = ({ type }) => {
  let icon = others;

  switch (type as string) {
    case ImageType.Food:
      icon = food;
      break;
    case ImageType.Health:
      icon = health;
      break;
    case ImageType.Transport:
      icon = transport;
      break;
    case ImageType.Utilities:
      icon = utilities;
      break;
    case ImageType.Others:
      icon = others;
      break;
  }

  return <IconTheme src={icon} alt={type} />;
};

export default ImageFilter;
