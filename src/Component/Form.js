import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form,Icon,Input } from 'antd';
const FormItem = Form.Item;
class FormCom extends Component {
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <li><Link to='/'>返回主页</Link></li>
        <p>Form表单里面套FormItem</p>
        <Form 
          layout='inline' // layout排列顺序inline水平排列
        >
          <FormItem
            validateStatus={userNameError ? 'error' :''} // 校验并获取一组输入域的值与 Error
            help={userNameError || ''} // 提示信息，如不设置，则会根据校验规则自动生成
          >
             {/* getFieldDecorator 用于和表单进行双向绑定 */}
            {
              getFieldDecorator('UserName', {
                rules:[{
                  required:true,
                  message: '请输入用户名'
                }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )
            }
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default FormCom;