"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { HiPlus, HiMinusSm } from "react-icons/hi";


const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Cart = () => {

    const [cart, setCart] = useState(null);

    const fetchCart = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it

            const response = await fetch(`${baseApi}/api/cart/fetch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token // Send the JWT token in the header
                },
            });
            const data = await response.json();
            setCart(data);
            console.log('Cart fetched:', data);

        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const updateCartQuantity = async (productId, quantity) => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it
            const response = await fetch(`${baseApi}/api/cart/update-quantity`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,  // Include the JWT token
                },
                body: JSON.stringify({ productId, quantity }),
            });

            const data = await response.json();
            console.log('Cart updated:', data);
            fetchCart();
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className=' bg-black text-white'>
            <div className="mx-32 sticky top-0">
                <Navbar />
            </div>
            <div className="mx-32">
                <div className=" min-h-screen my-8">
                    <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                    {cart && cart.length > 0 ? (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.product._id} className="flex justify-between items-center border p-4">
                                    <div className="flex  gap-4">
                                        <div className='border'>
                                            <Image width={100} height={100} src={`${baseApi}/${item.product.image[0]}`} alt={item.product.name} className="w-32 h-32 object-cover rounded" />
                                            <div className="buttons flex justify-between gap-3 my-4">
                                                <span className="text-xl border rounded-full p-1"><HiPlus /></span>
                                                <span className=" border px-4 ">{item.quantity}</span>
                                                <span className="text-xl border rounded-full p-1"><HiMinusSm /></span>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl text-[#c19f5f] co font-semibold">{item.product.name}</h2>
                                            <p className="text-sm text-gray-500">₹{item.product.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => updateCartQuantity(item.product._id, item.quantity - 1)}
                                            className="px-2 py-1  text-gray-600 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateCartQuantity(item.product._id, item.quantity + 1)}
                                            className="px-2 py-1  text-gray-600 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-lg">Your cart is empty</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart