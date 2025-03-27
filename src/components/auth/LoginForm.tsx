import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Input, Button, Alert } from "antd";

const schema = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  password: yup.string().min(6, "Mật khẩu ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

type LoginFormProps = {
  onSubmit: (data: { email: string; password: string }) => void;
  loading: boolean;
  error: string | null;
};

const LoginForm = ({ onSubmit, loading, error }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      {error && <Alert message={error} type="error" showIcon className="mb-4" />}
      
      <Form.Item 
        label="Email" 
        validateStatus={errors.email ? "error" : ""} 
        help={errors.email?.message}
      >
        <Input type="email" {...register("email")} />
      </Form.Item>

      <Form.Item 
        label="Mật khẩu" 
        validateStatus={errors.password ? "error" : ""} 
        help={errors.password?.message}
      >
        <Input.Password {...register("password")} />
      </Form.Item>

      <Button type="primary" htmlType="submit" block loading={loading}>
        Đăng nhập
      </Button>
    </Form>
  );
};

export default LoginForm;
