/*
 * @Author: HT
 * @Date: 2017-12-25 14:35:51
 * @Last Modified by:   HT
 * @Last Modified time: 2017-12-25 14:35:51
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// 代码分割
import asyncComponent from './asyncComponent'

// import Bundle from './Bundle'; import Loading from
// 'component/Loading/Loading'; import Home from
// 'bundle-loader?lazy&name=home!pages/Home/Home.jsx'; import Login from
// 'bundle-loader?lazy&name=login!pages/Login/Login.jsx';
const AsyncHome = asyncComponent(() => import (/* webpackChunkName: "Home" */ 'pages/Home/Home.jsx'))
const AsyncLogin = asyncComponent(() => import (/* webpackChunkName: "Login" */ 'pages/Login/Login.jsx'))
const AsyncUploadResume = asyncComponent(() => import (/* webpackChunkName: "UploadResume" */ 'pages/UploadResume/UploadResume.jsx'))
const AsyncResumeList = asyncComponent(() => import (/* webpackChunkName: "ResumeList" */ 'pages/Resume/ResumeList.jsx'))
const AsyncResume = asyncComponent(() => import (/* webpackChunkName: "Resume" */ 'pages/Resume/Resume.jsx'))
const AsyncShare = asyncComponent(() => import (/* webpackChunkName: "Share" */ 'pages/Share/Share.jsx'))
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1'; import
// Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'; import
// UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
// import NotFound from
// 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound'; console.log(Home)
// const createComponent = (component) => () => (   <Bundle load={component}>
// {           (Component) => Component ? <Component/> : <Loading/>       }
// </Bundle> );
const routes = [
  {
    path: '/',
    component: AsyncHome,
    exact: true
  }, {
    path: '/login',
    component: AsyncLogin,
    exact: true
  }, {
    path: '/uploadResume',
    component: AsyncUploadResume,
    exact: true
  }, {
    path: '/resumeList/:id',
    component: AsyncResume,
    exact: true
  }, {
    path: '/resumeList',
    component: AsyncResumeList,
    exact: true
  }, {
    path: '/share',
    component: AsyncShare,
    exact: true
  }

]

// const getRouter = () => (   <div>     <Switch>       <Route exact path="/"
// component={Home}>       </Route>       <Route exact path="/login"
// component={Login}>       </Route>     </Switch>   </div> )

export default routes;
