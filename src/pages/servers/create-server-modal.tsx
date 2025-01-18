import type {FormProps} from 'antd';
import {Button, Form, Input, Modal} from 'antd';

type Props = {
  isOpen: boolean;
  setIsCreateServerModalOpen: (isOpen: boolean) => void;
}

type FieldType = {
  name: string;
  host: string;
  port: number;
  password: string;
  description?: string;
};

export default function CreateServerModal({isOpen, setIsCreateServerModalOpen}: Props) {
  const handleOk = () => {
    setIsCreateServerModalOpen(false);
  };

  const handleCancel = () => {
    setIsCreateServerModalOpen(false);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Modal title="Add Server" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          style={{maxWidth: 600}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{required: true, message: 'Please input server name!'}]}
            layout="vertical"
            wrapperCol={{span: 24}}
          >
            <Input/>
          </Form.Item>

          <div className="flex">
            <Form.Item<FieldType>
              label="Host"
              name="host"
              wrapperCol={{span: 22}}
              rules={[{required: true, message: 'Please input server host!'}]}
              layout="vertical"
              className="w-8/12"
            >
              <Input/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Port"
              name="port"
              wrapperCol={{span: 24}}
              rules={[{required: true, message: 'Please input server host!'}]}
              layout="vertical"
              className="w-4/12"
            >
              <Input/>
            </Form.Item>
          </div>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            wrapperCol={{span: 24}}
            rules={[{required: true, message: 'Please input server password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Descritpion"
            name="description"
            wrapperCol={{span: 24}}
          >
            <Input/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
;
