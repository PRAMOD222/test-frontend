"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Footer from "@/app/components/Footer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;


const Login = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseApi}/api/user/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) { // Redirect to dashboard on successful login
                console.log("Login successful");
                const data = await response.json();
                console.log(data);

                localStorage.setItem("token", data.token);

                router.push("/");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };



    return (
        <div >
            <div className="px-32 sticky top-0 z-50  bg-black">
                <Navbar />
            </div>
            <div className="sticky top-0 bg-[#100f10] z-50">
                <MobileNav />
            </div>

            <div className="min-h-screen bg-black text-white space-y-10 pt-10">
                <section className=" flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-semibold cormorant text-[#c19f5f]">Welcome To Al Forno</h2>
                    <p className="text-lg md:text-xl italic my-2 text-neutral-400 text-center max-w-md">Where every bite tells a story of freshly baked perfection.</p>
                </section>

                <section className=" bg-black flex flex-col justify-center items-center">
                    <div className="w-full text-white max-w-md bg-neutral-900 shadow-md rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-center text-[#c19f5f]">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium mb-2">Email</label> */}
                                <input
                                    placeholder="Email*"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2  rounded-lg outline-none focus:outline-1 bg-neutral-600 focus:outline-[#c19f5f]"
                                    required
                                />
                            </div>
                            <div className="mb-4 rounded-lg focus:border bg-neutral-600 focus:border-[#c19f5f] flex items-center px-2">
                                {/* <label className="block text-sm font-medium mb-2">Password</label> */}
                                <input
                                    placeholder="Password*"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full py-2 outline-none bg-neutral-600 rounded-lg"
                                    required
                                />
                                {showPassword ? <FaRegEyeSlash onClick={() => setShowPassword(false)} className="text-xl cursor-pointer text-[#c19f5f]" /> :
                                    < FaRegEye onClick={() => setShowPassword(true)} className="text-xl cursor-pointer text-[#c19f5f]" />}
                            </div>
                            <button type="submit" className="w-full bg-[#c19f5f] text-white p-2 rounded-lg hover:bg-[#c19f5f]/80 transition duration-300" >Login</button>
                        </form>
                        <p className="mt-4 text-center">
                            Don&apos;t have an account? <Link href="/signup" className="text-[#c19f5f]">Signup</Link>
                        </p>
                    </div>
                </section>
            </div>
            <Footer />

        </div>
    );
};

export default Login;
