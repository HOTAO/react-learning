import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button, Layout} from 'element-react';
import home from './Home.styl'
console.log(home)
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id={home.home}>
        <Layout.Row className={home.kdjz}>
          <Layout.Col span="12" className={home.logo}>
            <img src={require('images/test.png')} alt=""/>
            <span>口袋兼职</span>
          </Layout.Col>
          <Layout.Col span="12" className={home.download}>
            <Button type="primary">App下载</Button>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row className={home.banner}>
          <img src={require('images/background.jpg')} alt=""/>
        </Layout.Row>
        <Layout.Row className={home.actions}>
          <Link to="/login">
            <Button type="primary">上传简历</Button>
          </Link>
          <Layout.Col span="12" className="rule active-rule">
            活动规则>>
          </Layout.Col>
          <Layout.Col span="12" className="rule club-rule">
            社团参与规则>>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row className={home.rewards}>
          <h1 className={home.title}>奖项详情</h1>
          <img src={require('images/background1.png')} alt=""/>
          <Button type="primary">先去围观</Button>
        </Layout.Row>
        <Layout.Row className={home.advertisement}>
          <h1 className={home.title}>广告位</h1>
          <i className="el-icon-document"></i>
          <i className="el-icon-message"></i>
          <i className="el-icon-setting"></i>
          <i className="el-icon-upload"></i>
        </Layout.Row>
      </div>
    );
  }
}

export default Home
