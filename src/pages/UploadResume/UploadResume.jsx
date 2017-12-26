import React, {Component} from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Dialog
} from 'element-react';
import image from 'images/test.png'
import upload from './Upload.styl'

class UploadResume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        nickName: '',
        school: '',
        major: '',
        h5link: '',
        images: []
      },
      rules: {
        nickName: [
          {
            required: true,
            max: 6,
            message: '请输入正确的昵称',
            trigger: 'blur'
          }
        ],
        school: [
          {
            required: true,
            message: '请选择学校',
            trigger: 'blur'
          }
        ],
        major: [
          {
            required: true,
            message: '请选择专业',
            trigger: 'blur'
          }
        ],
        h5link: [
          {
            required: true,
            message: '请输入正确的链接',
            trigger: 'change'
          }
        ]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  }
  // 表单填入：=
  _onChange(key, value) {
    console.log(value)
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    });
  }
  // 表单选择
  _onSearch(query) {
    if (query !== '') {
      this.setState({loading: true})
      setTimeout(() => {
        this.setState({
          loading: false,
          options: this
            .state
            .states
            .map(item => {
              return {value: item, label: item};
            })
            .filter(item => {
              return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
        });
      }, 200);
    } else {
      this.setState({options: []});
    }
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.refs.UploadForm.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
  }
  _handleSuccess(response, file, fileList) {
    console.log(response, file, fileList);
  }
  _handlePreview(file) {
    this.setState({dialogImageUrl: file.url, dialogVisible: true})
  }
  _handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  render() {
    const {dialogImageUrl, dialogVisible} = this.state;
    return (
      <div id={upload.upload}>
        <img src={image} alt=""/>
        <Form
          ref="UploadForm"
          labelWidth="80"
          model={this.state.form}
          rules={this.state.rules}
          className={upload.uploadForm}>
          <Form.Item label="昵称" prop="nickName">
            <Input
              placeholder="请输入昵称"
              value={this.state.form.phone}
              name="nickName"
              maxLength={6}
              onChange={this
              ._onChange
              .bind(this, 'nickName')}></Input>
          </Form.Item>
          <Form.Item label="学校" prop="school">
            <Select
              value={this.state.form.school}
              filterable={true}
              placeholder="请选择学校"
              className={upload.uploadSelect}>
              {this
                .state
                .options
                .map(el => {
                  return <Select.Option key={el.value} label={el.label} value={el.value}/>
                })}
            </Select>
          </Form.Item>
          <Form.Item label="专业" prop="major">
            <Select
              value={this.state.form.major}
              filterable={true}
              placeholder="请选择专业"
              className={upload.formSelect}>
              {this
                .state
                .options
                .map(el => {
                  return <Select.Option key={el.value} label={el.label} value={el.value}/>
                })}
            </Select>
          </Form.Item>
          <Form.Item label="H5链接" prop="h5link">
            <Input placeholder="请输入链接"/>
          </Form.Item>
          {/* <Form.Item> */}
          <div>
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture"
              showFileList={false}
              onPreview={file => this._handlePreview(file)}
              onSuccess={(response, file, fileList) => this._handleSuccess(response, file, fileList)}
              onRemove={(file, fileList) => this._handleRemove(file, fileList)}>
              <div className={upload.uploadBtn}>
                <i className="el-icon-plus"></i>
                添加
              </div>
            </Upload>
            <Dialog
              visible={dialogVisible}
              size="tiny"
              onCancel={() => this.setState({dialogVisible: false})}>
              <img width="100%" src={dialogImageUrl} alt=""/>
            </Dialog>
          </div>
          {/* </Form.Item> */}
        </Form>
        <div className={upload.uploadResumeSubmit}>
          <Button
            type="primary"
            onClick={this
            ._handleSubmit
            .bind(this)}>上传</Button>
        </div>
        <p className={upload.uploadTips}>特别提醒：在简历作品中保护好个人隐私，小袋不建议在简历作品中透露手机号、微信、QQ等个人信息</p>
      </div>
    );
  }
}

export default UploadResume;
