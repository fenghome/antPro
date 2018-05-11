import React from 'react';
import { Route } from 'dva/router';
import { connect } from 'dva'

const AuthRouter = ({user,component:Component,...rest})=>(
    <Route {...rest} render={} />
);

export default connect(({user})=>({user}))(AuthRouter);