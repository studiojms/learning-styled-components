import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Components/Header';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeButton } from './Components/UI';
import { darkTheme, lightTheme } from './Components/UI/themes';
import ThemeSwitcher from './Components/ThemeSwitcher';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((theme) => !theme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        <ThemeSwitcher darkTheme={isDarkTheme} />
      </ThemeButton>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
