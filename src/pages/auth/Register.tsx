import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { registerUser } from "../../redux/slices/auth.slice";
import { RegisterLocalRequest } from "../../types/User";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterLocalRequest>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: RegisterLocalRequest) => {
    dispatch(registerUser(data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              type="text"
              {...register("name", { required: "Vui lòng nhập họ và tên" })}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Vui lòng nhập email" })}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              {...register("password", { required: "Vui lòng nhập mật khẩu", minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" } })}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full mt-5 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
