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
                <h1 className='text-[#c19f5f]  font-semibold text-3xl'>Refund Policy</h1>
                <h2 className='text-white text-xs pt-5'>Last Updated on November 2024</h2>
            </div>

            <div className="flex flex-col md:flex-row mx-6 md:mx-32 items-center my-6 md:my-10">
                <div className="">
                    <p className='text-white '>
                        At Alforno, customer satisfaction is our top priority. If you are not fully satisfied with
                        your purchase, we offer refunds under the following conditions
                    </p>
                    <div className="py-5">
                        <h2 className='text-[#c19f5f] font-semibold text-xl'>Eligibility for Refund</h2>
                        <p className='text-white '>
                            Products must be returned in their original condition and packaging. Refund requests must be made within [X] days of delivery. Perishable items (such as baked goods) may not be eligible for a refund unless they
                            arrive damaged or defective.
                        </p>
                    </div>
                    <div className="py-5">
                        <h2 className='text-[#c19f5f] font-semibold text-xl'>How to Request a Refund</h2>
                        <p className='text-white '>
                            Contact us at [email address] with your order details and reason for the refund
                            request. We will review your request and respond within [X] business days.
                        </p>
                    </div>
                    <div className="py-5">
                        <h2 className='text-[#c19f5f] font-semibold text-xl'>Refund Process</h2>
                        <p className='text-white '>
                            If approved, your refund will be processed, and the amount will be credited back to
                            your original method of payment within [X] business days. Shipping charges are non-refundable.
                        </p>
                    </div>
                </div>
                <div className="">
                    <Image height={1000} width={1000} src="/baker.png" alt="Alforno" />
                </div>
            </div>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Page
