import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from "@/app/components/MobileNav"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
function Page() {
    return (
        <div className='bg-[#0f0e0f] min-h-screen text-white'>
            <div className="sticky top-0 bg-black z-30">
                <div className="mx-32">
                    <Navbar />
                </div>
                <div className="sticky top-0 bg-[#100f10]">
                    <MobileNav />
                </div>
            </div>

            <div className="bg-[#2d2627] px-6 md:px-32 py-10">
                <Link href="/" className='text-white inline-flex items-center '><FaArrowLeftLong className='mr-2' />Back</Link>
                <h1 className='text-[#c19f5f]  font-semibold text-3xl'>Privacy Policy</h1>
                <h1 className='text-white text-xs pt-5'>Last Updated on November 2024</h1>
            </div>

            <div className="flex flex-col md:flex-row mx-6 md:mx-32 items-center my-6 md:my-10">
                <div className="">
                    <p className='text-white '>
                        At Alforno, we are committed to safeguarding the privacy and personal data of our
                        customers. This Privacy Policy outlines how we collect, use, and protect your
                        information when you visit our website or make a purchase from us.
                    </p>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>Information We Collect</h1>
                        <p className='text-white '>
                            Personal information such as your name, email, phone number, and shipping address. Payment details including credit card information. Information about your purchase history and browsing activity.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>How We Use Your Information</h1>
                        <p className='text-white '>
                            To process orders and deliver products. To improve our website and customer experience. To communicate with you about orders, promotions, and new products. To comply with legal obligations and prevent fraud.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>How We Protect Your Information</h1>
                        <p className='text-white '>
                            We use secure servers and encryption to protect your data. Your payment details are
                            processed through trusted third-party payment processors, and we never store
                            sensitive payment information.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>Cookies</h1>
                        <p className='text-white '>
                            We use cookies to enhance your browsing experience and analyze website traffic. You
                            can adjust your cookie preferences in your browser settings.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>Third-Party Sharing</h1>
                        <p className='text-white '>
                            We do not sell, trade, or otherwise transfer your personal information to outside
                            parties, except to trusted service providers who assist us in operating our business.
                        </p>
                    </div>
                    <div className="py-5">
                        <h1 className='text-[#c19f5f] font-semibold text-xl'>Your Rights</h1>
                        <p className='text-white '>
                            You have the right to access, correct, or request the deletion of your personal data.
                            Please contact us at [email address] to exercise your rights or if you have any privacyrelated concerns.
                        </p>
                    </div>
                </div>
                <div className="">
                    <Image height={1000} width={1000} src="/baker1.png" alt="Alforno" />
                </div>
            </div>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Page
