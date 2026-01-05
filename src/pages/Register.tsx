import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registerStart, registerSuccess, registerFailure } from "../redux/authSlice";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        dispatch(registerStart());
        // Giả lập đăng ký thành công
        setTimeout(() => {
            dispatch(registerSuccess());
            alert("Đăng ký thành công! Vui lòng đăng nhập.");
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-4 py-10">
            <div className="bg-panel p-8 rounded-lg shadow-card w-full max-w-md border border-border">
                <h2 className="text-2xl font-bold text-text text-center mb-6">Đăng Ký</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-3 text-textMuted" />
                        <input type="text" name="username" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary" placeholder="Tên hiển thị" onChange={handleChange} required />
                    </div>
                    <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-3 text-textMuted" />
                        <input type="email" name="email" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary" placeholder="Email" onChange={handleChange} required />
                    </div>
                    <div className="relative flex items-center">
                        <FaLock className="absolute left-3 text-textMuted" />
                        <input type="password" name="password" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary" placeholder="Mật khẩu" onChange={handleChange} required />
                    </div>
                    <div className="relative flex items-center">
                        <FaLock className="absolute left-3 text-textMuted" />
                        <input type="password" name="confirmPassword" className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary" placeholder="Nhập lại mật khẩu" onChange={handleChange} required />
                    </div>
                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-button transition">Đăng Ký</button>
                </form>
                <p className="mt-6 text-center text-sm text-textMuted">Đã có tài khoản? <Link to="/login" className="text-primary font-bold hover:underline">Đăng nhập</Link></p>
            </div>
        </div>
    );
};

export default Register;