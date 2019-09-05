import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import { theme } from 'rap-gra/theme/mainTheme';
import Home from 'rap-gra/views/Home';
import Songs from 'rap-gra/views/Songs';
import Concerts from 'rap-gra/views/Concerts';
import Label from 'rap-gra/views/Label';
import MainTemplate from 'rap-gra/templates/MainTemplate';

const App = () => (
  <NativeRouter>
    <ThemeProvider theme={theme}>
      <MainTemplate>
        <Route exact path="/" component={Home} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/label" component={Label} />
      </MainTemplate>
    </ThemeProvider>
  </NativeRouter>
);

export default App;
