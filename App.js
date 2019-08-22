import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from './views/Home';
import Songs from './views/Songs';
import Concerts from './views/Concerts';
import Label from './views/Label';
import MainTemplate from './templates/MainTemplate';

const App = () => (
  <NativeRouter>
    <MainTemplate>
      <Route exact path="/" component={Home} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/concerts" component={Concerts} />
      <Route exact path="/label" component={Label} />
    </MainTemplate>
  </NativeRouter>
);

export default App;
