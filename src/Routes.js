import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES_PATH } from './constants/routesPath';
import Main from './pages/Main';
import Detail from 'pages/Detail';

class RoutesPath extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={ROUTES_PATH.MAIN} element={<Main />}></Route>
          <Route path={ROUTES_PATH.DETAIL} element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RoutesPath;
