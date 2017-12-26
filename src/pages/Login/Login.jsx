import React, {Component} from 'react';
import {Form, Input, Button} from 'element-react';
import login from './Login.styl'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        phone: '',
        msgCode: ''
      },
      rules: {
        phone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
          }, {
            len: 11,
            pattern: window.PHONE_PATTERN,
            message: '请输入正确的手机号码',
            trigger: 'blur'
          }
        ],
        msgCode: [
          {
            required: true,
            message: '请输入短信验证码',
            trigger: 'blur'
          }
        ]
      }
    };
  }
  _handleGetMsgCode() {
    this
      .refs
      .form
      .validateField('phone', (valid) => {
        console.log(valid)
        if (!valid) {
          console.log(valid);
        } else {
          console.log('error submit!!');
        }
      })
  }
  _handleSubmit(e) {
    this
      .props
      .history
      .push('/uploadResume')
    e.preventDefault();

    this
      .refs
      .form
      .validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
  }
  _onChange(key, value) {
    console.log(value)
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    });
  }
  render() {
    return (
      <div id={login.login}>
        <p className={login.title}>
          <i className="el-icon-information"></i>
          <span>手机验证登录</span>
        </p>
        <Form
          ref="form"
          model={this.state.form}
          rules={this.state.rules}
          className={login.loginForm}>
          <Form.Item prop="phone">
            <Input
              placeholder="请输入手机号码"
              value={this.state.form.phone}
              name="password"
              maxLength={11}
              onChange={this
              ._onChange
              .bind(this, 'phone')}></Input>
          </Form.Item>
          <div className={login.msgCode}>
            <Form.Item prop="msgCode">
              <Input
                placeholder="请输入验证码"
                value={this.state.form.msgCode}
                name="password"
                maxLength={6}
                onChange={this
                ._onChange
                .bind(this, 'msgCode')}></Input>
            </Form.Item>
            <Button
              type="primary"
              onClick={this
              ._handleGetMsgCode
              .bind(this)}
              className={login.codeBtn}>获取验证码</Button>
          </div>
          <p className={login.tips}>未注册过的手机号码将自动注册成为口袋兼职用户</p>
          <div className={login.loginBtn}>
            <Button
              type="primary"
              onClick={this
              ._handleSubmit
              .bind(this)}>登录</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
