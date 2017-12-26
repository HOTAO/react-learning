/*
 * @Author: HT
 * @Date: 2017-12-25 14:36:02
 * @Last Modified by:   HT
 * @Last Modified time: 2017-12-25 14:36:02
 */
import React, {Component} from 'react'
/*
 * asyncComponent 接收一个 importComponent 函数作为参数，importComponent() 在被调用时会动态引入给定的组件。
 * 在 componentDidMount()中，调用传入的 importComponent()，并将动态引入的组件保存在 state 中。
 */
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const {default: component} = await importComponent();
      this.setState({component})
    }
    render() {
      const C = this.state.component
      return C
        ? <C {...this.props}/>
        : null
    }
  }
  return AsyncComponent;
}
