import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';
import LoginIcon from './LoginIcon';


const Navbar = () => {

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
                    <li> <Link href={'/about'}>About </Link></li>
                    <li> <Link href={'/contact'}>Enquire Now </Link></li>
                    <LoginIcon />
                    <CartIcon />
                </ul>
            </nav>


        </div>
    )
}

export default Navbar