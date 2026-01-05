import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-bg flex items-center justify-center px-4">
            <div className="bg-panel p-8 rounded-lg shadow-card w-full max-w-md border border-border text-center">
                <h2 className="text-2xl font-bold text-text mb-4">Quên Mật Khẩu?</h2>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-textMuted text-sm">Nhập email để lấy lại mật khẩu.</p>
                        <div className="relative flex items-center text-left">
                            <FaEnvelope className="absolute left-3 text-textMuted" />
                            <input type="email" required className="w-full bg-panelLight border border-border rounded-md py-2 pl-10 pr-4 text-text focus:outline-none focus:border-primary" placeholder="Email của bạn" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-button transition">Gửi Yêu Cầu</button>
                    </form>
                ) : (
                    <div>
                        <div className="text-success text-5xl flex justify-center mb-4"><FaEnvelope /></div>
                        <h3 className="text-xl font-bold text-text">Đã gửi email!</h3>
                        <p className="text-textMuted text-sm mt-2">Kiểm tra hộp thư của bạn.</p>
                    </div>
                )}
                <div className="mt-8">
                    <Link to="/login" className="flex items-center justify-center text-textMuted hover:text-text transition text-sm"><FaArrowLeft className="mr-2" /> Quay lại đăng nhập</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;