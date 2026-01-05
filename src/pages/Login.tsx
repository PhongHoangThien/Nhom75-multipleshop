import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLock, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/authSlice";
import { RootState } from "../redux/store";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
        if (email === "student@hcmuaf.edu.vn" && password === "123456") {
            const fakeUser = { id: 1, username: "SinhVien", email: email };
            dispatch(loginSuccess(fakeUser));
            navigate("/");
        } else {
            dispatch(loginFailure("Email hoặc mật khẩu không đúng!"));
        }
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-4">
            <div className="bg-panel p-8 rounded-lg shadow-card w-full max-w-md border border-border">
                <h2 className="text-2xl font-bold text-text text-center mb-6">Đăng Nhập</h2>
                {error && <p className="text-danger text-center text-sm mb-4">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Email</label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-3 text-textMuted" />
                            <input type="text" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary"
                                   placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-textMuted text-sm mb-1">Mật khẩu</label>
                        <div className="relative flex items-center">
                            <FaLock className="absolute left-3 text-textMuted" />
                            <input type="password" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary"
                                   placeholder="Nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <label className="text-textMuted"><input type="checkbox" className="mr-2" />Ghi nhớ</label>
                        <Link to="/forgot-password" className="text-primary hover:underline">Quên mật khẩu?</Link>
                    </div>
                    <button disabled={isLoading} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-button transition">
                        {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
                    </button>
                </form>

                <div className="my-6 flex items-center justify-center space-x-2">
                    <span className="h-px w-full bg-border"></span>
                    <span className="text-textMuted text-sm">Hoặc</span>
                    <span className="h-px w-full bg-border"></span>
                </div>
                <div className="flex space-x-4">
                    <button className="flex-1 bg-[#3b5998] text-white py-2 rounded flex justify-center items-center"><FaFacebook className="mr-2"/> Facebook</button>
                    <button className="flex-1 bg-[#db4437] text-white py-2 rounded flex justify-center items-center"><FaGoogle className="mr-2"/> Google</button>
                </div>
                <p className="mt-6 text-center text-sm text-textMuted">
                    Chưa có tài khoản? <Link to="/register" className="text-primary font-bold hover:underline">Đăng ký ngay</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;