"use client"
import {useState} from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';


const navbar = () => {

    


    return (
        <div>
            <nav >
                <ul className='flex items-center justify-between text-xl text-white bg-black py-2 '>
                    <li > <Link href={'/'}><Image className='w-20' width={200} height={200} src="/logo.png" alt="logo" /></Link></li>
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
            </nav>
            <div className="cart">
                
            </div>
        </div>
    )
}

export default navbar