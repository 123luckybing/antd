import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Upload,Button,Icon,message } from 'antd';
class BreadcrumbMenu extends Component {
  onChange(info) { // 上传文件改变时的状态，
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  render() {
    const props = {
      name: 'file', // name: 发到后台的文件参数名
      action: '//jsonplaceholder.typicode.com/posts/', //必选参数, 上传的地址
      headers: { // 设置上传的请求头部，IE10 以上有效
        authorization: 'authorization-text',
      }
    }
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>一：点击上传</p>
        {/* 最外层用Uploa包起来 */}
        <Upload {...props}>
          <Button>
            <Icon type="upload" />Click me to upload
          </Button>
        </Upload>
      </div>
    );
  }
}
export default BreadcrumbMenu;