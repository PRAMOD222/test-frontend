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

      <div className="bg-[#2d2627]  px-6 md:px-32 py-10">
        <Link href="/" className='text-white inline-flex items-center '><FaArrowLeftLong className='mr-2' />Back</Link>
        <h1 className='text-[#c19f5f]  font-semibold text-3xl'>Cancellation Policy</h1>
        <h1 className='text-white text-xs pt-5'>Last Updated on November 2024</h1>
      </div>

      <div className="flex flex-col md:flex-row mx-6 md:mx-32 items-center my-6 md:my-10">
        <div className="">
          <p className='text-white '>
            We understand that plans can change and we strive to accommodate order
            cancellations when possible.
          </p>
          <div className="py-5">
            <h1 className='text-[#c19f5f] font-semibold text-xl'>Order Cancellations</h1>
            <p className='text-white '>
              Cancellations can be made within [X] hours of placing your order. If the order has already been processed or shipped, cancellations may not be possible. Contact us at [email address] as soon as possible if you need to cancel an order.
            </p>
          </div>
          <div className="py-5">
            <h1 className='text-[#c19f5f] font-semibold text-xl'>Refund for Cancelled Orders</h1>
            <p className='text-white '>
              If your cancellation is successful, a full refund will be issued to your original payment
              method within [X] business days. Custom or special orders may not be eligible for cancellation or refund once
              production has started.
            </p>
          </div>

        </div>
        <div className="">
          <Image height={1000} width={1000} src="/baker2.png" alt="Alforno" />
        </div>
      </div>

      <section>
        <Footer />
      </section>

    </div>
  )
}

export default Page
