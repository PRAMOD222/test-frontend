"use client"
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';


const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div>
            <nav className='hidden md:block' >
                <ul className='flex items-center justify-between text-xl text-white bg-black py-2 '>
                    <li className='w-max rounded-full bg-[#c19f5f] p-2'> <Link href={'/'}><Image className='w-20' width={200} height={200} src="/logo.png" alt="logo" /></Link></li>
                    <li> <Link href={'/products/barcakes'}> Bar Cakes</Link></li>
                    <li> <Link href={'/products/toasts'}> Toast</Link></li>
                    <li> <Link href={'/products/lavash'}> Lavash</Link></li>
                    <li> <Link href={'/products/cheesestraws'}> Cheese Straws</Link></li>
                    <li> <Link href={'/products/breadsticks'} className=''>Breadsticks </Link></li>
                    <li> <Link href={'/about'}>About + </Link></li>
                    <li>Enquire Now</li>
                    {/* <li> <Link href={'/contact'}> Contact</Link></li> */}
                    <li className='relative'><Link href={'/cart'}><FaCartShopping /> <span className='absolute -top-2 -right-2 bg-[#c19f5f] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs '>{cartItems.length}</span></Link></li>
                    <li className=''><Link href={'/login'}><FaUserAlt /></Link></li>
                </ul>
            </nav>

            
        </div>
    )
}

export default Navbar