import React from 'react';

import themeOn from '../../assets/images/themeOn.svg';
import themeOff from '../../assets/images/themeOff.svg';
import { Icon } from '../UI';

const light = <Icon src={themeOn} alt="Light Theme" />;
const dark = <Icon src={themeOff} alt="Dark Theme" />;

const ThemeSwitcher: React.FC<{ darkTheme: boolean }> = ({ darkTheme }) => (darkTheme ? light : dark);

export default ThemeSwitcher;
