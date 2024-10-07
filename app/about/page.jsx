import Styles from '@/css/home.module.css'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Image from 'next/image';
import { FaRegFileAlt } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-black min-h-screen text-white scroll-smooth">
            <div className="sticky top-0 bg-black z-30">
                <div className="mx-32">
                    <Navbar />
                </div>
            </div>

            <section className={`relative h-[60vh] ${Styles.aboutBg}`}>
                {/* <Image className="object-cover h-[60vh] origin-center relative bg-fixed" src="/contact.jpg" alt="contact" width={2000} height={2000} /> */}
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                    <h2 className="text-center text-5xl  text-white cormorant my-2">About</h2>
                    <h2 className="text-center uppercase flex gap-4 mx-auto"><span className="">home </span> // <span>About</span></h2>
                </div>
            </section>

            <section>
                <div className="flex  mx-32 gap-8 py-8">
                    <div className=" w-1/2 space-y-8">
                        <h2 className='cormorant text-4xl'>Lorem ipsum dolor <span className='text-[#c19f5f]'> sit amet </span> consectetur adipisicing elit. </h2>

                        <p className='text-gray-500 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis in a exercitationem deserunt labore consequatur, dignissimos rem, fuga dolor voluptatem culpa saepe excepturi suscipit.</p>

                        <div className='text-[#c19f5f] hover:text-white transition-all duration-300 flex items-center gap-2'  >
                            <FaRegFileAlt className='inline text-2xl' />
                            <h2 className='cormorant text-2xl'>Download Brochure</h2>
                        </div>

                        <button type="submit" className="border rounded-full w-[40%] py-5 border-[#c19f5f] hover:bg-[#c19f5f] hover:text-neutral-950 transition-all duration-300">Read More </button>

                    </div>
                    <div className=" w-1/2 flex gap-8 p-4">
                        <div className="w-1/2 ">
                            <Image width={4160} height={4160} src="/about1.jpg" alt="about" className='border border-[#c19f5f] rounded-md' />
                        </div>
                        <div className="w-1/2 ">
                            <Image width={4480} height={6720} src="/about2.jpg" alt="about" className='border border-[#c19f5f] rounded-md' />
                        </div>
                    </div>
                </div>
                <div className="mx-32">
                    <div className={`${Styles.shortline} `}></div>
                </div>

            </section>

            <section>
                <div className="flex mx-32 my-20 gap-8">

                    <div className=" flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Natural Organic Product</h2>
                            <p className='text-gray-500'>Nullam vel condimentum odio, non dictum nulla. Etiam iaculis elit ultricies.</p>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Natural Organic Product</h2>
                            <p className='text-gray-500'>Nullam vel condimentum odio, non dictum nulla. Etiam iaculis elit ultricies.</p>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center gap-4">
                        <Image width={200} height={200} src="/organic.svg" alt="about" className='w-1/4' />
                        <div>
                            <h2 className='cormorant text-2xl' >Natural Organic Product</h2>
                            <p className='text-gray-500'>Nullam vel condimentum odio, non dictum nulla. Etiam iaculis elit ultricies.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className={`${Styles.about3} h-[70vh]  `}>
                    <div className='flex items-center justify-center text-center h-full w-2/3 mx-auto relative '>
                        <h2 className='cormorant text-7xl'>Made with love <span className='text-[#c19f5f]'>unique sweets</span> for gourmet</h2>
                        <div className={`${Styles.spin}  border border-[#c19f5f] `}></div>
                    </div>
                </div>
            </section>

            <section className='mx-32 py-20'>

                <div className="flex justify-between">
                    <div className="">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-4xl '>Stores</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-4xl '>Stores</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-4xl '>Stores</h3>
                    </div>
                    <Image className='w-3 h-max' width={100} height={100} alt='line' src={'/chottiline.png'} />

                    <div className="">
                        <h2 className='cormorant text-8xl text-[#c19f5f]'>230</h2>
                        <h3 className='cormorant text-4xl '>Stores</h3>
                    </div>
                </div>


            </section>

            <section>
                <Footer />
            </section>

        </div>
    )
}

export default About