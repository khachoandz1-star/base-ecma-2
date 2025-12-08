import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { email } from "zod";



function Register() {
    const API = "http://localhost:3000";
    const nav = useNavigate();

    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submit=(e)=>{
    e.preventDefault();

    axios.post(`${API}/register`,{
      username,
      email,
      password,

    })
    .then((response)=>{
      nav("/login");
      toast.success("Đăng ký thành công");
    })
    .catch(()=>{
      toast.error("Đăng ký không thành công");
    })


    }
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-8">ĐĂNG KÝ</h1>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Tên"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700"
          >
            Đăng ký
          </button>
        </form>

        <p className="text-center mt-6">
          Đã có tài khoản?{" "}
          <a href="/signin" className="text-blue-600 font-bold">
            Đăng nhập
          </a>
        </p>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}

export default Register;
