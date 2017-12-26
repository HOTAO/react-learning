import React, { Component } from 'react';
import userInfo from './userInfo.styl'

class UserInfo extends Component {
  render() {
    console.log(this.props)
    return (
      <div id={userInfo.userInfo}>
        <img src={this.props.user.avatar} alt="" />
        <div>
          <p>{this.props.user.name}</p>
          <p>{this.props.user.major}</p>
        </div>
      </div>
    );
  }
}

export default UserInfo;
