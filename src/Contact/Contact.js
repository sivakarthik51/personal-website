import React, { useState, useEffect } from 'react';
import { Form, Input, Button, PageHeader } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 21,
  },
};
const ContactForm =  () =>  {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();
    let iconLoading = false;
    const validateMessages ={
        required: 'This field is required!',
        types: {
          email: 'Not a validate email!',
          number: 'Not a validate number!',
        }
      };
    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = values => {
        iconLoading = true;
        setTimeout(() => {  console.log(values); }, 2000);
       
         iconLoading = false;
      };
      const enterIconLoading = () => {
        //iconLoading = true;
      }
    return (
        <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            
            
            <Form.Item name={['user', 'message']} label="Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} shouldUpdate>
                {() => (
                <Button type="primary" htmlType="submit" icon={<SendOutlined />} loading={iconLoading}
                 onClick={enterIconLoading} disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length).length
                }>
                Send
                </Button>
                )}
            </Form.Item>
          </Form>
    )
}

export default class ContactComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
              iconLoading: false
        }
    }
    
    render(){
        
        return (
            <>
            <PageHeader
                className="site-page-header"
                title="Contact Me"
                subTitle="Expect Delay in Responses"
            />
            <br />
            <ContactForm />
          </>
        )
    }
}