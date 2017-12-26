import React, {Component} from 'react';
import UserInfo from 'component/common/UserInfo.jsx'
import share from './Share.styl'
import html2canvas from 'html2canvas';
import Canvas2Image from 'utils/canvas2image.js';
import {Button, Dialog} from 'element-react';
// require('canvas2image')

class Share extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false
    }
  }
  _share() {
    const options = {
      // width: '101',
      // WINDOWWIDTH: '100'
    }
    html2canvas(document.getElementById('shareHtml'), options).then((canvas) => {
      this.setState({showDialog: true})
      console.log(typeof canvas)
      console.log(Canvas2Image)
      const img = Canvas2Image.convertToImage(canvas)
      console.log(img)
      document
        .getElementById('shareImage')
        .appendChild(img)
    });
  }
  render() {
    const user = {
      avatar: require('images/test.png'),
      name: '陈小春',
      major: '艺术/设计'
    }
    return (
      <div id={share.share}>
      {this.state.showDialog ? (<div id="shareImage" className={share.shareImage}></div> ):
        <div>
          <Button type="primary" onClick={this._share.bind(this)}>html2canvas</Button>
          <div id="shareHtml">
            <div className={share.title}>
              <h1>见简（历）识人</h1>
              <p>口袋兼职2017年简历设计大赛</p>
            </div>
            <div className={share.resumeImg}>
              <img src={require('images/background.jpg')} alt=""/>
            </div>
            <UserInfo user={user}></UserInfo>
            <div className={share.intruduce}>
              最后的对话有深意的 千反田说：“ 想把我的家乡介绍给你”意思其实是（我想让你留下来
              和我永远在一起）折棒在想像的回答中也是以未来生活为前提“战略性经营由我负责”意思是（你主内 我主外 我会留下来
              和你在一起），虽然到最后也说不出口，不过这项回应，大概老早就已经想好了。
              原因是他问自己，当时的里志也是同样心情吗？说到里志的心情，他其实早就知道摩耶花的心意，也知道自己喜欢摩耶花，不过临场就是说不出口，因为他害怕负起这项责任。
            </div>
            <div className={share.qrcode}>
              <img src={require('images/background1.png')} alt=""/>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default Share;
