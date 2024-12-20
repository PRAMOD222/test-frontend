"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MobileNav from '@/app/components/MobileNav';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { MdDelete } from "react-icons/md";
import { updatequantity, removeFromCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import Link from "next/link";




const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Cart = () => {
    const dispatch = useDispatch();


    const [cart, setCart] = useState(null);

    const fetchCart = async () => {
        try {
            // Retrieve the token from localStorage or wherever you store it

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
        dispatch(updatequantity({ productId, quantity }));
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

    const deleteFromCart = async (productId) => {
        dispatch(removeFromCart(productId));
        try {
            const token = localStorage.getItem('token'); // Retrieve token
            const response = await fetch(`${baseApi}/api/cart/remove-from-cart`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({ productId }), // Send productId in request body
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Product removed:', data.message);
                fetchCart(); // Refresh cart in UI
            } else {
                const errorText = await response.text();
                console.error('Error removing product:', errorText);
            }
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchCart();
        }
    }, []);

    return (
        <div className=' bg-black text-white'>
            <div className="px-32 sticky top-0 bg-black z-40">
                <Navbar />
            </div>
            <div className="sticky top-0 bg-[#100f10] z-50">
                <MobileNav />
            </div>
            {/* <section>
                <Image className="w-full md:h-[40vh] origin-center object-cover  bg-fixed -z-10" src="/cart.png" alt="cart" width={2000} height={2000} />
            </section> */}
            <div className="mx-6 md:mx-32 mt-10">

                {cart && cart.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cart.map((item) => (
                                <TableRow key={item.product._id}>
                                    <TableCell className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center md:justify-start">
                                        <Image
                                            className="aspect-square"
                                            width={100}
                                            height={100}
                                            src={`${baseApi}/${item.product.image[0]}`}
                                            alt={item.product.name}
                                        />

                                        <div className="flex gap-4">
                                            <h2>{item.product.name}</h2>
                                            <button onClick={() => deleteFromCart(item.product._id)} className="">
                                                <MdDelete className="text-xl text-red-500" />
                                            </button>
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.product.price}</TableCell>
                                    <TableCell>
                                        <input
                                            type="number"
                                            className="w-16 outline-none focus:outline-none focus:border border-[#c19f5f] rounded px-2 py-1 text-center bg-gray-800"
                                            value={item.quantity}
                                            min={1}
                                            onChange={(e) => updateCartQuantity(item.product._id, parseInt(e.target.value))}
                                        />
                                    </TableCell>
                                    <TableCell>{item.product.price * item.quantity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (

                    <section className="bg-black text-white min-h-[60vh] space-y-6 flex flex-col items-center">
                        <h2 className="text-center text-[#c19f5f] text-3xl font-semibold cormorant ">Your Cart is Empty</h2>
                        <Link href="/" className="border border-[#c19f5f] py-2 px-4 bg-[#c19f5f] rounded-md hover:bg-black hover:text-[#c19f5f]">Continue Shopping</Link>
                    </section>
                )}




            </div>
            <Footer />
        </div>
    )
}

export default Cart