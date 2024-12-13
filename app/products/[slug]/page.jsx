"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import MobileNav from '@/app/components/MobileNav';
import Image from 'next/image';
import { FaAnglesRight } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AddToCart from '@/app/components/AddToCart';

const baseApi = process.env.NEXT_PUBLIC_BASE_API;


const Page = ({ params }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${baseApi}/api/products/all`);
            const data = await response.json();
            setProducts(data);
            console.log("Products fetched:", data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
        console.log(params.slug);
    }, [params.slug]);

    // Get category keys
    const categories = Object.keys(products);

    // Filter products for the selected category (based on slug)
    const filteredCategory = products[params.slug] || [];

    // Get other categories except the selected one
    const otherCategories = categories.filter(category => category !== params.slug);

    return (
        <div className='text-white bg-black border border-gray-50/0 min-h-screen'>
            <div className="mx-32 sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="sticky top-0 bg-[#100f10] z-50">
                <MobileNav />
            </div>

            <div className="flex flex-col md:flex-row mx-6 md:mx-32 md:gap-10 ">

                <div className="w-64 sticky top-0 left-0 hidden md:block ">
                    <h2 className="text-2xl font-bold my-4">Categories</h2>
                    <ul className='space-y-4'>
                        {categories.map((category) => (
                            <li key={category} className="text-xl text-gray-500 hover:text-[#c19f5f] transition-all duration-300">
                                <Link href={`/products/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:w-64 sticky top-0 md:hidden block ">
                    {/* <h2 className="text-2xl font-bold my-4">Categories</h2> */}
                    <ul className='flex my-4 gap-2 flex-wrap'>
                        {categories.map((category) => (
                            <li key={category} className="text-xl text-gray-500 hover:text-[#c19f5f] transition-all duration-300">
                                <Link href={`/products/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    {/* Display Products for the selected category (slug) */}
                    <section className=''>
                        <h2 className="text-2xl font-bold  md:mt-4 mb-2">
                            {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
                        </h2>
                        <div className="main-products grid md:grid-cols-4 grid-cols-1 gap-8">
                            {filteredCategory.length > 0 ? (
                                filteredCategory.map((product) => (
                                    <div key={product._id} className="border border-[#c19f5f] rounded-md p-2 group hover:scale-105 transition-all duration-300">
                                        <div className="rounded-md overflow-hidden w-full aspect-square">
                                            <Image
                                                className="object-cover w-full brightness-50 group-hover:brightness-100 transition-all duration-300"
                                                src={`${baseApi}/${product.image[0]}`}
                                                alt={product.name}
                                                width={200}
                                                height={200}
                                            />
                                        </div>

                                        <div className="border-b border-[#c19f5f]/50 my-2  "></div>

                                        <h2 className='text-[#c19f5f] uppercase whitespace-nowrap overflow-hidden text-ellipsis'>{product.name}</h2>
                                        <p className='text-sm text-gray-400'>
                                            {product.description.length > 40
                                                ? `${product.description.slice(0, 40)}...`
                                                : product.description}
                                        </p>
                                        <div className='flex gap-2 items-center'>
                                            <p className={product.discount > 0 ? "line-through text-gray-400" : 'text-[#c19f5f] text-xl'}>Price: ₹{product.price}</p>
                                            {product.discount > 0 && <p className='text-green-500'>{product.discount} % off</p>}
                                            {product.discount > 0 && <p className='text-[#c19f5f] text-xl'> Price: ₹{product.discountedPrice}</p>}
                                        </div>

                                        {/* <Link href={`/product/${product._id}`} className=''>View More <FaAnglesRight className='inline ' /></Link> */}
                                        <h3 className='bg-[#c19f5f] text-white py-2 px-4 rounded-md my-2 mb-auto'>
                                            <AddToCart product={product} />
                                        </h3>

                                    </div>
                                ))
                            ) : (
                                <p>No products found for this category.</p>
                            )}
                        </div>
                    </section>

                    {/* Loop through the remaining categories and display them */}
                    {otherCategories.map((category) => (
                        <section key={category} className=''>
                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h2>
                            <div className="main-products grid md:grid-cols-4 grid-cols-1 gap-8">
                                {products[category].length > 0 ? (
                                    products[category].map((product) => (
                                        <div key={product._id} className="border border-[#c19f5f] rounded-md p-2 group hover:scale-105 transition-all duration-300">
                                            <div className="rounded-md overflow-hidden w-full aspect-square">
                                                <Image
                                                    className="object-cover w-full brightness-50 group-hover:brightness-100 transition-all duration-300"
                                                    src={`${baseApi}/${product.image[0]}`}
                                                    alt={product.name}
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>

                                            <div className="border-b border-[#c19f5f]/50 my-2  "></div>

                                            <h2 className='text-[#c19f5f] uppercase whitespace-nowrap overflow-hidden text-ellipsis'>{product.name}</h2>
                                            <p className='text-sm text-gray-400'>
                                                {product.description.length > 40
                                                    ? `${product.description.slice(0, 40)}...`
                                                    : product.description}
                                            </p>
                                            <div className='flex gap-2 items-center'>
                                                <p className={product.discount > 0 ? "line-through text-gray-400" : 'text-[#c19f5f] text-xl'}>Price: ₹{product.price}</p>
                                                {product.discount > 0 && <p className='text-green-500'>{product.discount} % off</p>}
                                                {product.discount > 0 && <p className='text-[#c19f5f] text-xl'> Price: ₹{product.discountedPrice}</p>}
                                            </div>

                                            {/* <Link href={`/product/${product._id}`} className=''>View More <FaAnglesRight className='inline ' /></Link> */}
                                            <h3 className='bg-[#c19f5f] text-white py-2 px-4 rounded-md my-2 mb-auto'>
                                                <AddToCart product={product} />
                                            </h3>

                                        </div>
                                    ))
                                ) : (
                                    <p>No products available in this category.</p>
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};


const ProductItem = ({ product }) => {
    // State to hold the currently selected image
    const [selectedImage, setSelectedImage] = useState(product.image[0]);

    // Function to change the selected image when clicking a thumbnail
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="border p-2 m-2 flex w-full">
            <div className="flex border rounded-md">
                {/* Left side - Thumbnail images */}
                <div className="flex flex-col">
                    {product.image.map((image, index) => (
                        <div
                            key={index}
                            className="m-2 h-20 w-20 border rounded overflow-hidden cursor-pointer"
                            onClick={() => handleImageClick(image)} // Update the selected image when clicked
                        >
                            <Image
                                className="object-cover w-full"
                                src={`${baseApi}/${image}`}
                                alt="product image"
                                width={60}
                                height={60}
                            />
                        </div>
                    ))}
                </div>

                {/* Right side - Main selected image */}
                <div className="mainimage m-2">
                    <Image
                        width={1000}
                        height={1000}
                        alt="selected product image"
                        src={`${baseApi}/${selectedImage}`}
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
            </div>

            <div className="border rounded-md">

                <h2 className="text-2xl">{product.name}</h2>
                <p className="text-lg">{product.description}</p>
                <p className="text-4xl">Price: ₹{product.price}</p>
                <p>Quantity in stock: {product.quantity}</p>
                <p>Discounted Price: ₹{product.discountedPrice}</p>
                <p>Volume: {product.volume}</p>
                <p>Barcode: {product.barcode}</p>
                <p>Additional Info: {product.addInfo}</p>
                <p>Veg: {product.veg ? "Yes" : "No"}</p>
            </div>
        </div>
    );
};

export default Page;
