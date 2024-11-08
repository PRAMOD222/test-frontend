'use client';
import { useState } from "react";
import { FaHamburger, FaTimes, FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <div className="text-white w-full block md:hidden ">
            <div className={` p-4 justify-between items-center z-30 w-full ${isOpen ? "hidden" : "flex"}`}>
                <Link  href={'/'}><Image className='w-20' width={200} height={200} src="/logo.png" alt="logo" /></Link>
                <FaHamburger className="text-3xl cursor-pointer" onClick={toggleNav} />
            </div>

            {isOpen && (
                <motion.nav
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 80 }}
                    className="absolute w-screen h-screen bg-gray-800 p-4 text-2xl text-white z-50 "
                >
                    <FaTimes className="text-3xl absolute top-6 right-6 cursor-pointer " onClick={toggleNav} />
                    <ul className="space-y-6  bg-gray-800 ">
                        <li className="my-4"> <Link href={'/'}><Image className='w-20' width={200} height={200} src="/logo.png" alt="logo" /></Link></li>
                        <li> <Link href={'/products/barcakes'}> Bar Cakes</Link></li>
                        <li> <Link href={'/products/toasts'}> Toast</Link></li>
                        <li> <Link href={'/products/lavash'}> Lavash</Link></li>
                        <li> <Link href={'/products/cheesestraws'}> Cheese Straws</Link></li>
                        <li> <Link href={'/about'}>About + </Link></li>
                        <li>Enquire Now</li>
                        <li> <Link href={'/contact'}> Contact</Link></li>
                        <li className=''><Link href={'/cart'}><FaCartShopping /></Link></li>
                        <li className=''><Link href={'/login'}><FaUserAlt /></Link></li>
                    </ul>
                </motion.nav>
            )}
        </div>
    );
};

export default MobileNav;
