"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MobileNav from "@/app/components/MobileNav";
import { useState, useEffect } from "react";
import { HiPlus, HiMinusSm } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Page = ({ params }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${baseApi}/api/products/single/${params.slug}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [params.slug]);

    const handleCheckout = async () => {
        if (!product) return;
        
        const orderData = {
            products: [{ product: product._id, quantity }],
            total: product.price * quantity,
        };

        try {
            setLoading(true);
            const response = await fetch(`${baseApi}/api/order/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is stored in localStorage
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error placing order:", errorData.message);
                alert("Failed to place order. Please try again.");
                setLoading(false);
                return;
            }

            const result = await response.json();
            alert("Order placed successfully!");
            router.push("/orders"); // Redirect to orders page
        } catch (error) {
            console.error("Error placing order:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#0f0e0f] min-h-screen text-white">
            <div className="sticky top-0 bg-black z-30">
                <div className="mx-32">
                    <Navbar />
                </div>
                <div className="sticky top-0 bg-[#100f10]">
                    <MobileNav />
                </div>
            </div>

            <section className="mx-32">
                {product && (
                    <div className="flex justify-between items-center p-4">
                        <div className="flex gap-4">
                            <div>
                                <Image
                                    width={100}
                                    height={100}
                                    src={`${baseApi}/${product.image[0]}`}
                                    alt={product.name}
                                    className="w-32 h-32 object-cover rounded"
                                />
                                <div className="buttons flex justify-between gap-3 my-4">
                                    <span className="text-xl border rounded-full p-1" onClick={decrementQuantity}>
                                        <HiMinusSm />
                                    </span>
                                    <span className="border px-4">{quantity}</span>
                                    <span className="text-xl border rounded-full p-1" onClick={incrementQuantity}>
                                        <HiPlus />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl text-[#c19f5f] font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-500">₹{product.price}</p>
                                <p className="text-sm mt-2">
                                    Total: ₹{(product.price * quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleCheckout}
                        className="bg-[#c19f5f] text-black px-6 py-2 rounded text-lg font-semibold"
                        disabled={loading}
                    >
                        {loading ? "Placing Order..." : "Checkout"}
                    </button>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    );
};

export default Page;
