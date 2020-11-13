import {
  darkBackground,
  darkBackgroundFontColor,
  darkContentColor,
  lightBackground,
  lightBackgroundFontColor,
  lightContentColor,
} from './variables';

export const lightTheme = {
  body: lightBackground,
  inside: lightContentColor,
  text: lightBackgroundFontColor,
  filter: '',
};

export const darkTheme = {
  body: darkBackground,
  inside: darkContentColor,
  text: darkBackgroundFontColor,
  filter: 'invert(100%)',
};
