"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";



const AnimatedNav = () => {
    const [showNavbar, setShowNavbar] = useState(false);


     useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNavbar(true); // Show navbar when scrollY > 100px
            } else {
                setShowNavbar(false); // Hide navbar if less than 100px
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <motion.nav
                initial={{ y: -150 }} // Navbar starts hidden
                animate={{ y: showNavbar ? 0 : -150 }} // Slide down when scroll is greater than 100px
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-40 bg-black text-white py-4 shadow-lg "
            >
                <div className="mx-32 ">
                    <Navbar />
                </div>
            </motion.nav>
        </div>
    )
}

export default AnimatedNav