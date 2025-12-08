import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 



function Login() {
    const API = "http://localhost:3000";
    const nav=useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submit=(e)=>{
        e.preventDefault();

    axios.post(`${API}/login`,{
        email,
        password,
    })
    .then((response)=>{
        localStorage.setItem("user",JSON.stringify(response.data.user)); //nhớ lưu user
        localStorage.setItem("token",response.data.accessToken); //nhớ lưu token
        toast.success("Đăng nhập thành công");
        nav("/list");
    })
    .catch(()=>{
        toast.error("Đăng nhập không thành công");
    })
    }
 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-8">ĐĂNG NHẬP</h1>

        <form onSubmit={submit}  className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded font-bold hover:bg-green-700"
          >
            Đăng nhập
          </button>
        </form>

        <p className="text-center mt-6">
          Chưa có tài khoản? <a href="/signup" className="text-blue-600 font-bold">Đăng ký ngay</a>
        </p>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default Login;