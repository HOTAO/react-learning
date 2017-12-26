import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import resume from './Resume.styl'
import UserInfo from 'component/common/UserInfo.jsx'
import { Button } from 'element-react';
import actions from 'actions/userInfo'
// import { connect } from 'react-redux';
class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        avatar: require('images/test.png'),
        name: '陈小春',
        major: '艺术/设计'
      }
    }
  }
  getData() {
    actions.getUserInfo()
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
      })
  }
  render() {
    return (
      <div id={resume.resumeDetail}>
        <Button onClick={this.getData.bind(this)}>获取数据</Button>
        <img src={ require('images/background.jpg') } alt=""/>
        <div className={resume.flexSpaceBetween}>
          <span><span className="color-blue">19</span>人看过</span>
          <Link to="/resumeList">查看全部></Link>
        </div>
        <UserInfo user={this.state.user}></UserInfo>
        <div className={resume.callNum}>
          <p>打call：<span className="color-blue">54</span></p>
        </div>
        <div className={resume.callList}>
          <p>刘武已为你打call</p>
          <p>黄三已为你打call</p>
          <p>李希怡已为你打call</p>
          <p>郭冬冬已为你打call</p>
          <p>王丹丹已为你打call</p>
        </div>
        <div className={resume.helpBtn}>
          <Button type="primary" onClick={this._goSharePage.bind(this)}>邀请好友助力</Button>
        </div>
      </div>
    );
  }
  _goSharePage() {
    this.props.history.push('/share')
  }
}
// const _mapStateToProps = (state) => {
//   return { userInfo: state.userInfo }
// }
// const _mapDispatchToProps = (dispatch) => {
//   return {
//     getData: (dispatch) => {
//       getUserInfo(dispatch)
//     }
//   }
// }
// export default connect(_mapStateToProps, _mapDispatchToProps)(Resume)
// export default connect(state => ({ userInfo: state.userInfo }), {getUserInfo})(Resume)
export default Resume
