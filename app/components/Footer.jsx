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

                <div className="">
                    <div className="w-max rounded-full bg-[#c19f5f] p-2">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </div>
                    <p className='text-sm text-gray-500 my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni tempora dicta, ducimus sapiente ipsa dolorum omnis asperiores nihil ex laborum sequi cupiditate ipsum nam hic </p>
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

                <div className=" ">
                    <h2 className='text-2xl md:text-3xl text-[#c19f5f] cormorant '>Explore</h2>
                    <div className={`${Styles.shortline} mt-2 w-1/4`}></div>

                    <div className="links flex flex-col gap-4 mt-10">
                        <div className="flex justify-start items-center gap-4">
                            <BiPhoneCall className='text-2xl text-[#c19f5f]' />
                            <div>
                                <h3 className='text-sm text-[#c19f5f]'>Call Us :</h3>
                                <p className=' text-gray-500'>+880 182 456 7890</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <SlLocationPin className='text-2xl text-[#c19f5f]' />
                            <div>
                                <h3 className='text-sm text-[#c19f5f]'>Our Location</h3>
                                <p className=' text-gray-500'>7th lane, Rajarampuri, Kolhapur</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <CiMail className='text-2xl text-[#c19f5f]' />
                            <div>
                                <h3 className='text-sm text-[#c19f5f]'>Email</h3>
                                <p className=' text-gray-500'>ZGn2K@example.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" ">
                    <h2 className='text-2xl md:text-3xl text-[#c19f5f] cormorant '>Links</h2>
                    <div className={`${Styles.shortline} mt-2 w-1/4`}></div>

                    <div className="links">
                        <ul className="flex flex-col gap-4 mt-10">
                            <li className='text-xl  text-[#c19f5f] '>About Us</li>
                            <li className='text-xl  text-[#c19f5f] '>Products</li>
                            <li className='text-xl  text-[#c19f5f] '>Enquire Now</li>
                            <li className='text-xl  text-[#c19f5f] '>Contact Us</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="mx-6 md:mx-32">
                <div className={`${Styles.shortline} mt-2 `}></div>
                <div className="flex justify-center items-center ">
                    <h2 className='my-10' > Copyright © 2024 All Rights Reserved</h2>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
