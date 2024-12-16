"use client"
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';



const CartIcon = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div>
            <li className='relative'><Link href={'/cart'}><FaCartShopping /> <span className='absolute -top-2 -right-2 bg-[#c19f5f] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs '>{cartItems.length}</span></Link></li>
        </div>
    )
}

export default CartIcon