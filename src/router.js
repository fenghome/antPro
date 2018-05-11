import React from 'react';
import {routerRedux, Route, Switch} from 'dva/router';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import IndexPage from './routes/IndexPage';

const {ConnectedRouter} = routerRedux;
function RouterConfig({history}) {
  return (
    <LocaleProvider local={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>

  );
}

export default RouterConfig;
