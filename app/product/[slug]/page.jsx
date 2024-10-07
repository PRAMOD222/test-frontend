"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

const Page = ({ params }) => {
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(""); // State to track the main image
    const [cartStatus, setCartStatus] = useState("");

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${baseApi}/api/products/single/${params.slug}`);
            const data = await response.json();
            setProduct(data);
            setMainImage(data.image[0]); // Set the first image as the main image initially
            console.log("Product fetched:", data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const addToCart = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage or wherever you store it

            const response = await fetch(`${baseApi}/api/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token // Send the JWT token in the header
                },
                body: JSON.stringify({
                    productId: product._id,  // Send the product ID in the request body
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setCartStatus('Product added to cart!');
                console.log("Product added to cart:", data);
                
            } else {
                setCartStatus('Failed to add product to cart.');
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            setCartStatus('Error adding product to cart.');
        }
    };


    useEffect(() => {
        fetchProduct();
    }, []);

    const handleImageClick = (img) => {
        setMainImage(img); // Update the main image when a smaller image is clicked
    };

    return (
        <div className="bg-black">
            <div className="mx-32 sticky top-0 left-0">
                <Navbar />
            </div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="mx-32 py-24">
                    {product ? (
                        <div key={product.id} className="mx-auto flex gap-4">
                            <div className="aspect-square w-1/2 ">
                                <Image
                                    width={2000}
                                    height={2000}
                                    alt="ecommerce"
                                    className=" object-cover object-center rounded aspect-square w-full"
                                    src={`${baseApi}/${mainImage}`} // Display the main image
                                />
                            </div>
                            <div className="lg:w-1/2 flex flex-col justify-end space-y-8">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {product.category}
                                </h2>
                                <h1 className="text-[#c19f5f] text-3xl title-font font-medium">
                                    {product.name}
                                </h1>
                                <p className="leading-relaxed text-gray-500">{product.description}</p>

                                <div className="flex gap-4">
                                    <span className="title-font font-medium text-xl text-gray-600 line-through">
                                        ₹ {product.price}
                                    </span>
                                    <span className="title-font font-medium text-xl text-green-500">
                                        {product.discount}% off
                                    </span>
                                    <span className="title-font font-medium text-3xl text-[#c19f5f]">
                                        ₹ {product.discountedPrice}
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                                        Buy Now
                                    </button>
                                    <button
                                        className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                                        onClick={() => addToCart(product._id)}  // Pass product ID here
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="flex mt-10 gap-2">
                                    {product.image && product.image.map((img, index) => (
                                        <div
                                            key={index}
                                            className="w-1/5 cursor-pointer" // Add cursor pointer to indicate clickability
                                            onClick={() => handleImageClick(img)} // Handle image click
                                        >
                                            <Image
                                                src={`${baseApi}/${img}`}
                                                width={200}
                                                height={200}
                                                alt="ecommerce"
                                                className="object-cover object-center rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-white">Loading product details...</p>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Page;
