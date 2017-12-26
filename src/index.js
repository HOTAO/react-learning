import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer as HotContainer} from 'react-hot-loader';
import {Router} from 'react-router-dom';
import routes from 'router/router';
import RouteWithSubRoutes from 'router/RouteWithSubRoutes'
import './utils/validator';
import 'element-theme-default';
import './stylus/base.styl'
import history from 'utils/history'

if (MOCK) {
  require('mock/mock');
}

/*初始化*/
renderWithHotReload(routes);

/*热更新*/
if (module.hot) {
  module
    .hot
    .accept('router/router', () => {
      const NextApp = require('router/router').default;
      renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <HotContainer>
    <Router history={history}>
      <div>
        {routes.map((route, index) => (<RouteWithSubRoutes key={index} {...route}/>))}
      </div>
    </Router>
  </HotContainer>, document.getElementById('app'))
}