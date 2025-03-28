import { Form, Input, Button, Alert } from "antd";
import { postLoginRequest } from "../../types/User";

interface LoginFormProps {
  onSubmit: (data: postLoginRequest) => void;
  loading: boolean;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: postLoginRequest) => {
    onSubmit(values);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Đăng nhập</h2>

      {error && <Alert message={error} type="error" className="mb-4" showIcon />}

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input placeholder="abc@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block loading={loading}>
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
//tạm ko vấn đề
