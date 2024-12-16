"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const HomeCarousel = () => {

    const slides = [
        {
            id: 1,
            title: "Toast",
            subtitle: "Baked Fresh, Toasted To Perfection",
            image: "/toastbg.jpg",
            link: "/products/toasts"
        },
        {
            id: 2,
            title: "Bar Cakes",
            subtitle: "Delicious and Rich in Flavor",
            image: "/barcakebg.jpg",
            link: "/products/barcakes"
        },
        {
            id: 3,
            title: "Cheese Straws",
            subtitle: "Crispy and Perfectly Seasoned",
            image: "/cheesebg.jpg",
            link: "/products/cheesestraws"
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Clear interval on unmount
    }, [currentSlide]);


    return (
        <div className="relative h-[130vh] z-10">
            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-4 md:left-32 top-[20%] md:top-1/2 text-6xl z-20">
                &larr;
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-32 top-[20%] md:top-1/2 text-6xl z-20">
                &rarr;
            </button>

            {/* Slides */}
            {slides.map((slide, index) => (
                <motion.div
                    key={slide.id}
                    className="absolute top-0 left-0 w-full h-full "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ zIndex: currentSlide === index ? 1 : 0 }}
                >
                    <Image
                        className="w-full h-full object-cover contrast-[1.1] brightness-90"
                        src={slide.image}
                        alt={slide.title}
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center pt-12">
                        <div className="w-max bg-[#c19f5f] aspect-square rounded-full p-2 my-8 mx-auto">
                            <Image className='w-44' src={"/logo.png"} alt="hero" width={100} height={100} />
                        </div>
                        <h2 className="cormorant text-white text-8xl font-bold ">{slide.title}</h2>
                        <h2 className="cormorant text-3xl text-center md:text-6xl text-[#c19f5f] font-[500] my-3 md:whitespace-nowrap">{slide.subtitle}</h2>
                        <p className='text-[20px] text-center w-3/4 md:w-1/2'>Lightly toasted and irresistibly crunchy, our toast is made to elevate your snacking experience with every bite.</p>
                        <Link href={slide.link} className='text-[#c19f5f] text-xl uppercase border border-[#c19f5f] px-14 py-4 rounded-full mt-8'>Shop Now</Link>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default HomeCarousel