"use client";
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import MobileNav from "@/app/components/MobileNav"
import { useState, useEffect } from "react";
import { HiPlus, HiMinusSm } from "react-icons/hi";
import Image from "next/image";


const baseApi = process.env.NEXT_PUBLIC_BASE_API;


const Page = ({ params }) => {

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    const fetchProduct = async () => {
        try {
            const response = await fetch(`${baseApi}/api/products/single/${params.slug}`);
            const data = await response.json();
            setProduct(data);
            // setMainImage(data.image[0]); // Set the first image as the main image initially
            console.log("Product fetched:", data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    useEffect(() => {
        fetchProduct();
    }, []);


    return (
        <div className='bg-[#0f0e0f] min-h-screen text-white'>

            <div className="sticky top-0 bg-black z-30">

                <div className="mx-32">
                    <Navbar />
                </div>

                <div className="sticky top-0 bg-[#100f10]">
                    <MobileNav />
                </div>

            </div>

            <section className="mx-32">

                {product &&
                    <div className="flex justify-between items-center  p-4">
                        <div className="flex  gap-4">
                            <div className=''>
                                <Image width={100} height={100} src={`${baseApi}/${product.image[0]}`} alt={product.name} className="w-32 h-32 object-cover rounded" />
                                <div className="buttons flex justify-between gap-3 my-4">
                                    <span className="text-xl border rounded-full p-1" onClick={incrementQuantity}><HiPlus /></span>
                                    <span className=" border px-4 ">{quantity}</span>
                                    <span className="text-xl border rounded-full p-1" onClick={decrementQuantity}><HiMinusSm /></span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl text-[#c19f5f] co font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-500">₹{product.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={incrementQuantity}
                                className="px-2 py-1  text-gray-600 rounded"
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={decrementQuantity}
                                className="px-2 py-1  text-gray-600 rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                }
                
            </section >

            <section >
                <Footer />
            </section>

        </div >
    )
}

export default Page