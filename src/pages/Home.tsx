import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 overflow-hidden">
      <h1 className="text-4xl font-bold text-blue-500">Chào mừng đến với Ứng dụng của bạn!</h1>
      <p className="text-lg text-green-700 mt-4">Đăng ký hoặc đăng nhập để tiếp tục.</p>
      <div className="mt-6">
        <Link to="/account/register" className="px-4 py-2 bg-green-500 text-white rounded-lg mx-2">
          Đăng ký
        </Link>
        <Link to="/account/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Home;
