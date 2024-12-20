"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Footer from "@/app/components/Footer";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Signup = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseApi}/api/user/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                toast.success('Account Created Successfully', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });

                router.push("/login");

            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }




        } catch (error) {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    };

    return (
        <div className="bg-black">
            <div className="px-32 sticky top-0 z-40  bg-black">
                <Navbar />
            </div>
            <div className="sticky top-0 bg-[#100f10] z-50">
                <MobileNav />
            </div>

            <div className="min-h-screen space-y-10 pt-10">
                <section className=" flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-semibold cormorant text-[#c19f5f]">Welcome To Al Forno</h2>
                    <p className="text-lg md:text-xl italic my-2 text-neutral-400 text-center max-w-md">"Bringing you the joy of freshly baked moments."</p>
                </section>


                <div className=" bg-black flex flex-col justify-center items-center">
                    <div className="w-full text-white max-w-md bg-neutral-900 shadow-md rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-center text-[#c19f5f]">Signup</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium mb-2 ">Name</label> */}
                                <input
                                    autoComplete="name"
                                    placeholder="Name*"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg outline-none focus:outline-1 bg-neutral-600 focus:outline-[#c19f5f]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium mb-2">Email</label> */}
                                <input
                                    autoComplete="email"
                                    placeholder="Email*"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2  rounded-lg outline-none focus:outline-1 bg-neutral-600 focus:outline-[#c19f5f]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium mb-2">Phone</label> */}
                                <input
                                    autoComplete="tel"
                                    placeholder="Phone*"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-2  rounded-lg outline-none focus:outline-1 bg-neutral-600 focus:outline-[#c19f5f]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label className="block text-sm font-medium mb-2">Password</label> */}
                                <input
                                    autoComplete="new-password"
                                    placeholder="Password*"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full p-2  rounded-lg outline-none focus:outline-1 bg-neutral-600 focus:outline-[#c19f5f]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#c19f5f] text-white p-2 rounded-lg hover:bg-[#c19f5f]/80 transition duration-300"
                            >
                                Signup
                            </button>
                        </form>
                        <p className="mt-4 text-center">
                            Already have an account? <Link href="/login" className="text-[#c19f5f]">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
