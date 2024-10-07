import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Image from "next/image"
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import Styles from '@/css/home.module.css'


const Contact = () => {
    return (
        <div className="bg-black min-h-screen text-white scroll-smooth">
            <div className="sticky top-0 bg-black z-30">
                <div className="mx-32">
                    <Navbar />
                </div>
            </div>

            <section className={`relative h-[60vh] ${Styles.contactBg}`}>
                {/* <Image className="object-cover h-[60vh] origin-center relative bg-fixed" src="/contact.jpg" alt="contact" width={2000} height={2000} /> */}
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                    <h2 className="text-center text-5xl  text-white cormorant my-2">Contact</h2>
                    <h2 className="text-center uppercase flex gap-4 mx-auto"><span className="text-[#c19f5f]">home </span>\\ <span>contact</span></h2>
                </div>
            </section>

            <section className='mx-32 '>

                <div className="flex justify-between  my-20">
                    <div className="flex flex-col items-center text-center">
                        <SlLocationPin className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Location</h2>
                        <h3 className=' text-gray-500'>29 Nicolas str, New York, 987597-50</h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center">
                        <BiPhoneCall className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Phone</h2>
                        <h3 className=' text-gray-500'>+91 12345 67890 <br /> +91 12345 67890</h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center">
                        <CiMail className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Email</h2>
                        <h3 className=' text-gray-500'>YVqFP@example.com <br /> YVqFP@example.com</h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center">
                        <CiTimer className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Opening Hours</h2>
                        <h3 className=' text-gray-500'>Monday to Saturday <br /> 9:00am to 6:00pm</h3>
                    </div>


                </div>

            </section>

            <section>
                <iframe className="w-full h-screen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5459973537986!2d74.24460617461261!3d16.6995872222559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101b2dc174645%3A0xfe0736990c6fffce!2sTF%20STRATEGIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1728028376073!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


            </section>

            <section className="bg-neutral-950 py-20 flex justify-center ">

                <div className="form  w-1/2 ">
                    <form className=" space-y-10">
                        <div className="flex gap-4 ">
                            <div className="border border-[#c19f5f] rounded-full p-6 bg-neutral-950 flex-1 ">
                                <input className="outline-none focus:outline-none bg-neutral-950 w-full" type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="border border-[#c19f5f] rounded-full p-6 bg-neutral-950 flex-1 ">
                                <input className="outline-none focus:outline-none bg-neutral-950 w-full focus:bg-neutral-950" type="email" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="bg-neutral-950 rounded-[40px] p-6 border border-[#c19f5f]">
                            <textarea className="outline-none focus:outline-none bg-neutral-950 w-full h-20"  name="message" id="message"  placeholder="Message"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="border rounded-full w-[25%] py-6 border-[#c19f5f] hover:bg-[#c19f5f] hover:text-neutral-950 transition-all duration-300">Submit</button>
                        </div>
                    </form>
                </div>

            </section>

            <div className={`border-b border-dashed border-[#c19f5f]  `}></div>
            <Footer />
        </div>
    )
}

export default Contact