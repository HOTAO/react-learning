/*
 * @Author: HT
 * @Date: 2017-12-25 14:36:11
 * @Last Modified by:   HT
 * @Last Modified time: 2017-12-25 14:36:11
 */
import React from 'react'
import {Route} from 'react-router-dom'
// wrap <Route> and use this everywhere instead, then when sub routes are added
// to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // 子路由
      <route.component {...props} routes={route.routes}/> )}/>
)

export default RouteWithSubRoutes