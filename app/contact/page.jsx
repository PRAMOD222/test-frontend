import Navbar from "@/app/components/Navbar"
import MobileNav from "../components/MobileNav";
import Footer from "@/app/components/Footer"
import Image from "next/image"
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import Styles from '@/css/home.module.css'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"


const Contact = () => {
    return (
        <div className="bg-black min-h-screen text-white scroll-smooth">

            <div className="sticky top-0 bg-black z-30">
                <div className="mx-6 md:mx-32">
                    <Navbar />
                </div>
                <div className="sticky top-0 bg-[#100f10]">
                    <MobileNav />
                </div>
            </div>

            <section className={`relative h-[60vh] ${Styles.contactBg}`}>
                {/* <Image className="object-cover h-[60vh] origin-center relative bg-fixed" src="/contact.jpg" alt="contact" width={2000} height={2000} /> */}
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                    <h2 className="text-center text-5xl  text-white cormorant my-2">Contact</h2>
                    <h2 className="text-center uppercase flex gap-4 mx-auto"><span className="text-[#c19f5f]">home </span>\\ <span>contact</span></h2>
                </div>
            </section>

            <section className='mx-6 md:mx-32 '>

                <div className="hidden md:flex justify-between  my-10 md:my-20">

                    <div className="flex flex-col items-center text-center flex-1">
                        <SlLocationPin className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Location</h2>
                        <h3 className=' text-gray-500'>Gala no 11,12,15, 1st floor 41 National House, Opposite Ansa-A Building, Near Kotak Mahindra Bank,  Saki Vihar Road, Chandivali Junction, Andheri East, Mumbai, Maharashtra -400072.</h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center flex-1">
                        <BiPhoneCall className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Phone</h2>
                        <h3 className=' text-gray-500'>+91 81046 06275 <br /> </h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center flex-1">
                        <CiMail className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Email</h2>
                        <h3 className=' text-gray-500'>Paramount.patisserie@gmail.com <br /> </h3>
                    </div>
                    <div className="border border-dashed border-[#c19f5f] mx-4"></div>

                    <div className="flex flex-col items-center text-center flex-1">
                        <CiTimer className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Opening Hours</h2>
                        <h3 className=' text-gray-500'>Monday to Sunday <br /> 24 * 7</h3>
                    </div>

                </div>

                <div className="md:hidden grid grid-cols-1 gap-4  my-10 md:my-20">

                    <div className="flex flex-col items-center text-center">
                        <SlLocationPin className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Location</h2>
                        <h3 className=' text-gray-500'>Gala no 11,12,15, 1st floor 41 National House, Opposite Ansa-A Building, Near Kotak Mahindra Bank,  Saki Vihar Road, Chandivali Junction, Andheri East, Mumbai, Maharashtra -400072.</h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <BiPhoneCall className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Phone</h2>
                        <h3 className=' text-gray-500'>+91 81046 06275 <br /> </h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <CiMail className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Email</h2>
                        <h3 className=' text-gray-500'>Paramount.patisserie@gmail.com <br /> </h3>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <CiTimer className='text-5xl text-[#c19f5f]' />
                        <h2 className='cormorant text-2xl my-2'>Opening Hours</h2>
                        <h3 className=' text-gray-500'>Monday to Sunday <br /> 24 * 7</h3>
                    </div>

                </div>

            </section>

            <section>
                <iframe className="w-full h-[60vh] md:h-screen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5459973537986!2d74.24460617461261!3d16.6995872222559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101b2dc174645%3A0xfe0736990c6fffce!2sTF%20STRATEGIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1728028376073!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </section>

            <section className="bg-neutral-950 py-20 flex justify-center ">

                <div className="form w-full md:w-1/2 mx-6 md:mx-0">
                    <form >
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10  ">

                            <div className="col-span-1 border border-[#c19f5f] rounded-full p-6 bg-neutral-950 flex-1 ">
                                <input className="outline-none focus:outline-none bg-neutral-950 w-full" type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="col-span-1 border border-[#c19f5f] rounded-full p-6 bg-neutral-950 flex-1 ">
                                <input className="outline-none focus:outline-none bg-neutral-950 w-full focus:bg-neutral-950" type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="col-span-1 border border-[#c19f5f] rounded-full p-6 bg-neutral-950 flex-1 ">

                                <input className="outline-none focus:outline-none bg-neutral-950 w-full" type="text" name="phone" id="phone" placeholder="Phone" />

                            </div>
                            <div className="col-span-1 border border-[#c19f5f] rounded-full p-4 bg-neutral-950 flex-1 ">

                                <Select>
                                    <SelectTrigger className="w-full outline-none border-none text-slate-300">
                                        <SelectValue className="" placeholder="Select Products" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-neutral-950 text-white">
                                        <SelectItem value="barcakes">Bar Cakes</SelectItem>
                                        <SelectItem value="barcakes">Bar Cakes</SelectItem>
                                        <SelectItem value="barcakes">Bar Cakes</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className="col-span-1 md:col-span-2 bg-neutral-950 rounded-[40px] p-6 border border-[#c19f5f]">
                                <textarea className="outline-none focus:outline-none bg-neutral-950 w-full h-20" name="message" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="my-4 md:my-10">
                            <div className="flex justify-center">
                                <button type="submit" className="border rounded-full w-1/2 md:w-[25%] py-6 border-[#c19f5f] hover:bg-[#c19f5f] hover:text-neutral-950 transition-all duration-300">Submit</button>
                            </div>
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