import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { postLoginRequest } from "../../types/User";
import { loginUser } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state: RootState) => state.auth);

  const handleLogin = (data: postLoginRequest) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (token) {
      alert("Đăng nhập thành công!");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
    </div>
  );
};

export default Login;
