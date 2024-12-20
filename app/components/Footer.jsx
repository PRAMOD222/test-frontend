import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Styles from '@/css/home.module.css'
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";




const Footer = () => {
    return (
        <footer className=' bg-neutral-950 text-white'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mx-6 md:mx-32 py-6 md:py-10">

                <div className=" ">
                    <h2 className='text-2xl md:text-3xl text-[#c19f5f] cormorant '>Explore</h2>
                    <div className={`${Styles.shortline} mt-2 w-1/4`}></div>

                    <div className="links flex flex-col gap-4 mt-10">
                        <a href="tel:+918104606275" className="flex justify-start gap-4">
                            <BiPhoneCall className="text-2xl text-[#c19f5f]" />
                            <div>
                                <h3 className="text-sm text-[#c19f5f]">Call Us :</h3>
                                <h2 className="text-gray-500 hover:underline">
                                    +91 81046 06275
                                </h2>
                            </div>
                        </a>
                        <a href="mailto:paramount.patisserie@gmail.com" className="flex justify-start gap-4">
                            <CiMail className="text-2xl text-[#c19f5f]" />
                            <div>
                                <h3 className="text-sm text-[#c19f5f]">Email</h3>
                                <h2 className="text-gray-500 hover:underline">
                                    paramount.patisserie@gmail.com
                                </h2>
                            </div>
                        </a>
                        <div className="flex justify-start  gap-4">
                            <SlLocationPin className='text-2xl text-[#c19f5f] w-24' />
                            <div>
                                <h3 className='text-sm text-[#c19f5f]'>Our Location</h3>
                                <p className=' text-gray-500'>Gala no 11,12,15, 1st floor 41 National House, Opposite Ansa-A Building, Near Kotak Mahindra Bank,  Saki Vihar Road, Chandivali Junction, Andheri East, Mumbai, Maharashtra -400072.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" ">
                    <h2 className='text-2xl md:text-3xl text-[#c19f5f] cormorant '>Links</h2>
                    <div className={`${Styles.shortline} mt-2 w-1/4`}></div>

                    <div className="links">
                        <ul className="flex flex-col gap-4 mt-10">
                            <Link href={'/about'} className='text-xl  text-[#c19f5f] '>About Us</Link>
                            <Link href={'/products'} className='text-xl  text-[#c19f5f] '>Products</Link>
                            <Link href={'/contact'} className='text-xl  text-[#c19f5f] '>Enquire Now</Link>
                            <Link href={'/contact'} className='text-xl  text-[#c19f5f] '>Contact Us</Link>
                        </ul>
                    </div>
                </div>

                <div className="">

                    <div className="w-max rounded-full bg-[#c19f5f] p-2">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </div>
                    <p className='text-sm text-gray-500 my-10'>Bringing you the finest handcrafted baked goods, made with love and care, using only the highest quality ingredients for a truly delightful experience.</p>
                    <div className="flex justify-start gap-10">
                        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='inline text-xl text-[#c19f5f]' />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='inline text-xl text-[#c19f5f]' />
                        </Link>
                        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='inline text-xl text-[#c19f5f]' />
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='inline text-xl text-[#c19f5f]' />
                        </Link>
                    </div>
                </div>

            </div>
            <div className="mx-6 md:mx-32">
                <div className={`${Styles.shortline} mt-2 `}></div>
                <div className="flex justify-center items-center ">
                    <h2 className='my-10' > Copyright © 2024 All Rights Reserved</h2>

                    <div className="flex gap-4 mx-4 text-sky-500">
                        <Link href="/privacy" target="_blank">Privacy Policy</Link>
                        <Link href="/cancellation" target="_blank">Cancellation</Link>
                        <Link href="/refund" target="_blank">Refund</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
